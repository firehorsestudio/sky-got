
namespace game {

    export class GameService {

        static MAINCAMERA: ut.Entity;
        static GAME: ut.Entity;
        static HERO: ut.Entity;

        static Lerp(start: number, end: number, amt: number): number {
            return (1 - amt) * start + amt * end;
        }

        static GetConfig(world: ut.World): Config {
            return world.getConfigData(Config);
        }

        static GetMainCameraEntity(world: ut.World): ut.Entity {

            if (!world.exists(this.MAINCAMERA)) {
                this.MAINCAMERA = world.getEntityByName("MainCamera");
                if (!world.exists(this.MAINCAMERA)) {
                    this.MAINCAMERA = null;
                    return null;
                }
            }

            return this.MAINCAMERA;
        }

        static GetMainCamera(world: ut.World): ut.Core2D.Camera2D {
            let mainCameraEntity = this.GetMainCameraEntity(world);
            if (mainCameraEntity == null)
                return null;

            return world.getComponentData(mainCameraEntity, ut.Core2D.Camera2D);
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

        static GetCurrentGameState(world: ut.World) {
            let state = this.GetGame(world).State;
            return state;
        }

        static ConvertRange01(min : number, max : number, value: number) : number {
            return this.BaseConvertRange(min, max, 0, 1, value);
        }

        static BaseConvertRange(oldMin: number, oldMax: number, newMin: number, newMax: number, value: number) : number {
            if (oldMax == oldMin)
                return newMax;

            return (value - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
        }

        
        static SetGameState(world: ut.World, state: GameState) {
            let game = this.GetGame(world);
            game.State = state;
            world.setComponentData(this.GAME, game);
        }

        static IsGameState(world: ut.World, state: GameState) {
            return this.GetGame(world).State == state;
        }

        static IsPaused(world: ut.World) {
            return this.IsGameState(world, GameState.PAUSED);
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

        static InOut(k : number) : number {
            if ((k *= 2)<1) return 0.5 * k * k;
            return -0.5 * ((k -= 1)* (k - 2) - 1);
        }	

        static GetHero(world: ut.World): Hero {
            let heroEntity = this.GetHeroEntity(world);
            if (heroEntity == null)
                return null;

            return world.getComponentData(heroEntity, Hero);
        }
    }
}
