
namespace game {

    export class UIDataService
    {
        static PAUSEMENU: ut.Entity;
        static PAUSEMENUGROUP: ut.EntityGroup;
        private static PREVIOUSTATE: GameState;

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
                GameService.SetGameState(world, GameState.PLAYING);
            }


        }




    }
}
