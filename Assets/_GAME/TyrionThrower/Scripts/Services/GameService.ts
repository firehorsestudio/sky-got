
namespace game {

    export class GameService {

        static GAME: ut.Entity;
        static HERO: ut.Entity;

        static GetConfig(world: ut.World): Config {
            return world.getConfigData(Config);
        }

        static GetGameEntity(world: ut.World): ut.Entity {

            if (!world.exists(this.GAME)) {
                this.GAME = world.getEntityByName("Game");
                if (!world.exists(this.GAME)) {
                    this.GAME = null;
                    return null;
                }
            }

            return this.GAME;
        }

        static GetGame(world: ut.World): Game {
            let gameEntity = this.GetGameEntity(world);
            if (gameEntity == null)
                return null;

            return world.getComponentData(gameEntity, Game);
        }
        
        static SetGameState(world: ut.World, state: GameState) {
            let game = this.GetGame(world);
            game.State = state;
            world.setComponentData(this.GAME, game);
        }

        static IsPaused(world: ut.World) {
            let state = this.GetGame(world).State;
            return state == GameState.PAUSED;
        }

        static GetCurrentGameState(world: ut.World) {
            let state = this.GetGame(world).State;
            return state;
        }

        static GetHeroEntity(world: ut.World): ut.Entity {

            if (!world.exists(this.HERO)) {
                this.HERO = world.getEntityByName("Hero");
                if (!world.exists(this.HERO)) {
                    this.HERO = null;
                    return null;
                }
            }

            return this.HERO;
        }

        static GetHero(world: ut.World): Hero {
            let heroEntity = this.GetHeroEntity(world);
            if (heroEntity == null)
                return null;

            return world.getComponentData(heroEntity, Hero);
        }
    }
}
