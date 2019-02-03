
namespace game {

    export class MovingWithPlayerSystem extends ut.ComponentSystem {

        OnUpdate(): void {

            let hero = GameService.GetHero(this.world);
            let dt = this.scheduler.deltaTime();
            this.world.forEach(
                [ut.Entity, MovingWithPlayer, ut.Core2D.TransformLocalPosition],
                (entity, moving, transform) => {

                    if (moving.Deactivated)
                        return;

                    let pos = transform.position;
                    pos.x -= moving.Speed * hero.ScrollSpeed * dt;
                    transform.position = pos;
                }
            );

        }

    }

    export class RepeatingBackgroundSystem extends ut.ComponentSystem {

        OnUpdate(): void {

            this.world.forEach(
                [ut.Entity, RepeatingBackground],
                (entity, bg) => {
                    let t1 = this.world.getComponentData(bg.First, ut.Core2D.TransformLocalPosition);
                    let t2 = this.world.getComponentData(bg.Second, ut.Core2D.TransformLocalPosition);  

                    var t1Pos = t1.position;
                    var t2Pos = t2.position;
                    if (t1Pos.x < bg.Offscreen)
                        t1Pos.x = t2Pos.x + bg.Spacing;

                    if (t2Pos.x < bg.Offscreen)
                        t2Pos.x = t1Pos.x + bg.Spacing;

                    t1.position = t1Pos;
                    t2.position = t2Pos;

                    this.world.setComponentData(bg.First, t1);
                    this.world.setComponentData(bg.Second, t2);
                }
            );

        }

    }
    
    export class HeroSystem extends ut.ComponentSystem {
        
        OnUpdate(): void {

            if (GameService.IsPaused(this.world))
                return;

            let config = GameService.GetConfig(this.world);
            let dt = this.scheduler.deltaTime();
            let heroEntity = GameService.GetHeroEntity(this.world);
            let hero = this.world.getComponentData(heroEntity, Hero);
            let heroTransform = this.world.getComponentData(heroEntity, ut.Core2D.TransformLocalPosition);
            let heroRotation = this.world.getComponentData(heroEntity, ut.Core2D.TransformLocalRotation);
            let dwarfSprites = this.world.getComponentData(heroEntity, DwarfSprites);
            let dwarfRenderer = this.world.getComponentData(heroEntity, ut.Core2D.Sprite2DRenderer);
            let throwState = this.world.getComponentData(heroEntity, ThrowState);

            if (GameService.IsGameState(this.world, GameState.THROW)) {

                dwarfRenderer.sprite = dwarfSprites.Idle;

                if (throwState.State == 0) {
                    if (InputService.IsMouseDown()) {
                        throwState.Angle = 400;
                        throwState.State = 1;
                        this.world.setComponentData(heroEntity, throwState);
                    }
                    return;
                }
                else if (throwState.State == 1) {
                    if (InputService.IsMouseDown()) {
                        throwState.Force = 25;
                        throwState.State = 2;
                        this.world.setComponentData(heroEntity, throwState);
                    }
                    return;
                }
                else if (throwState.State == 2) {

                    throwState.ThrowTimer += dt;

                    let stickEntity = this.world.getEntityByName("Stick");
                    let stickQuaternionRotation = this.world.getComponentData(stickEntity, ut.Core2D.TransformLocalRotation);
                    let stickRotation = this.world.getComponentData(stickEntity, Rotation2D);

                    let ratio = throwState.ThrowTimer / .1;
                    ratio = Math.min(1, ratio);

                    let currentRotation = GameService.Lerp(0, 60, ratio);
                    stickRotation.Rotation = currentRotation;
                    stickQuaternionRotation.rotation = stickQuaternionRotation.rotation.setFromEuler(new Euler(0, 0, -currentRotation * 0.0174533));

                    if (ratio >= 1.0)
                        throwState.State = 3;

                    this.world.setComponentData(heroEntity, throwState);
                    this.world.setComponentData(stickEntity, stickQuaternionRotation);
                    this.world.setComponentData(stickEntity, stickRotation);
                    this.world.setComponentData(stickEntity, stickQuaternionRotation);

                    return;
                }
                else if (throwState.State == 3) {
                    let worldPosition = ut.Core2D.TransformService.computeWorldPosition(this.world, heroEntity);
                    ut.Core2D.TransformService.unlink(this.world, heroEntity);
                    heroRotation.rotation = heroRotation.rotation.setFromEuler(new Euler(0, 0, 0));

                    var pos = heroTransform.position;
                    pos.x = worldPosition.x;
                    pos.y = worldPosition.y;
                    pos.z = worldPosition.z;
                    heroTransform.position = pos;

                    hero.AirSpeed = throwState.Angle;
                    hero.ScrollSpeed = throwState.Force;
                    GameService.SetGameState(this.world, GameState.PLAYING);
                    dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Fly1 : dwarfSprites.Fly2;

                    let catapultaEntity = this.world.getEntityByName("Catapulta");
                    let moving = this.world.getComponentData(catapultaEntity, MovingWithPlayer);
                    moving.Deactivated = false;

                    throwState.State = 4;

                    this.world.setComponentData(heroEntity, throwState);
                    this.world.setComponentData(heroEntity, heroTransform);
                    this.world.setComponentData(heroEntity, dwarfRenderer);
                    this.world.setComponentData(heroEntity, hero);
                    this.world.setComponentData(heroEntity, heroRotation);
                    this.world.setComponentData(catapultaEntity, moving);
                }
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
                if (!hero.IsSmashing) {
                    var previousAirSpeed = hero.AirSpeed;
                    hero.AirSpeed += config.Gravity * dt;
                    if (previousAirSpeed > hero.AirSpeed && hero.AirSpeed < 200 && hero.AirSpeed > 0 && dwarfRenderer.sprite.index != dwarfSprites.Fly1.index && dwarfRenderer.sprite.index != dwarfSprites.Fly2.index) {
                        dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Fly1 : dwarfSprites.Fly2;
                    }
                }
                




                //check for enemy collisions here


                if (pos.y <= config.GroundPosition) {
                    pos.y = config.GroundPosition;

                    hero = this.ResetSmash(hero);

                    if (Math.abs(hero.AirSpeed) < 55 || hero.ScrollSpeed < 3) {
                        hero.AirSpeed = 0;
                        hero.ScrollSpeed = 0;
                        GameService.SetGameState(this.world, GameState.THROW);
                    }
                    else {
                        dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Kick1 : dwarfSprites.Kick2;
                        hero.AirSpeed = -hero.AirSpeed * .75;
                        hero.ScrollSpeed *= .75;
                    }
                }

                heroTransform.position = pos;

                //UPDATE COMPONENTS
                this.world.setComponentData(heroEntity, throwState);
                this.world.setComponentData(heroEntity, dwarfRenderer);
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
