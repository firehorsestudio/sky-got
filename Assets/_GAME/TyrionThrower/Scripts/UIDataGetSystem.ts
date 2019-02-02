
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
                GameService.SetGameState(this.world, GameState.MENU);
                console.log("GameStateChangeToMenu");
            }

            if (GameService.GetCurrentGameState(this.world) == GameState.PLAYING)
            {
                
            }

            switch (GameService.GetCurrentGameState(this.world))
            {
                case GameState.MENU:
                   UIDataService.ToogleMenuInitial(this.world, true);
                   UIDataService.CheckForMenuInitialButtons(this.world);
                    break;
  
                case GameState.PAUSED:
                    UIDataService.CheckForPauseMenuButtons(this.world);
                    break;

                case GameState.PLAYING:
                    UIDataService.ToogleInGamePanel(this.world, true);
                    UIDataService.CheckForPlayerScore(this.world);
                    break;
            }
        }
    }
}
