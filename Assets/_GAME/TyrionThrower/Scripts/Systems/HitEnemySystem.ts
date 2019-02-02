/// <reference path="FlyingSystem.ts" />
/// <reference path="HitGroundSystem.ts" />

namespace game {

    @ut.executeAfter(FlyingSystem)
    @ut.executeBefore(HitGroundSystem)
    export class HitEnemySystem extends ut.ComponentSystem {

        OnUpdate(): void {

            if (GameService.IsPaused(this.world))
                return;

            let config = GameService.GetConfig(this.world);
            this.world.forEach(
                [ut.Entity, Hero, Flying, ut.Core2D.TransformLocalPosition],
                (entity, hero, flying, transform) => {

                    let pos = transform.position;

                    //look for enemy. Hit. Fix position

                    transform.position = pos;
                }
            );
        }
    }
}
