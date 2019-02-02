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
(function (game_1) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        GameService.GetConfig = function (world) {
            return world.getConfigData(game_1.Config);
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
        GameService.SetGameState = function (world, state) {
            var game = this.GetGame(world);
            game.State = state;
            world.setComponentData(this.GAME, game);
        };
        GameService.IsPaused = function (world) {
            var state = this.GetGame(world).State;
            return state == game_1.GameState.PAUSED;
        };
        GameService.GetHeroEntity = function (world) {
            if (!world.exists(this.GAME)) {
                this.HERO = world.getEntityByName("Hero");
                if (!world.exists(this.HERO)) {
                    this.HERO = null;
                    return null;
                }
            }
            return this.GAME;
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
    var FlyingSystem = /** @class */ (function (_super) {
        __extends(FlyingSystem, _super);
        function FlyingSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FlyingSystem.prototype.OnUpdate = function () {
            if (game.GameService.IsPaused(this.world))
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
            if (game.GameService.IsPaused(this.world))
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
        HitEnemySystem.prototype.OnUpdate = function () {
            if (game.GameService.IsPaused(this.world))
                return;
            var config = game.GameService.GetConfig(this.world);
            this.world.forEach([ut.Entity, game.Hero, game.Flying, ut.Core2D.TransformLocalPosition], function (entity, hero, flying, transform) {
                var pos = transform.position;
                //look for enemy. Hit. Fix position
                transform.position = pos;
            });
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
            if (game.GameService.IsPaused(this.world))
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