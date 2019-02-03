
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

            if (GameService.IsPaused(this.world) || ((GameService.GetCurrentGameState(this.world) != GameState.THROW) && (GameService.GetCurrentGameState(this.world) != GameState.PLAYING)))
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

                if (throwState.State == -1) {

                    if (InputService.IsMouseDown()) {
                        throwState.State = 0;
                        this.world.setComponentData(heroEntity, throwState);
                    }

                    return;

                }

                if (throwState.State == 0) {

                    let handEntity = this.world.getEntityByName("Hand");
                    let ourLogo = this.world.getEntityByName("OurLogo");
                    let skyLogo = this.world.getEntityByName("SkyLogo");
                    let fhLogo = this.world.getEntityByName("FHLogo");

                    /*
                    this.world.addComponent(handEntity, ut.Disabled);
                    this.world.addComponent(ourLogo, ut.Disabled);
                    this.world.addComponent(skyLogo, ut.Disabled);
                    this.world.addComponent(fhLogo, ut.Disabled);
                    */



                    let angleBarEntity = this.world.getEntityByName("AngleBar");
                    let angleBarArrowEntity = this.world.getEntityByName("AngleBarArrow");
                    let angleBarArrowSpriteEntity = this.world.getEntityByName("AngleBarArrowSprite");

                    this.world.removeComponent(angleBarEntity, ut.Disabled);
                    this.world.removeComponent(angleBarArrowEntity, ut.Disabled);
                    this.world.removeComponent(angleBarArrowSpriteEntity, ut.Disabled);

                    let angleBarArrowQuaternion = this.world.getComponentData(angleBarArrowEntity, ut.Core2D.TransformLocalRotation);
                    let angleBarArrowRotation = this.world.getComponentData(angleBarArrowEntity, Rotation2D);
                    let angleBarBackAndForth = this.world.getComponentData(angleBarArrowEntity, BackAndForth);

                    angleBarBackAndForth.Timer += dt;
                    let ratio = angleBarBackAndForth.Timer / angleBarBackAndForth.Duration;
                    ratio = Math.min(1, ratio);
                    ratio = GameService.InOut(ratio);
                    let angle = 0;
                    if (angleBarBackAndForth.Forward)
                        angle = GameService.Lerp(angleBarBackAndForth.Min, angleBarBackAndForth.Max, ratio);
                    else
                        angle = GameService.Lerp(angleBarBackAndForth.Max, angleBarBackAndForth.Min, ratio);

                    angleBarArrowRotation.Rotation = angle;
                    angleBarArrowQuaternion.rotation = angleBarArrowQuaternion.rotation.setFromEuler(new Euler(0, 0, angle * 0.0174533));

                    if (ratio >= 1) {
                        angleBarBackAndForth.Timer = 0;
                        angleBarBackAndForth.Forward = !angleBarBackAndForth.Forward;
                    }

                    this.world.setComponentData(angleBarArrowEntity, angleBarArrowQuaternion);
                    this.world.setComponentData(angleBarArrowEntity, angleBarArrowRotation);
                    this.world.setComponentData(angleBarArrowEntity, angleBarBackAndForth);

                    if (InputService.IsMouseDown()) {
                        let angleRatio = Math.abs(ratio - .5) / .5;
                        throwState.Angle = GameService.Lerp(100, 500, 1 - angleRatio);
                        throwState.State = 1;
                        this.world.setComponentData(heroEntity, throwState);
                    }
                    return;
                }
                else if (throwState.State == 1) {


                    let powerBarEntity = this.world.getEntityByName("PowerBar");
                    let powerBarArrowEntity = this.world.getEntityByName("PowerBarArrow");
                    let PowerBarBackroundEntity = this.world.getEntityByName("PowerBarBackround");

                    this.world.removeComponent(powerBarEntity, ut.Disabled);
                    this.world.removeComponent(powerBarArrowEntity, ut.Disabled);
                    this.world.removeComponent(PowerBarBackroundEntity, ut.Disabled);


                    let powerBarArrowTransform = this.world.getComponentData(powerBarArrowEntity, ut.Core2D.TransformLocalPosition);
                    let powerBarArrowRotation = this.world.getComponentData(powerBarArrowEntity, Rotation2D);
                    let powerBarBackAndForth = this.world.getComponentData(powerBarArrowEntity, BackAndForth);

                    powerBarBackAndForth.Timer += dt;
                    let ratio = powerBarBackAndForth.Timer / powerBarBackAndForth.Duration;
                    ratio = Math.min(1, ratio);
                    ratio = GameService.InOut(ratio);
                    let angle = 0;
                    if (powerBarBackAndForth.Forward)
                        angle = GameService.Lerp(powerBarBackAndForth.Min, powerBarBackAndForth.Max, ratio);
                    else
                        angle = GameService.Lerp(powerBarBackAndForth.Max, powerBarBackAndForth.Min, ratio);

                    powerBarArrowRotation.Rotation = angle;

                    let pos = powerBarArrowTransform.position;
                    pos.x = angle;
                    powerBarArrowTransform.position = pos;

                    if (ratio >= 1) {
                        powerBarBackAndForth.Timer = 0;
                        powerBarBackAndForth.Forward = !powerBarBackAndForth.Forward;
                    }

                    this.world.setComponentData(powerBarArrowEntity, powerBarArrowTransform);
                    this.world.setComponentData(powerBarArrowEntity, powerBarArrowRotation);
                    this.world.setComponentData(powerBarArrowEntity, powerBarBackAndForth);


                    if (InputService.IsMouseDown()) {
                        let ratio = GameService.ConvertRange01(powerBarBackAndForth.Min, powerBarBackAndForth.Max, powerBarArrowRotation.Rotation);
                        throwState.Force = GameService.Lerp(8, 30, ratio);

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

                let scoreEntity = this.world.getEntityByName("Score");
                let score = this.world.getComponentData(scoreEntity, game.ScoreDistance);

                let pos = heroTransform.position;

                if (hero.IsSmashingCooldown) {
                    hero.SmashCooldownTimer += dt;
                    if (this.IsSmashingCooldownDone(hero, config)) {
                        // BLINK TO SHOW THAT YOU CAN USE SMASH AGAIN
                    }
                }

                if (!hero.IsSmashing && (!hero.IsSmashingCooldown || this.IsSmashingCooldownDone(hero, config))) {
                    if (InputService.IsMouseDown()) {
                        hero.AirSpeed = config.SmashForce;
                        hero.IsSmashing = true;
                        dwarfRenderer.sprite = dwarfSprites.Dive;
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
                let heroCollider = this.world.getComponentData(heroEntity, game.BoxCollider);

                //console.log("hero h: " + heroCollider.height + ", w: " + heroCollider.width);
                heroCollider.x = heroTransform.position.x - heroCollider.width;
                heroCollider.y = heroTransform.position.y - heroCollider.height;

                let gotEnemy = false;
                this.world.forEach(
                    [ut.Entity, game.Enemy, ut.Core2D.TransformLocalPosition, game.BoxCollider, ut.Core2D.Sprite2DRenderer, DeathSprite],
                    (entity, enemy, transform, collider, spriteRenderer, deathSprite) => {
                        if (gotEnemy || collider.Deactivated)
                            return;

                        //console.log("enemy w: " + collider.width + ", h: " + collider.height);
                        let enemyCollider = new BoxCollider();

                        enemyCollider.x = transform.position.x - collider.width;
                        enemyCollider.y = transform.position.y - collider.height;

                        enemyCollider.height = collider.height;
                        enemyCollider.width = collider.width;

                        if (this.CheckCollision(heroCollider, enemyCollider) && hero.AirSpeed < 0) {
                            gotEnemy = true;
                            collider.Deactivated = true;

                            spriteRenderer.sprite = deathSprite.Death;
                            this.world.removeComponent(entity, ut.Core2D.Sprite2DSequencePlayer);

                            if (!this.world.hasComponent(entity, BlinkToDeath))
                                this.world.addComponent(entity, BlinkToDeath);

                            let finalPos = transform.position;
                            transform.position = finalPos;
                            finalPos.y -= 13;
                            transform.position = finalPos;

                            //pos.y = transform.position.y;
                            hero = this.ResetSmash(hero);

                            dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Kick1 : dwarfSprites.Kick2;
                            hero.ScrollSpeed = hero.ScrollSpeed * .8;
                            hero.AirSpeed = -hero.AirSpeed * .85;
                            //hero.ScrollSpeed *= 1.05;
                            //hero.AirSpeed = -hero.AirSpeed;
                            //hero.ScrollSpeed *= .75;
                        }
                    }
                );

                if (throwState.State == 30) {
                    throwState.ThrowTimer += dt;
                    this.world.setComponentData(heroEntity, throwState);

                    if (throwState.ThrowTimer > 2) {
                        
                        throwState.State = 31;
                        ut.EntityGroup.destroyAll(this.world, "game.Session");

                        this.world.forEach(
                            [ut.Entity, Enemy],
                            (entity, enemy) => {
                                this.world.destroyEntity(entity);
                            }
                        )

                        
                        ut.EntityGroup.destroyAll(this.world, "game.Zombie");
                        ut.EntityGroup.destroyAll(this.world, "game.InGameTopMenuGroup");
                        ut.EntityGroup.destroyAll(this.world, "game.PauseMenuGroup");
                        ut.EntityGroup.destroyAll(this.world, "game.MenuInitialGroup");
                        ut.EntityGroup.destroyAll(this.world, "game.SettingsMenu");
                        ut.EntityGroup.destroyAll(this.world, "game.Bootstrap");

                        ut.EntityGroup.instantiate(this.world, "game.Bootstrap");
                    }
                    return;
                }
                else if (throwState.State == 31) {
                    return;
                }

                if (!gotEnemy) {
                    if (pos.y <= config.GroundPosition) {
                        pos.y = config.GroundPosition;

                        hero = this.ResetSmash(hero);

                        if (Math.abs(hero.AirSpeed) < 55 || hero.ScrollSpeed < 3) {
                            hero.AirSpeed = 0;
                            hero.ScrollSpeed = 0;
                            dwarfRenderer.sprite = dwarfSprites.Dead;

                            throwState.State = 30;
                            throwState.ThrowTimer = 0;
                        }
                        else {
                            dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Kick1 : dwarfSprites.Kick2;
                            hero.AirSpeed = -hero.AirSpeed * .75;
                            hero.ScrollSpeed *= .75;
                        }
                    }
                }

                heroTransform.position = pos;

                //UPDATE COMPONENTS
                this.world.setComponentData(heroEntity, throwState);
                this.world.setComponentData(heroEntity, dwarfRenderer);
                this.world.setComponentData(heroEntity, hero);
                this.world.setComponentData(heroEntity, heroTransform);

                score.Score += Math.floor(hero.ScrollSpeed);
                this.world.setComponentData(scoreEntity, score);

                return;
            }
        }

        CheckCollision(colliderA: BoxCollider, colliderB: BoxCollider): boolean {
            return !(
                ((colliderA.y + 2 * colliderA.height) < (colliderB.y)) ||
                (colliderA.y > (colliderB.y + 2 * colliderB.height)) ||
                ((colliderA.x + 2 * colliderA.width) < colliderB.x) ||
                (colliderA.x > (colliderB.x + 2 * colliderB.width))
            );
        }

        ResetSmash(hero: Hero): Hero {
            hero.IsSmashingCooldown = hero.IsSmashing;
            hero.IsSmashing = false;
            hero.SmashCooldownTimer = 0;
            return hero;
        }

        IsSmashingCooldownDone(hero: Hero, config: Config): boolean {
            return hero.SmashCooldownTimer >= config.SmashCooldown;
        }
    }

    export class InputService {
        static IsMouseDown(): boolean {
            return ut.Core2D.Input.getMouseButtonDown(0);
        }
    }
}
