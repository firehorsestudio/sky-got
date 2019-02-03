/// <reference path="FlyingSystem.ts" />

namespace game {

    @ut.executeAfter(FlyingSystem)
    export class HitGroundSystem extends ut.ComponentSystem {

        OnUpdate(): void {

            if ( (GameService.IsPaused(this.world)) || (GameService.GetCurrentGameState(this.world) != GameState.PLAYING) )
                return;

            let config = GameService.GetConfig(this.world);
            this.world.forEach(
                [ut.Entity, Hero, Flying, ut.Core2D.TransformLocalPosition],
                (entity, hero, flying, transform) => {

                    let pos = transform.position;
                    if (pos.y <= config.GroundPosition) {
                        pos.y = config.GroundPosition;

                        let nextAirSpeed = -flying.AirSpeed * .75;
                        let nextScrollSpeed = flying.ScrollSpeed * .75;

                        nextScrollSpeed = Math.max(nextScrollSpeed, 0);

                        if (nextAirSpeed < 10 || nextScrollSpeed <= 10) {
                            flying.AirSpeed = 0;
                            this.world.removeComponent(entity, Flying);
                            GameService.SetGameState(this.world, GameState.END);
                        }
                        else {
                            flying.AirSpeed = nextAirSpeed;
                            flying.ScrollSpeed = nextScrollSpeed;
                        }
                    }

                    transform.position = pos;
                }
            );
        }
    }
}
