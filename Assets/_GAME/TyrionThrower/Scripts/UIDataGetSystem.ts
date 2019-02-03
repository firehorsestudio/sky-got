
namespace game {

    export class DestroyZombiesSystem extends ut.ComponentSystem {

        OnUpdate(): void {

            this.world.forEach(
                [ut.Entity, ReusableEnemy, ut.Core2D.TransformLocalPosition],
                (entity, enemy, transform) => {
                    if (transform.position.x < enemy.Offset)
                    {
                        this.world.destroyEntity(entity);
                    }
                }
            );

        }

    }

    export class SpawnZombiesSystem extends ut.ComponentSystem {

        OnUpdate(): void
        {
            if (GameService.IsGameState(this.world, GameState.PLAYING)) {

                let dt = this.scheduler.deltaTime();
                let timerEntity = this.world.getEntityByName("SpawnTimer");
                let spawnTimer = this.world.getComponentData(timerEntity, SpawnTimer);

                spawnTimer.Timer += dt;
                if (spawnTimer.Timer >= spawnTimer.NextDuration) {

                    spawnTimer.NextDuration = .5 + Math.random() * 1.0;// * 1/GameService.GetHero(this.world).ScrollSpeed; //* spawnTimer.Modifier;
                    spawnTimer.Timer = 0;
                    let zombieEntity = ut.EntityGroup.instantiate(this.world, "game.Zombie")[0];
                    let zombieTransform = this.world.getComponentData(zombieEntity, ut.Core2D.TransformLocalPosition);
                    var pos = zombieTransform.position;
                    pos.x = 600;
                    pos.y = pos.y + -10 + Math.random() * 10;
                    zombieTransform.position = pos;
                    this.world.setComponentData(zombieEntity, zombieTransform);

                    spawnTimer.Modifier += spawnTimer.ModifierIncrement;
                }

                this.world.setComponentData(timerEntity, spawnTimer);
            }

        }

    }

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

            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.P)) {
                UserDataService.DeleteAllCookies();
            }


            switch (GameService.GetCurrentGameState(this.world))
            {
                case GameState.MENU:
                    
                    UIDataService.ToogleGameplayEntity(this.world);
                    GameService.SetGameState(this.world, GameState.THROW);
                    break;
                /*
                case GameState.MENU:
                    UIDataService.ToogleGameplayEntity(this.world);
                    if (UserDataService.GetBoolean("PlayedFirstGame")) {
                        GameService.SetGameState(this.world, GameState.THROW);
                        break;
                    }
                    else {
                        UIDataService.ToogleMenuInitial(this.world, true);
                        UIDataService.CheckForMenuInitialButtons(this.world);
                        break;
                    }
                */
                case GameState.PAUSED:
                    UIDataService.CheckForPauseButton(this.world);
                    break;

                case GameState.THROW:
                    
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
