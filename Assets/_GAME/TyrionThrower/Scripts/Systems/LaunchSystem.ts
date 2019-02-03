
namespace game {

    export class LaunchSystem extends ut.ComponentSystem {
        
        OnUpdate(): void {

            if (GameService.IsPaused(this.world) || (GameService.GetCurrentGameState(this.world) != GameState.THROW) || (GameService.GetCurrentGameState(this.world) != GameState.PLAYING))
                return;

			if (ut.Core2D.Input.getMouseButtonDown(0))
            {
                let theGame = GameService.GetGame(this.world);
                if (theGame.State == GameState.THROW) {

                    this.world.forEach(
                        [ut.Entity, Hero],
                        (entity, hero) => {

                            if (!this.world.hasComponent(entity, Flying)) {
                                this.world.addComponent(entity, Flying);
                                let flying = this.world.getComponentData(entity, Flying);
                                flying.ScrollSpeed = 50;
                                flying.AirSpeed = 150;
                                this.world.setComponentData(entity, flying);
                            }
                        }
                    );

                    GameService.SetGameState(this.world, GameState.PLAYING);
                }
			}
        }
    }
}
