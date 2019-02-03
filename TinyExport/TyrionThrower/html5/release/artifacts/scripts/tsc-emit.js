var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    var DestroyZombiesSystem = /** @class */ (function (_super) {
        __extends(DestroyZombiesSystem, _super);
        function DestroyZombiesSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DestroyZombiesSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.ReusableEnemy, ut.Core2D.TransformLocalPosition], function (entity, enemy, transform) {
                if (transform.position.x < enemy.Offset) {
                    _this.world.destroyEntity(entity);
                }
            });
        };
        return DestroyZombiesSystem;
    }(ut.ComponentSystem));
    game.DestroyZombiesSystem = DestroyZombiesSystem;
    var SpawnZombiesSystem = /** @class */ (function (_super) {
        __extends(SpawnZombiesSystem, _super);
        function SpawnZombiesSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnZombiesSystem.prototype.OnUpdate = function () {
            if (game.GameService.IsGameState(this.world, game.GameState.PLAYING)) {
                var dt = this.scheduler.deltaTime();
                var timerEntity = this.world.getEntityByName("SpawnTimer");
                var spawnTimer = this.world.getComponentData(timerEntity, game.SpawnTimer);
                spawnTimer.Timer += dt;
                if (spawnTimer.Timer >= spawnTimer.NextDuration) {
                    spawnTimer.NextDuration = .5 + Math.random() * 1.0; // * 1/GameService.GetHero(this.world).ScrollSpeed; //* spawnTimer.Modifier;
                    spawnTimer.Timer = 0;
                    var zombieEntity = ut.EntityGroup.instantiate(this.world, "game.Zombie")[0];
                    var zombieTransform = this.world.getComponentData(zombieEntity, ut.Core2D.TransformLocalPosition);
                    var pos = zombieTransform.position;
                    pos.x = 600;
                    pos.y = pos.y + -10 + Math.random() * 10;
                    zombieTransform.position = pos;
                    this.world.setComponentData(zombieEntity, zombieTransform);
                    spawnTimer.Modifier += spawnTimer.ModifierIncrement;
                }
                this.world.setComponentData(timerEntity, spawnTimer);
            }
        };
        return SpawnZombiesSystem;
    }(ut.ComponentSystem));
    game.SpawnZombiesSystem = SpawnZombiesSystem;
    var UIDataGetSystem = /** @class */ (function (_super) {
        __extends(UIDataGetSystem, _super);
        function UIDataGetSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UIDataGetSystem.prototype.OnUpdate = function () {
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.X)) {
                if (!game.GameService.IsPaused(this.world))
                    game.UIDataService.TooglePauseMenu(this.world, true);
                else
                    game.UIDataService.TooglePauseMenu(this.world, false);
            }
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.K)) {
                game.GameService.SetGameState(this.world, game.GameState.PLAYING);
            }
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.P)) {
                game.UserDataService.DeleteAllCookies();
            }
            switch (game.GameService.GetCurrentGameState(this.world)) {
                case game.GameState.MENU:
                    game.UIDataService.ToogleGameplayEntity(this.world);
                    game.GameService.SetGameState(this.world, game.GameState.THROW);
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
                case game.GameState.PAUSED:
                    game.UIDataService.CheckForPauseButton(this.world);
                    break;
                case game.GameState.THROW:
                    break;
                case game.GameState.PLAYING:
                    game.UIDataService.CheckForPauseButton(this.world);
                    game.UIDataService.ToogleInGamePanel(this.world, true);
                    game.UIDataService.CheckForPlayerScore(this.world);
                    break;
            }
        };
        return UIDataGetSystem;
    }(ut.ComponentSystem));
    game.UIDataGetSystem = UIDataGetSystem;
})(game || (game = {}));
var game;
(function (game_1) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        GameService.Lerp = function (start, end, amt) {
            return (1 - amt) * start + amt * end;
        };
        GameService.GetConfig = function (world) {
            return world.getConfigData(game_1.Config);
        };
        GameService.GetMainCameraEntity = function (world) {
            if (!world.exists(this.MAINCAMERA)) {
                this.MAINCAMERA = world.getEntityByName("MainCamera");
                if (!world.exists(this.MAINCAMERA)) {
                    this.MAINCAMERA = null;
                    return null;
                }
            }
            return this.MAINCAMERA;
        };
        GameService.GetMainCamera = function (world) {
            var mainCameraEntity = this.GetMainCameraEntity(world);
            if (mainCameraEntity == null)
                return null;
            return world.getComponentData(mainCameraEntity, ut.Core2D.Camera2D);
        };
        GameService.GetGameEntity = function (world) {
            if (!world.exists(this.GAME)) {
                this.GAME = world.getEntityByName("Game");
                if (!world.exists(this.GAME)) {
                    this.GAME = null;
                    return null;
                }
            }
            return this.GAME;
        };
        GameService.GetGame = function (world) {
            var gameEntity = this.GetGameEntity(world);
            if (gameEntity == null)
                return null;
            return world.getComponentData(gameEntity, game_1.Game);
        };
        GameService.GetCurrentGameState = function (world) {
            var state = this.GetGame(world).State;
            return state;
        };
        GameService.ConvertRange01 = function (min, max, value) {
            return this.BaseConvertRange(min, max, 0, 1, value);
        };
        GameService.BaseConvertRange = function (oldMin, oldMax, newMin, newMax, value) {
            if (oldMax == oldMin)
                return newMax;
            return (value - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
        };
        GameService.SetGameState = function (world, state) {
            var game = this.GetGame(world);
            game.State = state;
            world.setComponentData(this.GAME, game);
        };
        GameService.IsGameState = function (world, state) {
            return this.GetGame(world).State == state;
        };
        GameService.IsPaused = function (world) {
            return this.IsGameState(world, game_1.GameState.PAUSED);
        };
        GameService.GetHeroEntity = function (world) {
            if (!world.exists(this.HERO)) {
                this.HERO = world.getEntityByName("Hero");
                if (!world.exists(this.HERO)) {
                    this.HERO = null;
                    return null;
                }
            }
            return this.HERO;
        };
        GameService.InOut = function (k) {
            if ((k *= 2) < 1)
                return 0.5 * k * k;
            return -0.5 * ((k -= 1) * (k - 2) - 1);
        };
        GameService.GetHero = function (world) {
            var heroEntity = this.GetHeroEntity(world);
            if (heroEntity == null)
                return null;
            return world.getComponentData(heroEntity, game_1.Hero);
        };
        return GameService;
    }());
    game_1.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    var UIDataService = /** @class */ (function () {
        function UIDataService() {
        }
        UIDataService.GetPauseMenuEntity = function (world) {
            if (!world.exists(this.PAUSEMENU)) {
                this.PAUSEMENU = world.getEntityByName("PauseMenu");
                if (!world.exists(this.PAUSEMENU)) {
                    this.PAUSEMENU = null;
                    return null;
                }
            }
            return this.PAUSEMENU;
        };
        UIDataService.GetPauseMenuComponent = function (world) {
            var pauseMenu = this.GetPauseMenuEntity(world);
            if (pauseMenu == null)
                return null;
            return world.getComponentData(pauseMenu, game.PauseMenu);
        };
        UIDataService.TooglePauseMenu = function (world, create) {
            if (create && this.PAUSEMENUGROUP == null) {
                this.PAUSEMENUGROUP = ut.EntityGroup.instantiate(world, "game.PauseMenuGroup");
                this.PREVIOUSTATE = game.GameService.GetCurrentGameState(world);
                game.GameService.SetGameState(world, game.GameState.PAUSED);
            }
            else if (!create) {
                this.PAUSEMENUGROUP = null;
                ut.EntityGroup.destroyAll(world, "game.PauseMenuGroup");
                game.GameService.SetGameState(world, this.PREVIOUSTATE);
            }
        };
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
        UIDataService.CheckForPauseButton = function (world) {
            if (this.INGAMEPANEL != null) {
                var buttonPause = world.getEntityByName("PauseButton");
                var btnPause = world.getComponentData(buttonPause, game.CustomButton);
                if (btnPause.JustClicked) {
                    if (!game.GameService.IsPaused(world))
                        this.TooglePauseMenu(world, true);
                    else
                        this.TooglePauseMenu(world, false);
                }
            }
        };
        UIDataService.ToogleInGamePanel = function (world, create) {
            if (create && this.INGAMEPANEL == null) {
                this.INGAMEPANEL = ut.EntityGroup.instantiate(world, "game.InGameTopMenuGroup");
            }
            else if (!create) {
                this.INGAMEPANEL = null;
                ut.EntityGroup.destroyAll(world, "game.InGameTopMenuGroup");
            }
        };
        UIDataService.ToogleGameplayEntity = function (world) {
            if (this.GAMEPLAYSTATE == null)
                this.GAMEPLAYSTATE = ut.EntityGroup.instantiate(world, "game.Session");
        };
        UIDataService.CheckForPlayerScore = function (world) {
            var herospeed = world.getEntityByName("HeroSpeedPoints");
            var heroSpeedText = world.getComponentData(herospeed, ut.Text.Text2DRenderer);
            heroSpeedText.text += 1;
        };
        UIDataService.ToogleMenuInitial = function (world, create) {
            if (create && this.MENUINITIALL == null) {
                this.MENUINITIALL = ut.EntityGroup.instantiate(world, "game.MenuInitialGroup");
            }
            else if (!create) {
                this.MENUINITIALL = null;
                ut.EntityGroup.destroyAll(world, "game.MenuInitialGroup");
            }
        };
        UIDataService.CheckForMenuInitialButtons = function (world) {
            if (this.MENUINITIALL != null) {
                var buttonPlayGame = world.getEntityByName("PlayGameButton");
                var btnPlayGame = world.getComponentData(buttonPlayGame, game.CustomButton);
                if (btnPlayGame.JustClicked) {
                    this.ToogleMenuInitial(world, false);
                    game.GameService.SetGameState(world, game.GameState.THROW);
                    this.ToogleInGamePanel(world, true);
                    ut.EntityGroup.instantiate(world, "game.Session");
                    game.UserDataService.SetBoolean("PlayedFirstGame", true);
                }
            }
        };
        return UIDataService;
    }());
    game.UIDataService = UIDataService;
})(game || (game = {}));
var game;
(function (game) {
    var UserDataService = /** @class */ (function () {
        function UserDataService() {
        }
        UserDataService.GetBoolean = function (name) {
            var value = this.GetCookie(name);
            if (value)
                return value == "1" ? true : false;
            return false;
        };
        UserDataService.SetBoolean = function (name, value) {
            this.SetCookie(name, String(value ? 1 : 0));
        };
        UserDataService.GetNumber = function (name) {
            var value = this.GetCookie(name);
            if (value)
                return Number(value);
            return 0;
        };
        UserDataService.SetNumber = function (name, value) {
            this.SetCookie(name, String(value));
        };
        UserDataService.GetCookie = function (name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) {
                return parts.pop().split(";").shift();
            }
        };
        UserDataService.SetCookie = function (name, val) {
            var date = new Date();
            var value = val;
            date.setTime(date.getTime() + (1000 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
        };
        UserDataService.DeleteCookie = function (name) {
            var date = new Date();
            date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
        };
        UserDataService.DeleteAllCookies = function () {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        };
        return UserDataService;
    }());
    game.UserDataService = UserDataService;
})(game || (game = {}));
var game;
(function (game) {
    var CameraSystem = /** @class */ (function (_super) {
        __extends(CameraSystem, _super);
        function CameraSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /*
        private offset: ut.Math.Vector2 = new ut.Math.Vector2(-1, 0);
        private upperLimit: number = 20;
        private bottomLimit: number = -2;
        */
        CameraSystem.prototype.OnUpdate = function () {
            var _this = this;
            var displayInfo = this.world.getConfigData(ut.Core2D.DisplayInfo);
            var cameraEntity = this.world.getEntityByName("MainCamera");
            var camera = this.world.getComponentData(cameraEntity, ut.Core2D.Camera2D);
            var cameraHalfWidth = displayInfo.width / displayInfo.height * camera.halfVerticalSize;
            var hero = game.GameService.GetHeroEntity(this.world);
            var playerPos = ut.Core2D.TransformService.computeWorldPosition(this.world, hero);
            this.world.forEach([ut.Core2D.Camera2D, game.FollowerCamera, ut.Core2D.TransformLocalPosition], function (camera, followerCamera, transform) {
                var pos = transform.position;
                pos.x = playerPos.x + cameraHalfWidth - followerCamera.Offset.x;
                if (playerPos.y + followerCamera.Offset.y >= followerCamera.UpperLimit)
                    pos.y = playerPos.y + followerCamera.Offset.y;
                else
                    pos.y = _this.lerp(playerPos.y + followerCamera.Offset.y, followerCamera.BottomLimit, _this.scheduler.deltaTime());
                if (playerPos.y <= followerCamera.BottomLimit)
                    pos.y = followerCamera.BottomLimit;
                transform.position = pos;
            });
        };
        CameraSystem.prototype.lerp = function (start, end, amt) {
            return (1 - amt) * start + amt * end;
        };
        return CameraSystem;
    }(ut.ComponentSystem));
    game.CameraSystem = CameraSystem;
})(game || (game = {}));
var game;
(function (game) {
    var MovingWithPlayerSystem = /** @class */ (function (_super) {
        __extends(MovingWithPlayerSystem, _super);
        function MovingWithPlayerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovingWithPlayerSystem.prototype.OnUpdate = function () {
            var hero = game.GameService.GetHero(this.world);
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.MovingWithPlayer, ut.Core2D.TransformLocalPosition], function (entity, moving, transform) {
                if (moving.Deactivated)
                    return;
                var pos = transform.position;
                pos.x -= moving.Speed * hero.ScrollSpeed * dt;
                transform.position = pos;
            });
        };
        return MovingWithPlayerSystem;
    }(ut.ComponentSystem));
    game.MovingWithPlayerSystem = MovingWithPlayerSystem;
    var RepeatingBackgroundSystem = /** @class */ (function (_super) {
        __extends(RepeatingBackgroundSystem, _super);
        function RepeatingBackgroundSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RepeatingBackgroundSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.RepeatingBackground], function (entity, bg) {
                var t1 = _this.world.getComponentData(bg.First, ut.Core2D.TransformLocalPosition);
                var t2 = _this.world.getComponentData(bg.Second, ut.Core2D.TransformLocalPosition);
                var t1Pos = t1.position;
                var t2Pos = t2.position;
                if (t1Pos.x < bg.Offscreen)
                    t1Pos.x = t2Pos.x + bg.Spacing;
                if (t2Pos.x < bg.Offscreen)
                    t2Pos.x = t1Pos.x + bg.Spacing;
                t1.position = t1Pos;
                t2.position = t2Pos;
                _this.world.setComponentData(bg.First, t1);
                _this.world.setComponentData(bg.Second, t2);
            });
        };
        return RepeatingBackgroundSystem;
    }(ut.ComponentSystem));
    game.RepeatingBackgroundSystem = RepeatingBackgroundSystem;
    var HeroSystem = /** @class */ (function (_super) {
        __extends(HeroSystem, _super);
        function HeroSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeroSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.IsPaused(this.world) || ((game.GameService.GetCurrentGameState(this.world) != game.GameState.THROW) && (game.GameService.GetCurrentGameState(this.world) != game.GameState.PLAYING)))
                return;
            var config = game.GameService.GetConfig(this.world);
            var dt = this.scheduler.deltaTime();
            var heroEntity = game.GameService.GetHeroEntity(this.world);
            var hero = this.world.getComponentData(heroEntity, game.Hero);
            var heroTransform = this.world.getComponentData(heroEntity, ut.Core2D.TransformLocalPosition);
            var heroRotation = this.world.getComponentData(heroEntity, ut.Core2D.TransformLocalRotation);
            var dwarfSprites = this.world.getComponentData(heroEntity, game.DwarfSprites);
            var dwarfRenderer = this.world.getComponentData(heroEntity, ut.Core2D.Sprite2DRenderer);
            var throwState = this.world.getComponentData(heroEntity, game.ThrowState);
            if (game.GameService.IsGameState(this.world, game.GameState.THROW)) {
                dwarfRenderer.sprite = dwarfSprites.Idle;
                if (throwState.State == -1) {
                    if (InputService.IsMouseDown()) {
                        throwState.State = 0;
                        this.world.setComponentData(heroEntity, throwState);
                    }
                    return;
                }
                if (throwState.State == 0) {
                    var handEntity = this.world.getEntityByName("Hand");
                    var ourLogo = this.world.getEntityByName("OurLogo");
                    var skyLogo = this.world.getEntityByName("SkyLogo");
                    var fhLogo = this.world.getEntityByName("FHLogo");
                    /*
                    this.world.addComponent(handEntity, ut.Disabled);
                    this.world.addComponent(ourLogo, ut.Disabled);
                    this.world.addComponent(skyLogo, ut.Disabled);
                    this.world.addComponent(fhLogo, ut.Disabled);
                    */
                    var angleBarEntity = this.world.getEntityByName("AngleBar");
                    var angleBarArrowEntity = this.world.getEntityByName("AngleBarArrow");
                    var angleBarArrowSpriteEntity = this.world.getEntityByName("AngleBarArrowSprite");
                    this.world.removeComponent(angleBarEntity, ut.Disabled);
                    this.world.removeComponent(angleBarArrowEntity, ut.Disabled);
                    this.world.removeComponent(angleBarArrowSpriteEntity, ut.Disabled);
                    var angleBarArrowQuaternion = this.world.getComponentData(angleBarArrowEntity, ut.Core2D.TransformLocalRotation);
                    var angleBarArrowRotation = this.world.getComponentData(angleBarArrowEntity, game.Rotation2D);
                    var angleBarBackAndForth = this.world.getComponentData(angleBarArrowEntity, game.BackAndForth);
                    angleBarBackAndForth.Timer += dt;
                    var ratio = angleBarBackAndForth.Timer / angleBarBackAndForth.Duration;
                    ratio = Math.min(1, ratio);
                    ratio = game.GameService.InOut(ratio);
                    var angle = 0;
                    if (angleBarBackAndForth.Forward)
                        angle = game.GameService.Lerp(angleBarBackAndForth.Min, angleBarBackAndForth.Max, ratio);
                    else
                        angle = game.GameService.Lerp(angleBarBackAndForth.Max, angleBarBackAndForth.Min, ratio);
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
                        var angleRatio = Math.abs(ratio - .5) / .5;
                        throwState.Angle = game.GameService.Lerp(100, 500, 1 - angleRatio);
                        throwState.State = 1;
                        this.world.setComponentData(heroEntity, throwState);
                    }
                    return;
                }
                else if (throwState.State == 1) {
                    var powerBarEntity = this.world.getEntityByName("PowerBar");
                    var powerBarArrowEntity = this.world.getEntityByName("PowerBarArrow");
                    var PowerBarBackroundEntity = this.world.getEntityByName("PowerBarBackround");
                    this.world.removeComponent(powerBarEntity, ut.Disabled);
                    this.world.removeComponent(powerBarArrowEntity, ut.Disabled);
                    this.world.removeComponent(PowerBarBackroundEntity, ut.Disabled);
                    var powerBarArrowTransform = this.world.getComponentData(powerBarArrowEntity, ut.Core2D.TransformLocalPosition);
                    var powerBarArrowRotation = this.world.getComponentData(powerBarArrowEntity, game.Rotation2D);
                    var powerBarBackAndForth = this.world.getComponentData(powerBarArrowEntity, game.BackAndForth);
                    powerBarBackAndForth.Timer += dt;
                    var ratio = powerBarBackAndForth.Timer / powerBarBackAndForth.Duration;
                    ratio = Math.min(1, ratio);
                    ratio = game.GameService.InOut(ratio);
                    var angle = 0;
                    if (powerBarBackAndForth.Forward)
                        angle = game.GameService.Lerp(powerBarBackAndForth.Min, powerBarBackAndForth.Max, ratio);
                    else
                        angle = game.GameService.Lerp(powerBarBackAndForth.Max, powerBarBackAndForth.Min, ratio);
                    powerBarArrowRotation.Rotation = angle;
                    var pos_1 = powerBarArrowTransform.position;
                    pos_1.x = angle;
                    powerBarArrowTransform.position = pos_1;
                    if (ratio >= 1) {
                        powerBarBackAndForth.Timer = 0;
                        powerBarBackAndForth.Forward = !powerBarBackAndForth.Forward;
                    }
                    this.world.setComponentData(powerBarArrowEntity, powerBarArrowTransform);
                    this.world.setComponentData(powerBarArrowEntity, powerBarArrowRotation);
                    this.world.setComponentData(powerBarArrowEntity, powerBarBackAndForth);
                    if (InputService.IsMouseDown()) {
                        var ratio_1 = game.GameService.ConvertRange01(powerBarBackAndForth.Min, powerBarBackAndForth.Max, powerBarArrowRotation.Rotation);
                        throwState.Force = game.GameService.Lerp(8, 30, ratio_1);
                        throwState.State = 2;
                        this.world.setComponentData(heroEntity, throwState);
                    }
                    return;
                }
                else if (throwState.State == 2) {
                    throwState.ThrowTimer += dt;
                    var stickEntity = this.world.getEntityByName("Stick");
                    var stickQuaternionRotation = this.world.getComponentData(stickEntity, ut.Core2D.TransformLocalRotation);
                    var stickRotation = this.world.getComponentData(stickEntity, game.Rotation2D);
                    var ratio = throwState.ThrowTimer / .1;
                    ratio = Math.min(1, ratio);
                    var currentRotation = game.GameService.Lerp(0, 60, ratio);
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
                    var worldPosition = ut.Core2D.TransformService.computeWorldPosition(this.world, heroEntity);
                    ut.Core2D.TransformService.unlink(this.world, heroEntity);
                    heroRotation.rotation = heroRotation.rotation.setFromEuler(new Euler(0, 0, 0));
                    var pos = heroTransform.position;
                    pos.x = worldPosition.x;
                    pos.y = worldPosition.y;
                    pos.z = worldPosition.z;
                    heroTransform.position = pos;
                    hero.AirSpeed = throwState.Angle;
                    hero.ScrollSpeed = throwState.Force;
                    game.GameService.SetGameState(this.world, game.GameState.PLAYING);
                    dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Fly1 : dwarfSprites.Fly2;
                    var catapultaEntity = this.world.getEntityByName("Catapulta");
                    var moving = this.world.getComponentData(catapultaEntity, game.MovingWithPlayer);
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
            else if (game.GameService.IsGameState(this.world, game.GameState.PLAYING)) {
                var scoreEntity = this.world.getEntityByName("Score");
                var score = this.world.getComponentData(scoreEntity, game.ScoreDistance);
                var pos_2 = heroTransform.position;
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
                pos_2.y += hero.AirSpeed * dt;
                if (!hero.IsSmashing) {
                    var previousAirSpeed = hero.AirSpeed;
                    hero.AirSpeed += config.Gravity * dt;
                    if (previousAirSpeed > hero.AirSpeed && hero.AirSpeed < 200 && hero.AirSpeed > 0 && dwarfRenderer.sprite.index != dwarfSprites.Fly1.index && dwarfRenderer.sprite.index != dwarfSprites.Fly2.index) {
                        dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Fly1 : dwarfSprites.Fly2;
                    }
                }
                //check for enemy collisions here
                var heroCollider_1 = this.world.getComponentData(heroEntity, game.BoxCollider);
                //console.log("hero h: " + heroCollider.height + ", w: " + heroCollider.width);
                heroCollider_1.x = heroTransform.position.x - heroCollider_1.width;
                heroCollider_1.y = heroTransform.position.y - heroCollider_1.height;
                var gotEnemy_1 = false;
                this.world.forEach([ut.Entity, game.Enemy, ut.Core2D.TransformLocalPosition, game.BoxCollider, ut.Core2D.Sprite2DRenderer, game.DeathSprite], function (entity, enemy, transform, collider, spriteRenderer, deathSprite) {
                    if (gotEnemy_1 || collider.Deactivated)
                        return;
                    //console.log("enemy w: " + collider.width + ", h: " + collider.height);
                    var enemyCollider = new game.BoxCollider();
                    enemyCollider.x = transform.position.x - collider.width;
                    enemyCollider.y = transform.position.y - collider.height;
                    enemyCollider.height = collider.height;
                    enemyCollider.width = collider.width;
                    if (_this.CheckCollision(heroCollider_1, enemyCollider) && hero.AirSpeed < 0) {
                        gotEnemy_1 = true;
                        collider.Deactivated = true;
                        spriteRenderer.sprite = deathSprite.Death;
                        _this.world.removeComponent(entity, ut.Core2D.Sprite2DSequencePlayer);
                        if (!_this.world.hasComponent(entity, game.BlinkToDeath))
                            _this.world.addComponent(entity, game.BlinkToDeath);
                        var finalPos = transform.position;
                        transform.position = finalPos;
                        finalPos.y -= 13;
                        transform.position = finalPos;
                        //pos.y = transform.position.y;
                        hero = _this.ResetSmash(hero);
                        dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Kick1 : dwarfSprites.Kick2;
                        hero.ScrollSpeed = hero.ScrollSpeed * .8;
                        hero.AirSpeed = -hero.AirSpeed * .85;
                        //hero.ScrollSpeed *= 1.05;
                        //hero.AirSpeed = -hero.AirSpeed;
                        //hero.ScrollSpeed *= .75;
                    }
                });
                if (throwState.State == 30) {
                    throwState.ThrowTimer += dt;
                    this.world.setComponentData(heroEntity, throwState);
                    if (throwState.ThrowTimer > 2) {
                        throwState.State = 31;
                        ut.EntityGroup.destroyAll(this.world, "game.Session");
                        this.world.forEach([ut.Entity, game.Enemy], function (entity, enemy) {
                            _this.world.destroyEntity(entity);
                        });
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
                if (!gotEnemy_1) {
                    if (pos_2.y <= config.GroundPosition) {
                        pos_2.y = config.GroundPosition;
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
                heroTransform.position = pos_2;
                //UPDATE COMPONENTS
                this.world.setComponentData(heroEntity, throwState);
                this.world.setComponentData(heroEntity, dwarfRenderer);
                this.world.setComponentData(heroEntity, hero);
                this.world.setComponentData(heroEntity, heroTransform);
                score.Score += Math.floor(hero.ScrollSpeed);
                this.world.setComponentData(scoreEntity, score);
                return;
            }
        };
        HeroSystem.prototype.CheckCollision = function (colliderA, colliderB) {
            return !(((colliderA.y + 2 * colliderA.height) < (colliderB.y)) ||
                (colliderA.y > (colliderB.y + 2 * colliderB.height)) ||
                ((colliderA.x + 2 * colliderA.width) < colliderB.x) ||
                (colliderA.x > (colliderB.x + 2 * colliderB.width)));
        };
        HeroSystem.prototype.ResetSmash = function (hero) {
            hero.IsSmashingCooldown = hero.IsSmashing;
            hero.IsSmashing = false;
            hero.SmashCooldownTimer = 0;
            return hero;
        };
        HeroSystem.prototype.IsSmashingCooldownDone = function (hero, config) {
            return hero.SmashCooldownTimer >= config.SmashCooldown;
        };
        return HeroSystem;
    }(ut.ComponentSystem));
    game.HeroSystem = HeroSystem;
    var InputService = /** @class */ (function () {
        function InputService() {
        }
        InputService.IsMouseDown = function () {
            return ut.Core2D.Input.getMouseButtonDown(0);
        };
        return InputService;
    }());
    game.InputService = InputService;
})(game || (game = {}));
var game;
(function (game) {
    var BlinkEnemyystem = /** @class */ (function (_super) {
        __extends(BlinkEnemyystem, _super);
        function BlinkEnemyystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlinkEnemyystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.BlinkToDeath, ut.Core2D.Sprite2DRenderer], function (entity, blink, sprite) {
                /*
                blink.Timer += dt;

                if (blink.Timer > 0)
                    sprite.color = new ut.Core2D.Color(1, 1, 1, 0);
                else if (blink.Timer > 1)
                    sprite.color = new ut.Core2D.Color(1, 1, 1, 1);
                */
            });
        };
        return BlinkEnemyystem;
    }(ut.ComponentSystem));
    game.BlinkEnemyystem = BlinkEnemyystem;
    var HitEnemySystem = /** @class */ (function (_super) {
        __extends(HitEnemySystem, _super);
        function HitEnemySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //private hero: game.BoxCollider;
        //private heroOffsetedCollider: game.BoxCollider = new game.BoxCollider();
        //private enemyOffsetedCollider: game.BoxCollider = new game.BoxCollider();
        HitEnemySystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.IsPaused(this.world) || game.GameService.GetCurrentGameState(this.world) != game.GameState.PLAYING)
                return;
            var hero = game.GameService.GetHeroEntity(this.world);
            var heroTransform = this.world.getComponentData(hero, ut.Core2D.TransformLocalPosition);
            var heroCollider = this.world.getComponentData(hero, game.BoxCollider);
            //console.log("hero h: " + heroCollider.height + ", w: " + heroCollider.width);
            heroCollider.x = heroTransform.position.x - heroCollider.width;
            heroCollider.y = heroTransform.position.y - heroCollider.height;
            this.world.forEach([ut.Entity, game.Enemy, ut.Core2D.TransformLocalPosition, game.BoxCollider], function (entity, enemy, transform, collider) {
                //console.log("enemy w: " + collider.width + ", h: " + collider.height);
                var enemyCollider = new game.BoxCollider();
                enemyCollider.x = transform.position.x - collider.width;
                enemyCollider.y = transform.position.y - collider.height;
                enemyCollider.height = collider.height;
                enemyCollider.width = collider.width;
                if (_this.CheckCollision(heroCollider, enemyCollider)) {
                    console.log(_this.world.getEntityName(entity));
                }
            });
        };
        HitEnemySystem.prototype.CheckCollision = function (colliderA, colliderB) {
            return !(((colliderA.y + 2 * colliderA.height) < (colliderB.y)) ||
                (colliderA.y > (colliderB.y + 2 * colliderB.height)) ||
                ((colliderA.x + 2 * colliderA.width) < colliderB.x) ||
                (colliderA.x > (colliderB.x + 2 * colliderB.width)));
        };
        return HitEnemySystem;
    }(ut.ComponentSystem));
    game.HitEnemySystem = HitEnemySystem;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Update the sprite and other visual elements of buttons depending on their current state.
     */
    var UpdateCustomButtonSystem = /** @class */ (function (_super) {
        __extends(UpdateCustomButtonSystem, _super);
        function UpdateCustomButtonSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UpdateCustomButtonSystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([game.CustomButton, ut.Core2D.Sprite2DRenderer, ut.UIControls.MouseInteraction], function (button, spriteRenderer, mouseInteraction) {
                button.IsPressed = mouseInteraction.down && button.IsInteractable;
                button.JustDown = !button.LastDown && mouseInteraction.down && button.IsInteractable;
                button.JustUp = button.LastDown && !mouseInteraction.down && button.IsInteractable;
                button.JustClicked = mouseInteraction.clicked && button.IsInteractable;
                if (button.IsPressed) {
                    button.TimePressed += deltaTime;
                }
                if (button.JustDown || button.JustUp || mouseInteraction.over != button.IsPointerOver || button.LastIsInteractable != button.IsInteractable) {
                    button.LastIsInteractable = button.IsInteractable;
                    var sprite = button.DefaultSprite;
                    if (!button.IsInteractable) {
                        sprite = button.DisabledSprite;
                    }
                    else if (mouseInteraction.over && button.IsPressed) {
                        sprite = button.PressedSprite;
                    }
                    else if (mouseInteraction.over) {
                        sprite = button.HoveredSprite;
                    }
                    if (_this.world.exists(sprite)) {
                        spriteRenderer.sprite = sprite;
                    }
                    if (_this.world.exists(button.ContentToOffsetOnPress) && button.IsInteractable) {
                        var contentRectTransform = _this.world.getComponentData(button.ContentToOffsetOnPress, ut.UILayout.RectTransform);
                        if (!button.ContentDefautPositionIsSet) {
                            button.ContentDefautPositionIsSet = true;
                            button.ContentDefautPositionY = contentRectTransform.anchoredPosition.y;
                        }
                        var contentPosition = contentRectTransform.anchoredPosition;
                        contentPosition.y = button.ContentDefautPositionY + (mouseInteraction.over && button.IsPressed ? button.PressedOffsetY : 0);
                        contentRectTransform.anchoredPosition = contentPosition;
                        _this.world.setComponentData(button.ContentToOffsetOnPress, contentRectTransform);
                    }
                }
                button.IsPointerOver = mouseInteraction.over;
                button.LastDown = mouseInteraction.down;
                button.LastOver = mouseInteraction.over;
            });
        };
        return UpdateCustomButtonSystem;
    }(ut.ComponentSystem));
    game.UpdateCustomButtonSystem = UpdateCustomButtonSystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map