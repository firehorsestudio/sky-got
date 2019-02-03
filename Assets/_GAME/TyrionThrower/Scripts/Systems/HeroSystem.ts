
namespace game {
    
    export class HeroSystem extends ut.ComponentSystem {
        
        OnUpdate(): void {

            if (GameService.IsPaused(this.world) || (GameService.GetCurrentGameState(this.world) != GameState.THROW) || (GameService.GetCurrentGameState(this.world) != GameState.PLAYING))
                return;

            let config = GameService.GetConfig(this.world);
            let dt = this.scheduler.deltaTime();
            let heroEntity = GameService.GetHeroEntity(this.world);
            let hero = this.world.getComponentData(heroEntity, Hero);
            let heroTransform = this.world.getComponentData(heroEntity, ut.Core2D.TransformLocalPosition);

            if (GameService.IsGameState(this.world, GameState.THROW)) {

                if (InputService.IsMouseDown())
                {
                    hero.AirSpeed = 400;
                    hero.ScrollSpeed = 50;
                    GameService.SetGameState(this.world, GameState.PLAYING);

                    this.world.setComponentData(heroEntity, hero);
                }

                return;
            }
            else if (GameService.IsGameState(this.world, GameState.PLAYING)) {

                let pos = heroTransform.position;

                if (hero.IsSmashingCooldown)
                {
                    hero.SmashCooldownTimer += dt;
                    if (this.IsSmashingCooldownDone(hero, config)) {
                        // BLINK TO SHOW THAT YOU CAN USE SMASH AGAIN
                    }
                }

                if (!hero.IsSmashing && (!hero.IsSmashingCooldown || this.IsSmashingCooldownDone(hero, config))) {
                    if (InputService.IsMouseDown()) {
                        hero.AirSpeed = config.SmashForce;
                        hero.IsSmashing = true;
                    }
                }
                
                pos.y += hero.AirSpeed * dt;
                if (!hero.IsSmashing)
                    hero.AirSpeed += config.Gravity * dt;




                //check for enemy collisions here



                if (pos.y <= config.GroundPosition) {
                    pos.y = config.GroundPosition;

                    hero = this.ResetSmash(hero);

                    if (Math.abs(hero.AirSpeed) < 55) {
                        hero.AirSpeed = 0;
                        hero.ScrollSpeed = 0;
                        GameService.SetGameState(this.world, GameState.THROW);
                    }
                    else {
                        hero.AirSpeed = -hero.AirSpeed * .75;
                    }
                }

                heroTransform.position = pos

                //UPDATE COMPONENTS
                this.world.setComponentData(heroEntity, hero);
                this.world.setComponentData(heroEntity, heroTransform);

                return;
            }
        }

        ResetSmash(hero: Hero): Hero {
            hero.IsSmashingCooldown = hero.IsSmashing;
            hero.IsSmashing = false;
            hero.SmashCooldownTimer = 0;
            return hero;
        }

        IsSmashingCooldownDone(hero: Hero, config: Config) : boolean {
            return hero.SmashCooldownTimer >= config.SmashCooldown;
        }
    }

    export class InputService {
        static IsMouseDown(): boolean {
            return ut.Core2D.Input.getMouseButtonDown(0);
        }
    }
}
