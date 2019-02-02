
namespace game {

    export class UIDataGetSystem extends ut.ComponentSystem {
        
        OnUpdate(): void
        {

            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.X))
            {
                if (!GameService.IsPaused(this.world))
                    UIDataService.TooglePauseMenu(this.world, true);
                else
                    UIDataService.TooglePauseMenu(this.world, false);
            }

            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Z))
            {

            }
        }
    }
}
