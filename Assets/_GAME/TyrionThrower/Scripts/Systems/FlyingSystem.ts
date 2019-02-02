
namespace game {

    export class FlyingSystem extends ut.ComponentSystem {
        
        OnUpdate(): void {

            if (GameService.IsPaused(this.world) || (GameService.GetCurrentGameState(this.world) != GameState.PLAYING) )
                return;

            let dt = this.scheduler.deltaTime();
            let config = GameService.GetConfig(this.world);
            this.world.forEach(
				[ut.Entity, Hero, Flying, ut.Core2D.TransformLocalPosition],
                (entity, hero, flying, transform) => {
                    
                    let pos = transform.position;
                    flying.PreviousPosition = pos;

                    pos.y += flying.AirSpeed * dt;
                    flying.AirSpeed -= config.Gravity * dt;

                    transform.position = pos;
				}
			);
		}
    }
}
