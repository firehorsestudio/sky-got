
namespace game {

    export class UIDataService
    {
        static PAUSEMENU: ut.Entity;
        static PAUSEMENUGROUP: ut.EntityGroup;
        private static PREVIOUSTATE: GameState;
        static INGAMEPANEL: ut.EntityGroup;
        static MENUINITIALL: ut.EntityGroup;

        static GetPauseMenuEntity(world: ut.World): ut.Entity {

            if (!world.exists(this.PAUSEMENU)) {
                this.PAUSEMENU = world.getEntityByName("PauseMenu");
                if (!world.exists(this.PAUSEMENU)) {
                    this.PAUSEMENU = null;
                    return null;
                }
            }

            return this.PAUSEMENU;
        }

        static GetPauseMenuComponent(world: ut.World): PauseMenu {
            let pauseMenu = this.GetPauseMenuEntity(world);
            if (pauseMenu == null)
                return null;

            return world.getComponentData(pauseMenu, PauseMenu);
        }

        static TooglePauseMenu(world: ut.World, create: boolean)
        {
            if (create && this.PAUSEMENUGROUP == null) {
                this.PAUSEMENUGROUP = ut.EntityGroup.instantiate(world, "game.PauseMenuGroup");
                this.PREVIOUSTATE = GameService.GetCurrentGameState(world);
                GameService.SetGameState(world, GameState.PAUSED);
                
            }
            else if (!create)
            {
                this.PAUSEMENUGROUP = null;
                ut.EntityGroup.destroyAll(world, "game.PauseMenuGroup");
                GameService.SetGameState(world, this.PREVIOUSTATE);
            }
        }

        /*static CheckForPauseMenuButtons(world: ut.World)
        {
            if (this.PAUSEMENUGROUP != null)
            {
                let buttonUnpauseEntity = world.getEntityByName("UnpauseButton");
                let btnUnpause = world.getComponentData(buttonUnpauseEntity, game.CustomButton);

                if (btnUnpause.JustClicked)
                    this.TooglePauseMenu(world, false);
            }
        }*/

        static CheckForPauseButton(world: ut.World) {
            if (this.INGAMEPANEL != null) {
                let buttonPause = world.getEntityByName("PauseButton");
                let btnPause = world.getComponentData(buttonPause, game.CustomButton);

                if (btnPause.JustClicked)
                {
                    if (!GameService.IsPaused(world))
                        this.TooglePauseMenu(world, true);
                    else
                        this.TooglePauseMenu(world, true);

                }
            }
        }
        

        static ToogleInGamePanel(world: ut.World, create: boolean) {
            if (create && this.INGAMEPANEL == null) {
                this.INGAMEPANEL = ut.EntityGroup.instantiate(world, "game.InGameTopMenuGroup");
            }
            else if (!create) {
                this.INGAMEPANEL = null;
                ut.EntityGroup.destroyAll(world, "game.InGameTopMenuGroup");
            }
        }

        static CheckForPlayerScore(world: ut.World)
        {
            let herospeed = world.getEntityByName("HeroSpeedPoints");
            let heroSpeedText = world.getComponentData(herospeed, ut.Text.Text2DRenderer);
            heroSpeedText.text += 1;
        }

        static ToogleMenuInitial(world: ut.World, create: boolean) {
            if (create && this.MENUINITIALL == null) {
                this.MENUINITIALL = ut.EntityGroup.instantiate(world, "game.MenuInitialGroup");
            }            
            else if (!create) {
                this.MENUINITIALL = null;
                ut.EntityGroup.destroyAll(world, "game.MenuInitialGroup");
            }
        }

        static CheckForMenuInitialButtons(world: ut.World) {
            if (this.MENUINITIALL != null) {
                let buttonPlayGame = world.getEntityByName("PlayGameButton");
                let btnPlayGame = world.getComponentData(buttonPlayGame, game.CustomButton);

                if (btnPlayGame.JustClicked)
                {
                    this.ToogleMenuInitial(world, false);
                    GameService.SetGameState(world, GameState.THROW);
                    this.ToogleInGamePanel(world, true);
                    ut.EntityGroup.instantiate(world, "game.GroundTile");
                    UserDataService.SetBoolean("PlayedFirstGame", true);
                    
                }
            }
        }


    }
}
