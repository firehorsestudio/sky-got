
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

            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.K))
            {
                GameService.SetGameState(this.world, GameState.PLAYING);
            }


            switch (GameService.GetCurrentGameState(this.world))
            {
                case GameState.MENU:
                    if (UserDataService.GetBoolean("PlayedFirstGame")) {
                        GameService.SetGameState(this.world, GameState.THROW);
                        break;
                    }
                    else {
                        UIDataService.ToogleMenuInitial(this.world, true);
                        UIDataService.CheckForMenuInitialButtons(this.world);
                        break;
                    }
                case GameState.PAUSED:
                    UIDataService.CheckForPauseButton(this.world);
                    break;

                case GameState.PLAYING:
                    UIDataService.CheckForPauseButton(this.world);
                    UIDataService.ToogleInGamePanel(this.world, true);
                    UIDataService.CheckForPlayerScore(this.world);
                    break;
            }
        }
    }
}
