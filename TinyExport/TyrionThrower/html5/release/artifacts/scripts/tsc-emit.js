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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
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
            switch (game.GameService.GetCurrentGameState(this.world)) {
                case game.GameState.MENU:
                    game.UIDataService.ToogleGameplayEntity(this.world);
                    if (game.UserDataService.GetBoolean("PlayedFirstGame")) {
                        game.GameService.SetGameState(this.world, game.GameState.PLAYING);
                        break;
                    }
                    else {
                        game.UIDataService.ToogleMenuInitial(this.world, true);
                        game.UIDataService.CheckForMenuInitialButtons(this.world);
                        break;
                    }
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
                this.GAMEPLAYSTATE = ut.EntityGroup.instantiate(world, "game.GroundTile");
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
                    ut.EntityGroup.instantiate(world, "game.GroundTile");
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
            var hero = game.GameService.GetHeroEntity(this.world);
            var playerPos = this.world.getComponentData(hero, ut.Core2D.TransformLocalPosition);
            this.world.forEach([ut.Core2D.Camera2D, game.FollowerCamera, ut.Core2D.TransformLocalPosition], function (camera, followerCamera, transform) {
                //let height = 2 * camera.halfVerticalSize;
                var pos = transform.position;
                pos.x = playerPos.position.x + followerCamera.Offset.x;
                if (playerPos.position.y + followerCamera.Offset.y >= followerCamera.UpperLimit)
                    pos.y = playerPos.position.y + followerCamera.Offset.y;
                else
                    pos.y = _this.lerp(playerPos.position.y + followerCamera.Offset.y, followerCamera.BottomLimit, _this.scheduler.deltaTime());
                if (playerPos.position.y <= followerCamera.BottomLimit)
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
    var FlyingSystem = /** @class */ (function (_super) {
        __extends(FlyingSystem, _super);
        function FlyingSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FlyingSystem.prototype.OnUpdate = function () {
            if (game.GameService.IsPaused(this.world) || (game.GameService.GetCurrentGameState(this.world) != game.GameState.PLAYING))
                return;
            var dt = this.scheduler.deltaTime();
            var config = game.GameService.GetConfig(this.world);
            this.world.forEach([ut.Entity, game.Hero, game.Flying, ut.Core2D.TransformLocalPosition], function (entity, hero, flying, transform) {
                var pos = transform.position;
                flying.PreviousPosition = pos;
                pos.y += flying.AirSpeed * dt;
                flying.AirSpeed -= config.Gravity * dt;
                transform.position = pos;
            });
        };
        return FlyingSystem;
    }(ut.ComponentSystem));
    game.FlyingSystem = FlyingSystem;
})(game || (game = {}));
var game;
(function (game) {
    var HeroSystem = /** @class */ (function (_super) {
        __extends(HeroSystem, _super);
        function HeroSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeroSystem.prototype.OnUpdate = function () {
            if (game.GameService.IsPaused(this.world) || (game.GameService.GetCurrentGameState(this.world) != game.GameState.THROW) || (game.GameService.GetCurrentGameState(this.world) != game.GameState.PLAYING))
                return;
            var config = game.GameService.GetConfig(this.world);
            var dt = this.scheduler.deltaTime();
            var heroEntity = game.GameService.GetHeroEntity(this.world);
            var hero = this.world.getComponentData(heroEntity, game.Hero);
            var heroTransform = this.world.getComponentData(heroEntity, ut.Core2D.TransformLocalPosition);
            if (game.GameService.IsGameState(this.world, game.GameState.THROW)) {
                if (InputService.IsMouseDown()) {
                    hero.AirSpeed = 400;
                    hero.ScrollSpeed = 50;
                    game.GameService.SetGameState(this.world, game.GameState.PLAYING);
                    this.world.setComponentData(heroEntity, hero);
                }
                return;
            }
            else if (game.GameService.IsGameState(this.world, game.GameState.PLAYING)) {
                var pos = heroTransform.position;
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
                        game.GameService.SetGameState(this.world, game.GameState.THROW);
                    }
                    else {
                        hero.AirSpeed = -hero.AirSpeed * .75;
                    }
                }
                heroTransform.position = pos;
                //UPDATE COMPONENTS
                this.world.setComponentData(heroEntity, hero);
                this.world.setComponentData(heroEntity, heroTransform);
                return;
            }
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
/// <reference path="FlyingSystem.ts" />
var game;
(function (game) {
    var HitGroundSystem = /** @class */ (function (_super) {
        __extends(HitGroundSystem, _super);
        function HitGroundSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HitGroundSystem.prototype.OnUpdate = function () {
            var _this = this;
            if ((game.GameService.IsPaused(this.world)) || (game.GameService.GetCurrentGameState(this.world) != game.GameState.PLAYING))
                return;
            var config = game.GameService.GetConfig(this.world);
            this.world.forEach([ut.Entity, game.Hero, game.Flying, ut.Core2D.TransformLocalPosition], function (entity, hero, flying, transform) {
                var pos = transform.position;
                if (pos.y <= config.GroundPosition) {
                    pos.y = config.GroundPosition;
                    var nextAirSpeed = -flying.AirSpeed * .75;
                    var nextScrollSpeed = flying.ScrollSpeed * .75;
                    nextScrollSpeed = Math.max(nextScrollSpeed, 0);
                    if (nextAirSpeed < 10 || nextScrollSpeed <= 10) {
                        flying.AirSpeed = 0;
                        _this.world.removeComponent(entity, game.Flying);
                        game.GameService.SetGameState(_this.world, game.GameState.END);
                    }
                    else {
                        flying.AirSpeed = nextAirSpeed;
                        flying.ScrollSpeed = nextScrollSpeed;
                    }
                }
                transform.position = pos;
            });
        };
        HitGroundSystem = __decorate([
            ut.executeAfter(game.FlyingSystem)
        ], HitGroundSystem);
        return HitGroundSystem;
    }(ut.ComponentSystem));
    game.HitGroundSystem = HitGroundSystem;
})(game || (game = {}));
/// <reference path="FlyingSystem.ts" />
/// <reference path="HitGroundSystem.ts" />
var game;
(function (game) {
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
        HitEnemySystem = __decorate([
            ut.executeAfter(game.FlyingSystem),
            ut.executeBefore(game.HitGroundSystem)
        ], HitEnemySystem);
        return HitEnemySystem;
    }(ut.ComponentSystem));
    game.HitEnemySystem = HitEnemySystem;
})(game || (game = {}));
var game;
(function (game) {
    var LaunchSystem = /** @class */ (function (_super) {
        __extends(LaunchSystem, _super);
        function LaunchSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LaunchSystem.prototype.OnUpdate = function () {
            var _this = this;
            if (game.GameService.IsPaused(this.world) || (game.GameService.GetCurrentGameState(this.world) != game.GameState.THROW) || (game.GameService.GetCurrentGameState(this.world) != game.GameState.PLAYING))
                return;
            if (ut.Core2D.Input.getMouseButtonDown(0)) {
                var theGame = game.GameService.GetGame(this.world);
                if (theGame.State == game.GameState.THROW) {
                    this.world.forEach([ut.Entity, game.Hero], function (entity, hero) {
                        if (!_this.world.hasComponent(entity, game.Flying)) {
                            _this.world.addComponent(entity, game.Flying);
                            var flying = _this.world.getComponentData(entity, game.Flying);
                            flying.ScrollSpeed = 50;
                            flying.AirSpeed = 150;
                            _this.world.setComponentData(entity, flying);
                        }
                    });
                    game.GameService.SetGameState(this.world, game.GameState.PLAYING);
                }
            }
        };
        return LaunchSystem;
    }(ut.ComponentSystem));
    game.LaunchSystem = LaunchSystem;
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