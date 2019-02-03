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
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Z)) {
                game.GameService.SetGameState(this.world, game.GameState.MENU);
                console.log("GameStateChangeToMenu");
            }
            if (game.GameService.GetCurrentGameState(this.world) == game.GameState.PLAYING) {
            }
            switch (game.GameService.GetCurrentGameState(this.world)) {
                case game.GameState.MENU:
                    game.UIDataService.ToogleMenuInitial(this.world, true);
                    game.UIDataService.CheckForMenuInitialButtons(this.world);
                    break;
                case game.GameState.PAUSED:
                    game.UIDataService.CheckForPauseMenuButtons(this.world);
                    break;
                case game.GameState.PLAYING:
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
        UIDataService.CheckForPauseMenuButtons = function (world) {
            if (this.PAUSEMENUGROUP != null) {
                var buttonUnpauseEntity = world.getEntityByName("UnpauseButton");
                var btnUnpause = world.getComponentData(buttonUnpauseEntity, game.CustomButton);
                if (btnUnpause.JustClicked)
                    this.TooglePauseMenu(world, false);
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
        UIDataService.CheckForPlayerScore = function (world) {
            var herospeed = world.getEntityByName("HeroSpeed");
            var heroSpeedText = world.getComponentData(herospeed, ut.Text.Text2DRenderer);
            heroSpeedText.text += 1;
        };
        UIDataService.ToogleMenuInitial = function (world, create) {
            if (create && this.MENUINITIALL == null)
                this.MENUINITIALL = ut.EntityGroup.instantiate(world, "game.MenuInitialGroup");
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
                    game.GameService.SetGameState(world, game.GameState.PLAYING);
                    this.ToogleInGamePanel(world, true);
                    ut.EntityGroup.instantiate(world, "game.Session");
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
    var MovingWithPlayerSystem = /** @class */ (function (_super) {
        __extends(MovingWithPlayerSystem, _super);
        function MovingWithPlayerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovingWithPlayerSystem.prototype.OnUpdate = function () {
            var hero = game.GameService.GetHero(this.world);
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.MovingWithPlayer, ut.Core2D.TransformLocalPosition], function (entity, moving, transform) {
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
            if (game.GameService.IsPaused(this.world))
                return;
            var config = game.GameService.GetConfig(this.world);
            var dt = this.scheduler.deltaTime();
            var heroEntity = game.GameService.GetHeroEntity(this.world);
            var hero = this.world.getComponentData(heroEntity, game.Hero);
            var heroTransform = this.world.getComponentData(heroEntity, ut.Core2D.TransformLocalPosition);
            var dwarfSprites = this.world.getComponentData(heroEntity, game.DwarfSprites);
            var dwarfRenderer = this.world.getComponentData(heroEntity, ut.Core2D.Sprite2DRenderer);
            if (game.GameService.IsGameState(this.world, game.GameState.THROW)) {
                dwarfRenderer.sprite = dwarfSprites.Idle;
                if (InputService.IsMouseDown()) {
                    hero.AirSpeed = 400;
                    hero.ScrollSpeed = 25;
                    game.GameService.SetGameState(this.world, game.GameState.PLAYING);
                    dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Fly1 : dwarfSprites.Fly2;
                    this.world.setComponentData(heroEntity, dwarfRenderer);
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
                if (!hero.IsSmashing) {
                    var previousAirSpeed = hero.AirSpeed;
                    hero.AirSpeed += config.Gravity * dt;
                    if (previousAirSpeed > hero.AirSpeed && hero.AirSpeed < 10 && hero.AirSpeed > 0)
                        dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Fly1 : dwarfSprites.Fly2;
                }
                //check for enemy collisions here
                if (pos.y <= config.GroundPosition) {
                    pos.y = config.GroundPosition;
                    hero = this.ResetSmash(hero);
                    if (Math.abs(hero.AirSpeed) < 55 || hero.ScrollSpeed < 3) {
                        hero.AirSpeed = 0;
                        hero.ScrollSpeed = 0;
                        game.GameService.SetGameState(this.world, game.GameState.THROW);
                    }
                    else {
                        dwarfRenderer.sprite = Math.random() < .5 ? dwarfSprites.Kick1 : dwarfSprites.Kick2;
                        hero.AirSpeed = -hero.AirSpeed * .75;
                        hero.ScrollSpeed *= .75;
                    }
                }
                heroTransform.position = pos;
                //UPDATE COMPONENTS
                this.world.setComponentData(heroEntity, dwarfRenderer);
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
            if (game.GameService.IsPaused(this.world))
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