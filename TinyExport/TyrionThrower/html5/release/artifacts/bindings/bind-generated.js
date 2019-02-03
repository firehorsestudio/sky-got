/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
var game = game || {};
game.GameState = {
  MENU: 10,
  THROW: 20,
  PLAYING: 30,
  PAUSED: 40,
  END: 50
};
var entities = entities || {};
entities.game = entities.game || {};
entities.game.Bootstrap = entities.game.Bootstrap || {};
entities.game.Bootstrap.Component = function() {
};
entities.game.Bootstrap.Component.prototype = Object.create(null);
entities.game.Bootstrap.Component.prototype.constructor = entities.game.Bootstrap.Component;
Object.defineProperties(entities.game.Bootstrap.Component.prototype, {
});
entities.game.Bootstrap.Component._size = 1;
entities.game.Bootstrap.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Bootstrap.Component.prototype);
  return v;
};
entities.game.Bootstrap.Component._toPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Bootstrap.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Bootstrap.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Bootstrap.Component.StorageView.prototype = Object.create(null);
entities.game.Bootstrap.Component.StorageView.prototype.constructor = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component._view = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component.StorageView._isSharedComp = entities.game.Bootstrap.Component._isSharedComp = false;
entities.game.Bootstrap.Component.StorageView._fromPtr = entities.game.Bootstrap.Component._fromPtr;
entities.game.Bootstrap.Component.StorageView._toPtr = entities.game.Bootstrap.Component._toPtr;
entities.game.Bootstrap.Component.StorageView._tempHeapPtr = entities.game.Bootstrap.Component._tempHeapPtr;
entities.game.Bootstrap.Component.StorageView._size = entities.game.Bootstrap.Component._size;
entities.game.Bootstrap.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Bootstrap.Component.StorageView.prototype, {
});
entities.game.Bootstrap.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Bootstrap.Component is a POD type, so a JavaScript side copy constructor entities.game.Bootstrap.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Bootstrap.Component, { cid: { configurable: true, get: function() { delete entities.game.Bootstrap.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bootstrap.Component.cid = Module._ut_component_register_cid(/*entities.game.Bootstrap.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Bootstrap::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Bootstrap.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Bootstrap.Component.cid; } } });
entities.game.Session = entities.game.Session || {};
entities.game.Session.Component = function() {
};
entities.game.Session.Component.prototype = Object.create(null);
entities.game.Session.Component.prototype.constructor = entities.game.Session.Component;
Object.defineProperties(entities.game.Session.Component.prototype, {
});
entities.game.Session.Component._size = 1;
entities.game.Session.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Session.Component.prototype);
  return v;
};
entities.game.Session.Component._toPtr = function(ptr, v) {
};
entities.game.Session.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Session.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Session.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Session.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Session.Component.StorageView.prototype = Object.create(null);
entities.game.Session.Component.StorageView.prototype.constructor = entities.game.Session.Component.StorageView;
entities.game.Session.Component._view = entities.game.Session.Component.StorageView;
entities.game.Session.Component.StorageView._isSharedComp = entities.game.Session.Component._isSharedComp = false;
entities.game.Session.Component.StorageView._fromPtr = entities.game.Session.Component._fromPtr;
entities.game.Session.Component.StorageView._toPtr = entities.game.Session.Component._toPtr;
entities.game.Session.Component.StorageView._tempHeapPtr = entities.game.Session.Component._tempHeapPtr;
entities.game.Session.Component.StorageView._size = entities.game.Session.Component._size;
entities.game.Session.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Session.Component.StorageView.prototype, {
});
entities.game.Session.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Session.Component is a POD type, so a JavaScript side copy constructor entities.game.Session.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Session.Component, { cid: { configurable: true, get: function() { delete entities.game.Session.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Session.Component.cid = Module._ut_component_register_cid(/*entities.game.Session.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Session::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Session.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Session.Component.cid; } } });
entities.game.SettingsMenu = entities.game.SettingsMenu || {};
entities.game.SettingsMenu.Component = function() {
};
entities.game.SettingsMenu.Component.prototype = Object.create(null);
entities.game.SettingsMenu.Component.prototype.constructor = entities.game.SettingsMenu.Component;
Object.defineProperties(entities.game.SettingsMenu.Component.prototype, {
});
entities.game.SettingsMenu.Component._size = 1;
entities.game.SettingsMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.SettingsMenu.Component.prototype);
  return v;
};
entities.game.SettingsMenu.Component._toPtr = function(ptr, v) {
};
entities.game.SettingsMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.SettingsMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.SettingsMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.SettingsMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.SettingsMenu.Component.StorageView.prototype = Object.create(null);
entities.game.SettingsMenu.Component.StorageView.prototype.constructor = entities.game.SettingsMenu.Component.StorageView;
entities.game.SettingsMenu.Component._view = entities.game.SettingsMenu.Component.StorageView;
entities.game.SettingsMenu.Component.StorageView._isSharedComp = entities.game.SettingsMenu.Component._isSharedComp = false;
entities.game.SettingsMenu.Component.StorageView._fromPtr = entities.game.SettingsMenu.Component._fromPtr;
entities.game.SettingsMenu.Component.StorageView._toPtr = entities.game.SettingsMenu.Component._toPtr;
entities.game.SettingsMenu.Component.StorageView._tempHeapPtr = entities.game.SettingsMenu.Component._tempHeapPtr;
entities.game.SettingsMenu.Component.StorageView._size = entities.game.SettingsMenu.Component._size;
entities.game.SettingsMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.SettingsMenu.Component.StorageView.prototype, {
});
entities.game.SettingsMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.SettingsMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.SettingsMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.SettingsMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.SettingsMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.SettingsMenu.Component.cid = Module._ut_component_register_cid(/*entities.game.SettingsMenu.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::SettingsMenu::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.SettingsMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.SettingsMenu.Component.cid; } } });
entities.game.Zombie = entities.game.Zombie || {};
entities.game.Zombie.Component = function() {
};
entities.game.Zombie.Component.prototype = Object.create(null);
entities.game.Zombie.Component.prototype.constructor = entities.game.Zombie.Component;
Object.defineProperties(entities.game.Zombie.Component.prototype, {
});
entities.game.Zombie.Component._size = 1;
entities.game.Zombie.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Zombie.Component.prototype);
  return v;
};
entities.game.Zombie.Component._toPtr = function(ptr, v) {
};
entities.game.Zombie.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Zombie.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Zombie.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Zombie.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Zombie.Component.StorageView.prototype = Object.create(null);
entities.game.Zombie.Component.StorageView.prototype.constructor = entities.game.Zombie.Component.StorageView;
entities.game.Zombie.Component._view = entities.game.Zombie.Component.StorageView;
entities.game.Zombie.Component.StorageView._isSharedComp = entities.game.Zombie.Component._isSharedComp = false;
entities.game.Zombie.Component.StorageView._fromPtr = entities.game.Zombie.Component._fromPtr;
entities.game.Zombie.Component.StorageView._toPtr = entities.game.Zombie.Component._toPtr;
entities.game.Zombie.Component.StorageView._tempHeapPtr = entities.game.Zombie.Component._tempHeapPtr;
entities.game.Zombie.Component.StorageView._size = entities.game.Zombie.Component._size;
entities.game.Zombie.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Zombie.Component.StorageView.prototype, {
});
entities.game.Zombie.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Zombie.Component is a POD type, so a JavaScript side copy constructor entities.game.Zombie.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Zombie.Component, { cid: { configurable: true, get: function() { delete entities.game.Zombie.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Zombie.Component.cid = Module._ut_component_register_cid(/*entities.game.Zombie.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Zombie::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Zombie.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Zombie.Component.cid; } } });
entities.game.InGameTopMenuGroup = entities.game.InGameTopMenuGroup || {};
entities.game.InGameTopMenuGroup.Component = function() {
};
entities.game.InGameTopMenuGroup.Component.prototype = Object.create(null);
entities.game.InGameTopMenuGroup.Component.prototype.constructor = entities.game.InGameTopMenuGroup.Component;
Object.defineProperties(entities.game.InGameTopMenuGroup.Component.prototype, {
});
entities.game.InGameTopMenuGroup.Component._size = 1;
entities.game.InGameTopMenuGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.InGameTopMenuGroup.Component.prototype);
  return v;
};
entities.game.InGameTopMenuGroup.Component._toPtr = function(ptr, v) {
};
entities.game.InGameTopMenuGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.InGameTopMenuGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.InGameTopMenuGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.InGameTopMenuGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.InGameTopMenuGroup.Component.StorageView.prototype = Object.create(null);
entities.game.InGameTopMenuGroup.Component.StorageView.prototype.constructor = entities.game.InGameTopMenuGroup.Component.StorageView;
entities.game.InGameTopMenuGroup.Component._view = entities.game.InGameTopMenuGroup.Component.StorageView;
entities.game.InGameTopMenuGroup.Component.StorageView._isSharedComp = entities.game.InGameTopMenuGroup.Component._isSharedComp = false;
entities.game.InGameTopMenuGroup.Component.StorageView._fromPtr = entities.game.InGameTopMenuGroup.Component._fromPtr;
entities.game.InGameTopMenuGroup.Component.StorageView._toPtr = entities.game.InGameTopMenuGroup.Component._toPtr;
entities.game.InGameTopMenuGroup.Component.StorageView._tempHeapPtr = entities.game.InGameTopMenuGroup.Component._tempHeapPtr;
entities.game.InGameTopMenuGroup.Component.StorageView._size = entities.game.InGameTopMenuGroup.Component._size;
entities.game.InGameTopMenuGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.InGameTopMenuGroup.Component.StorageView.prototype, {
});
entities.game.InGameTopMenuGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.InGameTopMenuGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.InGameTopMenuGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.InGameTopMenuGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.InGameTopMenuGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.InGameTopMenuGroup.Component.cid = Module._ut_component_register_cid(/*entities.game.InGameTopMenuGroup.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::InGameTopMenuGroup::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.InGameTopMenuGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.InGameTopMenuGroup.Component.cid; } } });
entities.game.MenuInitialGroup = entities.game.MenuInitialGroup || {};
entities.game.MenuInitialGroup.Component = function() {
};
entities.game.MenuInitialGroup.Component.prototype = Object.create(null);
entities.game.MenuInitialGroup.Component.prototype.constructor = entities.game.MenuInitialGroup.Component;
Object.defineProperties(entities.game.MenuInitialGroup.Component.prototype, {
});
entities.game.MenuInitialGroup.Component._size = 1;
entities.game.MenuInitialGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.MenuInitialGroup.Component.prototype);
  return v;
};
entities.game.MenuInitialGroup.Component._toPtr = function(ptr, v) {
};
entities.game.MenuInitialGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.MenuInitialGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.MenuInitialGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.MenuInitialGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.MenuInitialGroup.Component.StorageView.prototype = Object.create(null);
entities.game.MenuInitialGroup.Component.StorageView.prototype.constructor = entities.game.MenuInitialGroup.Component.StorageView;
entities.game.MenuInitialGroup.Component._view = entities.game.MenuInitialGroup.Component.StorageView;
entities.game.MenuInitialGroup.Component.StorageView._isSharedComp = entities.game.MenuInitialGroup.Component._isSharedComp = false;
entities.game.MenuInitialGroup.Component.StorageView._fromPtr = entities.game.MenuInitialGroup.Component._fromPtr;
entities.game.MenuInitialGroup.Component.StorageView._toPtr = entities.game.MenuInitialGroup.Component._toPtr;
entities.game.MenuInitialGroup.Component.StorageView._tempHeapPtr = entities.game.MenuInitialGroup.Component._tempHeapPtr;
entities.game.MenuInitialGroup.Component.StorageView._size = entities.game.MenuInitialGroup.Component._size;
entities.game.MenuInitialGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.MenuInitialGroup.Component.StorageView.prototype, {
});
entities.game.MenuInitialGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.MenuInitialGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.MenuInitialGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.MenuInitialGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.MenuInitialGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.MenuInitialGroup.Component.cid = Module._ut_component_register_cid(/*entities.game.MenuInitialGroup.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::MenuInitialGroup::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.MenuInitialGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.MenuInitialGroup.Component.cid; } } });
entities.game.PauseMenuGroup = entities.game.PauseMenuGroup || {};
entities.game.PauseMenuGroup.Component = function() {
};
entities.game.PauseMenuGroup.Component.prototype = Object.create(null);
entities.game.PauseMenuGroup.Component.prototype.constructor = entities.game.PauseMenuGroup.Component;
Object.defineProperties(entities.game.PauseMenuGroup.Component.prototype, {
});
entities.game.PauseMenuGroup.Component._size = 1;
entities.game.PauseMenuGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.PauseMenuGroup.Component.prototype);
  return v;
};
entities.game.PauseMenuGroup.Component._toPtr = function(ptr, v) {
};
entities.game.PauseMenuGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.PauseMenuGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.PauseMenuGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.PauseMenuGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.PauseMenuGroup.Component.StorageView.prototype = Object.create(null);
entities.game.PauseMenuGroup.Component.StorageView.prototype.constructor = entities.game.PauseMenuGroup.Component.StorageView;
entities.game.PauseMenuGroup.Component._view = entities.game.PauseMenuGroup.Component.StorageView;
entities.game.PauseMenuGroup.Component.StorageView._isSharedComp = entities.game.PauseMenuGroup.Component._isSharedComp = false;
entities.game.PauseMenuGroup.Component.StorageView._fromPtr = entities.game.PauseMenuGroup.Component._fromPtr;
entities.game.PauseMenuGroup.Component.StorageView._toPtr = entities.game.PauseMenuGroup.Component._toPtr;
entities.game.PauseMenuGroup.Component.StorageView._tempHeapPtr = entities.game.PauseMenuGroup.Component._tempHeapPtr;
entities.game.PauseMenuGroup.Component.StorageView._size = entities.game.PauseMenuGroup.Component._size;
entities.game.PauseMenuGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.PauseMenuGroup.Component.StorageView.prototype, {
});
entities.game.PauseMenuGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.PauseMenuGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.PauseMenuGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.PauseMenuGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.PauseMenuGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.PauseMenuGroup.Component.cid = Module._ut_component_register_cid(/*entities.game.PauseMenuGroup.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::PauseMenuGroup::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.PauseMenuGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.PauseMenuGroup.Component.cid; } } });
entities.game.NewEntityGroup = entities.game.NewEntityGroup || {};
entities.game.NewEntityGroup.Component = function() {
};
entities.game.NewEntityGroup.Component.prototype = Object.create(null);
entities.game.NewEntityGroup.Component.prototype.constructor = entities.game.NewEntityGroup.Component;
Object.defineProperties(entities.game.NewEntityGroup.Component.prototype, {
});
entities.game.NewEntityGroup.Component._size = 1;
entities.game.NewEntityGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.NewEntityGroup.Component.prototype);
  return v;
};
entities.game.NewEntityGroup.Component._toPtr = function(ptr, v) {
};
entities.game.NewEntityGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.NewEntityGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.NewEntityGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.NewEntityGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.NewEntityGroup.Component.StorageView.prototype = Object.create(null);
entities.game.NewEntityGroup.Component.StorageView.prototype.constructor = entities.game.NewEntityGroup.Component.StorageView;
entities.game.NewEntityGroup.Component._view = entities.game.NewEntityGroup.Component.StorageView;
entities.game.NewEntityGroup.Component.StorageView._isSharedComp = entities.game.NewEntityGroup.Component._isSharedComp = false;
entities.game.NewEntityGroup.Component.StorageView._fromPtr = entities.game.NewEntityGroup.Component._fromPtr;
entities.game.NewEntityGroup.Component.StorageView._toPtr = entities.game.NewEntityGroup.Component._toPtr;
entities.game.NewEntityGroup.Component.StorageView._tempHeapPtr = entities.game.NewEntityGroup.Component._tempHeapPtr;
entities.game.NewEntityGroup.Component.StorageView._size = entities.game.NewEntityGroup.Component._size;
entities.game.NewEntityGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.NewEntityGroup.Component.StorageView.prototype, {
});
entities.game.NewEntityGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.NewEntityGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.NewEntityGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.NewEntityGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.NewEntityGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.NewEntityGroup.Component.cid = Module._ut_component_register_cid(/*entities.game.NewEntityGroup.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::NewEntityGroup::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.NewEntityGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.NewEntityGroup.Component.cid; } } });
game.BlinkToDeath = function(arg0) {
  this._Timer = (+(arg0===undefined ? 0 : arg0));
};
game.BlinkToDeath.prototype = Object.create(null);
game.BlinkToDeath.prototype.constructor = game.BlinkToDeath;
Object.defineProperties(game.BlinkToDeath.prototype, {
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
});
game.BlinkToDeath._size = 4;
game.BlinkToDeath._fromPtr = function(ptr, v) {
  v = v || Object.create(game.BlinkToDeath.prototype);
  v._Timer = HEAPF32[(ptr+0)>>2];
  return v;
};
game.BlinkToDeath._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
};
game.BlinkToDeath._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
};
game.BlinkToDeath._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.BlinkToDeath._toTempHeapPtr(ptr, v);
  return ptr;
};
game.BlinkToDeath.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.BlinkToDeath.StorageView.prototype = Object.create(null);
game.BlinkToDeath.StorageView.prototype.constructor = game.BlinkToDeath.StorageView;
game.BlinkToDeath._view = game.BlinkToDeath.StorageView;
game.BlinkToDeath.StorageView._isSharedComp = game.BlinkToDeath._isSharedComp = false;
game.BlinkToDeath.StorageView._fromPtr = game.BlinkToDeath._fromPtr;
game.BlinkToDeath.StorageView._toPtr = game.BlinkToDeath._toPtr;
game.BlinkToDeath.StorageView._tempHeapPtr = game.BlinkToDeath._tempHeapPtr;
game.BlinkToDeath.StorageView._size = game.BlinkToDeath._size;
game.BlinkToDeath.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.BlinkToDeath.StorageView.prototype, {
  Timer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.BlinkToDeath._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.BlinkToDeath is a POD type, so a JavaScript side copy constructor game.BlinkToDeath._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.BlinkToDeath, { cid: { configurable: true, get: function() { delete game.BlinkToDeath.cid; var offsetsPtr = 0, offsetsCount = 0; return game.BlinkToDeath.cid = Module._ut_component_register_cid(/*game.BlinkToDeath*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::BlinkToDeath"*/, 0, 0); } } });
Object.defineProperties(game.BlinkToDeath.StorageView, { cid: { configurable: true, get: function() { return game.BlinkToDeath.cid; } } });
game.BlinkToDeath.Timer = { $ofs:0, $t:"float", $c:game.BlinkToDeath };
game.ScoreDistance = function(arg0) {
  this._Score = (/*64BIT*/arg0|0);
};
game.ScoreDistance.prototype = Object.create(null);
game.ScoreDistance.prototype.constructor = game.ScoreDistance;
Object.defineProperties(game.ScoreDistance.prototype, {
  Score: {
    get: function() { return this._Score; },
    set: function(v) { this._Score = (/*64BIT*/v|0); },
  },
});
game.ScoreDistance._size = 8;
game.ScoreDistance._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScoreDistance.prototype);
  v._Score = (/*64BIT*/HEAP32[(ptr+0)>>2]);
  return v;
};
game.ScoreDistance._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = /*64BIT*/v.Score;
};
game.ScoreDistance._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = /*64BIT*/v.Score;
};
game.ScoreDistance._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.ScoreDistance._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScoreDistance.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ScoreDistance.StorageView.prototype = Object.create(null);
game.ScoreDistance.StorageView.prototype.constructor = game.ScoreDistance.StorageView;
game.ScoreDistance._view = game.ScoreDistance.StorageView;
game.ScoreDistance.StorageView._isSharedComp = game.ScoreDistance._isSharedComp = false;
game.ScoreDistance.StorageView._fromPtr = game.ScoreDistance._fromPtr;
game.ScoreDistance.StorageView._toPtr = game.ScoreDistance._toPtr;
game.ScoreDistance.StorageView._tempHeapPtr = game.ScoreDistance._tempHeapPtr;
game.ScoreDistance.StorageView._size = game.ScoreDistance._size;
game.ScoreDistance.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.ScoreDistance.StorageView.prototype, {
  Score: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+0)>>2]); },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = /*64BIT*/v; },
  },
});
game.ScoreDistance._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ScoreDistance is a POD type, so a JavaScript side copy constructor game.ScoreDistance._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ScoreDistance, { cid: { configurable: true, get: function() { delete game.ScoreDistance.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ScoreDistance.cid = Module._ut_component_register_cid(/*game.ScoreDistance*/ 8, 8, 0, offsetsPtr, offsetsCount, 0/*"game::ScoreDistance"*/, 0, 0); } } });
Object.defineProperties(game.ScoreDistance.StorageView, { cid: { configurable: true, get: function() { return game.ScoreDistance.cid; } } });
game.ScoreDistance.Score = { $ofs:0, $t:"System.Int64", $c:game.ScoreDistance };
game.SettingsMenu = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._ButtonOK = (arg0 === undefined ? new ut.Entity : arg0);
  this._ButtonCredits = (arg1 === undefined ? new ut.Entity : arg1);
  this._ButtonResetProgress = (arg2 === undefined ? new ut.Entity : arg2);
  this._ButtonLanguage = (arg3 === undefined ? new ut.Entity : arg3);
  this._ButtonRenderMode = (arg4 === undefined ? new ut.Entity : arg4);
  this._LabelRenderMode = (arg5 === undefined ? new ut.Entity : arg5);
};
game.SettingsMenu.prototype = Object.create(null);
game.SettingsMenu.prototype.constructor = game.SettingsMenu;
Object.defineProperties(game.SettingsMenu.prototype, {
  ButtonOK: {
    get: function() { return this._ButtonOK; },
    set: function(v) { this._ButtonOK = (v === undefined ? new ut.Entity : v); },
  },
  ButtonCredits: {
    get: function() { return this._ButtonCredits; },
    set: function(v) { this._ButtonCredits = (v === undefined ? new ut.Entity : v); },
  },
  ButtonResetProgress: {
    get: function() { return this._ButtonResetProgress; },
    set: function(v) { this._ButtonResetProgress = (v === undefined ? new ut.Entity : v); },
  },
  ButtonLanguage: {
    get: function() { return this._ButtonLanguage; },
    set: function(v) { this._ButtonLanguage = (v === undefined ? new ut.Entity : v); },
  },
  ButtonRenderMode: {
    get: function() { return this._ButtonRenderMode; },
    set: function(v) { this._ButtonRenderMode = (v === undefined ? new ut.Entity : v); },
  },
  LabelRenderMode: {
    get: function() { return this._LabelRenderMode; },
    set: function(v) { this._LabelRenderMode = (v === undefined ? new ut.Entity : v); },
  },
});
game.SettingsMenu._size = 48;
game.SettingsMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SettingsMenu.prototype);
  v._ButtonOK = ut.Entity._fromPtr(ptr+0);
  v._ButtonCredits = ut.Entity._fromPtr(ptr+8);
  v._ButtonResetProgress = ut.Entity._fromPtr(ptr+16);
  v._ButtonLanguage = ut.Entity._fromPtr(ptr+24);
  v._ButtonRenderMode = ut.Entity._fromPtr(ptr+32);
  v._LabelRenderMode = ut.Entity._fromPtr(ptr+40);
  return v;
};
game.SettingsMenu._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonOK);
  ut.Entity._toPtr(ptr+8, v.ButtonCredits);
  ut.Entity._toPtr(ptr+16, v.ButtonResetProgress);
  ut.Entity._toPtr(ptr+24, v.ButtonLanguage);
  ut.Entity._toPtr(ptr+32, v.ButtonRenderMode);
  ut.Entity._toPtr(ptr+40, v.LabelRenderMode);
};
game.SettingsMenu._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonOK);
  ut.Entity._toPtr(ptr+8, v.ButtonCredits);
  ut.Entity._toPtr(ptr+16, v.ButtonResetProgress);
  ut.Entity._toPtr(ptr+24, v.ButtonLanguage);
  ut.Entity._toPtr(ptr+32, v.ButtonRenderMode);
  ut.Entity._toPtr(ptr+40, v.LabelRenderMode);
};
game.SettingsMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(48);
  if (v) game.SettingsMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SettingsMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SettingsMenu.StorageView.prototype = Object.create(null);
game.SettingsMenu.StorageView.prototype.constructor = game.SettingsMenu.StorageView;
game.SettingsMenu._view = game.SettingsMenu.StorageView;
game.SettingsMenu.StorageView._isSharedComp = game.SettingsMenu._isSharedComp = false;
game.SettingsMenu.StorageView._fromPtr = game.SettingsMenu._fromPtr;
game.SettingsMenu.StorageView._toPtr = game.SettingsMenu._toPtr;
game.SettingsMenu.StorageView._tempHeapPtr = game.SettingsMenu._tempHeapPtr;
game.SettingsMenu.StorageView._size = game.SettingsMenu._size;
game.SettingsMenu.StorageView.prototype.$advance = function() {
  this._ptr += 48;
};
Object.defineProperties(game.SettingsMenu.StorageView.prototype, {
  ButtonOK: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  ButtonCredits: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  ButtonResetProgress: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  ButtonLanguage: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
  ButtonRenderMode: {
    get: function() { return ut.Entity._fromPtr(this._ptr+32); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+32, v); },
  },
  LabelRenderMode: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
});
game.SettingsMenu._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SettingsMenu is a POD type, so a JavaScript side copy constructor game.SettingsMenu._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.SettingsMenu, { cid: { configurable: true, get: function() { delete game.SettingsMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24,32,40]); var offsetsCount = 6; return game.SettingsMenu.cid = Module._ut_component_register_cid(/*game.SettingsMenu*/ 48, 4, 0, offsetsPtr, offsetsCount, 0/*"game::SettingsMenu"*/, 0, 0); } } });
Object.defineProperties(game.SettingsMenu.StorageView, { cid: { configurable: true, get: function() { return game.SettingsMenu.cid; } } });
game.SettingsMenu.ButtonOK = { $ofs:0, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonOK.index = { $ofs:0, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonOK.version = { $ofs:4, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonCredits = { $ofs:8, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonCredits.index = { $ofs:8, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonCredits.version = { $ofs:12, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonResetProgress = { $ofs:16, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonResetProgress.index = { $ofs:16, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonResetProgress.version = { $ofs:20, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonLanguage = { $ofs:24, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonLanguage.index = { $ofs:24, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonLanguage.version = { $ofs:28, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonRenderMode = { $ofs:32, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonRenderMode.index = { $ofs:32, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonRenderMode.version = { $ofs:36, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.LabelRenderMode = { $ofs:40, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.LabelRenderMode.index = { $ofs:40, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.LabelRenderMode.version = { $ofs:44, $t:"int32_t", $c:game.SettingsMenu };
game.BoxCollider = function(arg0, arg1, arg2, arg3, arg4) {
  this._x = (+(arg0===undefined ? 0 : arg0));
  this._y = (+(arg1===undefined ? 0 : arg1));
  this._width = (+(arg2===undefined ? 0 : arg2));
  this._height = (+(arg3===undefined ? 0 : arg3));
  this._Deactivated = (arg4 ? true : false);
};
game.BoxCollider.prototype = Object.create(null);
game.BoxCollider.prototype.constructor = game.BoxCollider;
Object.defineProperties(game.BoxCollider.prototype, {
  x: {
    get: function() { return this._x; },
    set: function(v) { this._x = (+(v===undefined ? 0 : v)); },
  },
  y: {
    get: function() { return this._y; },
    set: function(v) { this._y = (+(v===undefined ? 0 : v)); },
  },
  width: {
    get: function() { return this._width; },
    set: function(v) { this._width = (+(v===undefined ? 0 : v)); },
  },
  height: {
    get: function() { return this._height; },
    set: function(v) { this._height = (+(v===undefined ? 0 : v)); },
  },
  Deactivated: {
    get: function() { return this._Deactivated; },
    set: function(v) { this._Deactivated = (v ? true : false); },
  },
});
game.BoxCollider._size = 20;
game.BoxCollider._fromPtr = function(ptr, v) {
  v = v || Object.create(game.BoxCollider.prototype);
  v._x = HEAPF32[(ptr+0)>>2];
  v._y = HEAPF32[(ptr+4)>>2];
  v._width = HEAPF32[(ptr+8)>>2];
  v._height = HEAPF32[(ptr+12)>>2];
  v._Deactivated = (HEAP8[ptr+16]?true:false);
  return v;
};
game.BoxCollider._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.x;
  HEAPF32[(ptr+4)>>2] = v.y;
  HEAPF32[(ptr+8)>>2] = v.width;
  HEAPF32[(ptr+12)>>2] = v.height;
  HEAP8[ptr+16] = (v.Deactivated)?1:0;
};
game.BoxCollider._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.x;
  HEAPF32[(ptr+4)>>2] = v.y;
  HEAPF32[(ptr+8)>>2] = v.width;
  HEAPF32[(ptr+12)>>2] = v.height;
  HEAP8[ptr+16] = (v.Deactivated)?1:0;
};
game.BoxCollider._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.BoxCollider._toTempHeapPtr(ptr, v);
  return ptr;
};
game.BoxCollider.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.BoxCollider.StorageView.prototype = Object.create(null);
game.BoxCollider.StorageView.prototype.constructor = game.BoxCollider.StorageView;
game.BoxCollider._view = game.BoxCollider.StorageView;
game.BoxCollider.StorageView._isSharedComp = game.BoxCollider._isSharedComp = false;
game.BoxCollider.StorageView._fromPtr = game.BoxCollider._fromPtr;
game.BoxCollider.StorageView._toPtr = game.BoxCollider._toPtr;
game.BoxCollider.StorageView._tempHeapPtr = game.BoxCollider._tempHeapPtr;
game.BoxCollider.StorageView._size = game.BoxCollider._size;
game.BoxCollider.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.BoxCollider.StorageView.prototype, {
  x: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  y: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  width: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  height: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  Deactivated: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
});
game.BoxCollider._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.BoxCollider is a POD type, so a JavaScript side copy constructor game.BoxCollider._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.BoxCollider, { cid: { configurable: true, get: function() { delete game.BoxCollider.cid; var offsetsPtr = 0, offsetsCount = 0; return game.BoxCollider.cid = Module._ut_component_register_cid(/*game.BoxCollider*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::BoxCollider"*/, 0, 0); } } });
Object.defineProperties(game.BoxCollider.StorageView, { cid: { configurable: true, get: function() { return game.BoxCollider.cid; } } });
game.BoxCollider.x = { $ofs:0, $t:"float", $c:game.BoxCollider };
game.BoxCollider.y = { $ofs:4, $t:"float", $c:game.BoxCollider };
game.BoxCollider.width = { $ofs:8, $t:"float", $c:game.BoxCollider };
game.BoxCollider.height = { $ofs:12, $t:"float", $c:game.BoxCollider };
game.BoxCollider.Deactivated = { $ofs:16, $t:"bool", $c:game.BoxCollider };
game.DeathSprite = function(arg0) {
  this._Death = (arg0 === undefined ? new ut.Entity : arg0);
};
game.DeathSprite.prototype = Object.create(null);
game.DeathSprite.prototype.constructor = game.DeathSprite;
Object.defineProperties(game.DeathSprite.prototype, {
  Death: {
    get: function() { return this._Death; },
    set: function(v) { this._Death = (v === undefined ? new ut.Entity : v); },
  },
});
game.DeathSprite._size = 8;
game.DeathSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DeathSprite.prototype);
  v._Death = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.DeathSprite._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Death);
};
game.DeathSprite._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Death);
};
game.DeathSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.DeathSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DeathSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DeathSprite.StorageView.prototype = Object.create(null);
game.DeathSprite.StorageView.prototype.constructor = game.DeathSprite.StorageView;
game.DeathSprite._view = game.DeathSprite.StorageView;
game.DeathSprite.StorageView._isSharedComp = game.DeathSprite._isSharedComp = false;
game.DeathSprite.StorageView._fromPtr = game.DeathSprite._fromPtr;
game.DeathSprite.StorageView._toPtr = game.DeathSprite._toPtr;
game.DeathSprite.StorageView._tempHeapPtr = game.DeathSprite._tempHeapPtr;
game.DeathSprite.StorageView._size = game.DeathSprite._size;
game.DeathSprite.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.DeathSprite.StorageView.prototype, {
  Death: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.DeathSprite._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DeathSprite is a POD type, so a JavaScript side copy constructor game.DeathSprite._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.DeathSprite, { cid: { configurable: true, get: function() { delete game.DeathSprite.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.DeathSprite.cid = Module._ut_component_register_cid(/*game.DeathSprite*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::DeathSprite"*/, 0, 0); } } });
Object.defineProperties(game.DeathSprite.StorageView, { cid: { configurable: true, get: function() { return game.DeathSprite.cid; } } });
game.DeathSprite.Death = { $ofs:0, $t:"ut.Entity", $c:game.DeathSprite };
game.DeathSprite.Death.index = { $ofs:0, $t:"int32_t", $c:game.DeathSprite };
game.DeathSprite.Death.version = { $ofs:4, $t:"int32_t", $c:game.DeathSprite };
game.DwarfSprites = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  this._Idle = (arg0 === undefined ? new ut.Entity : arg0);
  this._Fly1 = (arg1 === undefined ? new ut.Entity : arg1);
  this._Fly2 = (arg2 === undefined ? new ut.Entity : arg2);
  this._Kick1 = (arg3 === undefined ? new ut.Entity : arg3);
  this._Kick2 = (arg4 === undefined ? new ut.Entity : arg4);
  this._Dive = (arg5 === undefined ? new ut.Entity : arg5);
  this._Dead = (arg6 === undefined ? new ut.Entity : arg6);
};
game.DwarfSprites.prototype = Object.create(null);
game.DwarfSprites.prototype.constructor = game.DwarfSprites;
Object.defineProperties(game.DwarfSprites.prototype, {
  Idle: {
    get: function() { return this._Idle; },
    set: function(v) { this._Idle = (v === undefined ? new ut.Entity : v); },
  },
  Fly1: {
    get: function() { return this._Fly1; },
    set: function(v) { this._Fly1 = (v === undefined ? new ut.Entity : v); },
  },
  Fly2: {
    get: function() { return this._Fly2; },
    set: function(v) { this._Fly2 = (v === undefined ? new ut.Entity : v); },
  },
  Kick1: {
    get: function() { return this._Kick1; },
    set: function(v) { this._Kick1 = (v === undefined ? new ut.Entity : v); },
  },
  Kick2: {
    get: function() { return this._Kick2; },
    set: function(v) { this._Kick2 = (v === undefined ? new ut.Entity : v); },
  },
  Dive: {
    get: function() { return this._Dive; },
    set: function(v) { this._Dive = (v === undefined ? new ut.Entity : v); },
  },
  Dead: {
    get: function() { return this._Dead; },
    set: function(v) { this._Dead = (v === undefined ? new ut.Entity : v); },
  },
});
game.DwarfSprites._size = 56;
game.DwarfSprites._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DwarfSprites.prototype);
  v._Idle = ut.Entity._fromPtr(ptr+0);
  v._Fly1 = ut.Entity._fromPtr(ptr+8);
  v._Fly2 = ut.Entity._fromPtr(ptr+16);
  v._Kick1 = ut.Entity._fromPtr(ptr+24);
  v._Kick2 = ut.Entity._fromPtr(ptr+32);
  v._Dive = ut.Entity._fromPtr(ptr+40);
  v._Dead = ut.Entity._fromPtr(ptr+48);
  return v;
};
game.DwarfSprites._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Idle);
  ut.Entity._toPtr(ptr+8, v.Fly1);
  ut.Entity._toPtr(ptr+16, v.Fly2);
  ut.Entity._toPtr(ptr+24, v.Kick1);
  ut.Entity._toPtr(ptr+32, v.Kick2);
  ut.Entity._toPtr(ptr+40, v.Dive);
  ut.Entity._toPtr(ptr+48, v.Dead);
};
game.DwarfSprites._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Idle);
  ut.Entity._toPtr(ptr+8, v.Fly1);
  ut.Entity._toPtr(ptr+16, v.Fly2);
  ut.Entity._toPtr(ptr+24, v.Kick1);
  ut.Entity._toPtr(ptr+32, v.Kick2);
  ut.Entity._toPtr(ptr+40, v.Dive);
  ut.Entity._toPtr(ptr+48, v.Dead);
};
game.DwarfSprites._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(56);
  if (v) game.DwarfSprites._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DwarfSprites.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DwarfSprites.StorageView.prototype = Object.create(null);
game.DwarfSprites.StorageView.prototype.constructor = game.DwarfSprites.StorageView;
game.DwarfSprites._view = game.DwarfSprites.StorageView;
game.DwarfSprites.StorageView._isSharedComp = game.DwarfSprites._isSharedComp = false;
game.DwarfSprites.StorageView._fromPtr = game.DwarfSprites._fromPtr;
game.DwarfSprites.StorageView._toPtr = game.DwarfSprites._toPtr;
game.DwarfSprites.StorageView._tempHeapPtr = game.DwarfSprites._tempHeapPtr;
game.DwarfSprites.StorageView._size = game.DwarfSprites._size;
game.DwarfSprites.StorageView.prototype.$advance = function() {
  this._ptr += 56;
};
Object.defineProperties(game.DwarfSprites.StorageView.prototype, {
  Idle: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  Fly1: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  Fly2: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  Kick1: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
  Kick2: {
    get: function() { return ut.Entity._fromPtr(this._ptr+32); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+32, v); },
  },
  Dive: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
  Dead: {
    get: function() { return ut.Entity._fromPtr(this._ptr+48); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+48, v); },
  },
});
game.DwarfSprites._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DwarfSprites is a POD type, so a JavaScript side copy constructor game.DwarfSprites._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.DwarfSprites, { cid: { configurable: true, get: function() { delete game.DwarfSprites.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24,32,40,48]); var offsetsCount = 7; return game.DwarfSprites.cid = Module._ut_component_register_cid(/*game.DwarfSprites*/ 56, 4, 0, offsetsPtr, offsetsCount, 0/*"game::DwarfSprites"*/, 0, 0); } } });
Object.defineProperties(game.DwarfSprites.StorageView, { cid: { configurable: true, get: function() { return game.DwarfSprites.cid; } } });
game.DwarfSprites.Idle = { $ofs:0, $t:"ut.Entity", $c:game.DwarfSprites };
game.DwarfSprites.Idle.index = { $ofs:0, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Idle.version = { $ofs:4, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Fly1 = { $ofs:8, $t:"ut.Entity", $c:game.DwarfSprites };
game.DwarfSprites.Fly1.index = { $ofs:8, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Fly1.version = { $ofs:12, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Fly2 = { $ofs:16, $t:"ut.Entity", $c:game.DwarfSprites };
game.DwarfSprites.Fly2.index = { $ofs:16, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Fly2.version = { $ofs:20, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Kick1 = { $ofs:24, $t:"ut.Entity", $c:game.DwarfSprites };
game.DwarfSprites.Kick1.index = { $ofs:24, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Kick1.version = { $ofs:28, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Kick2 = { $ofs:32, $t:"ut.Entity", $c:game.DwarfSprites };
game.DwarfSprites.Kick2.index = { $ofs:32, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Kick2.version = { $ofs:36, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Dive = { $ofs:40, $t:"ut.Entity", $c:game.DwarfSprites };
game.DwarfSprites.Dive.index = { $ofs:40, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Dive.version = { $ofs:44, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Dead = { $ofs:48, $t:"ut.Entity", $c:game.DwarfSprites };
game.DwarfSprites.Dead.index = { $ofs:48, $t:"int32_t", $c:game.DwarfSprites };
game.DwarfSprites.Dead.version = { $ofs:52, $t:"int32_t", $c:game.DwarfSprites };
game.Enemy = function() {
};
game.Enemy.prototype = Object.create(null);
game.Enemy.prototype.constructor = game.Enemy;
Object.defineProperties(game.Enemy.prototype, {
});
game.Enemy._size = 1;
game.Enemy._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Enemy.prototype);
  return v;
};
game.Enemy._toPtr = function(ptr, v) {
};
game.Enemy._toTempHeapPtr = function(ptr, v) {
};
game.Enemy._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Enemy._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Enemy.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Enemy.StorageView.prototype = Object.create(null);
game.Enemy.StorageView.prototype.constructor = game.Enemy.StorageView;
game.Enemy._view = game.Enemy.StorageView;
game.Enemy.StorageView._isSharedComp = game.Enemy._isSharedComp = false;
game.Enemy.StorageView._fromPtr = game.Enemy._fromPtr;
game.Enemy.StorageView._toPtr = game.Enemy._toPtr;
game.Enemy.StorageView._tempHeapPtr = game.Enemy._tempHeapPtr;
game.Enemy.StorageView._size = game.Enemy._size;
game.Enemy.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Enemy.StorageView.prototype, {
});
game.Enemy._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Enemy is a POD type, so a JavaScript side copy constructor game.Enemy._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Enemy, { cid: { configurable: true, get: function() { delete game.Enemy.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Enemy.cid = Module._ut_component_register_cid(/*game.Enemy*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Enemy"*/, 0, 0); } } });
Object.defineProperties(game.Enemy.StorageView, { cid: { configurable: true, get: function() { return game.Enemy.cid; } } });
game.Flying = function(arg0, arg1, arg2) {
  this._ScrollSpeed = (+(arg0===undefined ? 0 : arg0));
  this._AirSpeed = (+(arg1===undefined ? 0 : arg1));
  this._PreviousPosition = new ut.Math.Vector3(); if ((arg2) !== undefined) { this._PreviousPosition.copy(arg2); };
};
game.Flying.prototype = Object.create(null);
game.Flying.prototype.constructor = game.Flying;
Object.defineProperties(game.Flying.prototype, {
  ScrollSpeed: {
    get: function() { return this._ScrollSpeed; },
    set: function(v) { this._ScrollSpeed = (+(v===undefined ? 0 : v)); },
  },
  AirSpeed: {
    get: function() { return this._AirSpeed; },
    set: function(v) { this._AirSpeed = (+(v===undefined ? 0 : v)); },
  },
  PreviousPosition: {
    get: function() { return this._PreviousPosition; },
    set: function(v) { this._PreviousPosition.copy(v); },
  },
});
game.Flying._size = 20;
game.Flying._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Flying.prototype);
  v._ScrollSpeed = HEAPF32[(ptr+0)>>2];
  v._AirSpeed = HEAPF32[(ptr+4)>>2];
  v._PreviousPosition = ut._utils.vec3FromHeap(null, ptr+8);
  return v;
};
game.Flying._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.ScrollSpeed;
  HEAPF32[(ptr+4)>>2] = v.AirSpeed;
  ut._utils.vec3ToHeap(v.PreviousPosition, ptr+8);
};
game.Flying._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.ScrollSpeed;
  HEAPF32[(ptr+4)>>2] = v.AirSpeed;
  ut._utils.vec3ToHeap(v.PreviousPosition, ptr+8);
};
game.Flying._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.Flying._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Flying.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Flying.StorageView.prototype = Object.create(null);
game.Flying.StorageView.prototype.constructor = game.Flying.StorageView;
game.Flying._view = game.Flying.StorageView;
game.Flying.StorageView._isSharedComp = game.Flying._isSharedComp = false;
game.Flying.StorageView._fromPtr = game.Flying._fromPtr;
game.Flying.StorageView._toPtr = game.Flying._toPtr;
game.Flying.StorageView._tempHeapPtr = game.Flying._tempHeapPtr;
game.Flying.StorageView._size = game.Flying._size;
game.Flying.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.Flying.StorageView.prototype, {
  ScrollSpeed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  AirSpeed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  PreviousPosition: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+8); },
  },
});
game.Flying._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Flying is a POD type, so a JavaScript side copy constructor game.Flying._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Flying, { cid: { configurable: true, get: function() { delete game.Flying.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Flying.cid = Module._ut_component_register_cid(/*game.Flying*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Flying"*/, 0, 0); } } });
Object.defineProperties(game.Flying.StorageView, { cid: { configurable: true, get: function() { return game.Flying.cid; } } });
game.Flying.ScrollSpeed = { $ofs:0, $t:"float", $c:game.Flying };
game.Flying.AirSpeed = { $ofs:4, $t:"float", $c:game.Flying };
game.Flying.PreviousPosition = { $ofs:8, $t:"ut.Math.Vector3", $c:game.Flying };
game.Flying.PreviousPosition.z = { $ofs:16, $t:"float", $c:game.Flying };
game.Flying.PreviousPosition.y = { $ofs:12, $t:"float", $c:game.Flying };
game.Flying.PreviousPosition.x = { $ofs:8, $t:"float", $c:game.Flying };
game.FollowerCamera = function(arg0, arg1, arg2, arg3) {
  this._Smooth = (arg0 ? true : false);
  this._Offset = new ut.Math.Vector2(); if ((arg1) !== undefined) { this._Offset.copy(arg1); };
  this._UpperLimit = (+(arg2===undefined ? 0 : arg2));
  this._BottomLimit = (+(arg3===undefined ? 0 : arg3));
};
game.FollowerCamera.prototype = Object.create(null);
game.FollowerCamera.prototype.constructor = game.FollowerCamera;
Object.defineProperties(game.FollowerCamera.prototype, {
  Smooth: {
    get: function() { return this._Smooth; },
    set: function(v) { this._Smooth = (v ? true : false); },
  },
  Offset: {
    get: function() { return this._Offset; },
    set: function(v) { this._Offset.copy(v); },
  },
  UpperLimit: {
    get: function() { return this._UpperLimit; },
    set: function(v) { this._UpperLimit = (+(v===undefined ? 0 : v)); },
  },
  BottomLimit: {
    get: function() { return this._BottomLimit; },
    set: function(v) { this._BottomLimit = (+(v===undefined ? 0 : v)); },
  },
});
game.FollowerCamera._size = 20;
game.FollowerCamera._fromPtr = function(ptr, v) {
  v = v || Object.create(game.FollowerCamera.prototype);
  v._Smooth = (HEAP8[ptr+0]?true:false);
  v._Offset = ut._utils.vec2FromHeap(null, ptr+4);
  v._UpperLimit = HEAPF32[(ptr+12)>>2];
  v._BottomLimit = HEAPF32[(ptr+16)>>2];
  return v;
};
game.FollowerCamera._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.Smooth)?1:0;
  ut._utils.vec2ToHeap(v.Offset, ptr+4);
  HEAPF32[(ptr+12)>>2] = v.UpperLimit;
  HEAPF32[(ptr+16)>>2] = v.BottomLimit;
};
game.FollowerCamera._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.Smooth)?1:0;
  ut._utils.vec2ToHeap(v.Offset, ptr+4);
  HEAPF32[(ptr+12)>>2] = v.UpperLimit;
  HEAPF32[(ptr+16)>>2] = v.BottomLimit;
};
game.FollowerCamera._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.FollowerCamera._toTempHeapPtr(ptr, v);
  return ptr;
};
game.FollowerCamera.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.FollowerCamera.StorageView.prototype = Object.create(null);
game.FollowerCamera.StorageView.prototype.constructor = game.FollowerCamera.StorageView;
game.FollowerCamera._view = game.FollowerCamera.StorageView;
game.FollowerCamera.StorageView._isSharedComp = game.FollowerCamera._isSharedComp = false;
game.FollowerCamera.StorageView._fromPtr = game.FollowerCamera._fromPtr;
game.FollowerCamera.StorageView._toPtr = game.FollowerCamera._toPtr;
game.FollowerCamera.StorageView._tempHeapPtr = game.FollowerCamera._tempHeapPtr;
game.FollowerCamera.StorageView._size = game.FollowerCamera._size;
game.FollowerCamera.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.FollowerCamera.StorageView.prototype, {
  Smooth: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  Offset: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+4); },
  },
  UpperLimit: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  BottomLimit: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
});
game.FollowerCamera._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.FollowerCamera is a POD type, so a JavaScript side copy constructor game.FollowerCamera._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.FollowerCamera, { cid: { configurable: true, get: function() { delete game.FollowerCamera.cid; var offsetsPtr = 0, offsetsCount = 0; return game.FollowerCamera.cid = Module._ut_component_register_cid(/*game.FollowerCamera*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::FollowerCamera"*/, 0, 0); } } });
Object.defineProperties(game.FollowerCamera.StorageView, { cid: { configurable: true, get: function() { return game.FollowerCamera.cid; } } });
game.FollowerCamera.Smooth = { $ofs:0, $t:"bool", $c:game.FollowerCamera };
game.FollowerCamera.Offset = { $ofs:4, $t:"ut.Math.Vector2", $c:game.FollowerCamera };
game.FollowerCamera.Offset.y = { $ofs:8, $t:"float", $c:game.FollowerCamera };
game.FollowerCamera.Offset.x = { $ofs:4, $t:"float", $c:game.FollowerCamera };
game.FollowerCamera.UpperLimit = { $ofs:12, $t:"float", $c:game.FollowerCamera };
game.FollowerCamera.BottomLimit = { $ofs:16, $t:"float", $c:game.FollowerCamera };
game.Game = function(arg0, arg1) {
  this._State = (arg0|0);
  this._PreviousState = (arg1|0);
};
game.Game.prototype = Object.create(null);
game.Game.prototype.constructor = game.Game;
Object.defineProperties(game.Game.prototype, {
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
  PreviousState: {
    get: function() { return this._PreviousState; },
    set: function(v) { this._PreviousState = (v|0); },
  },
});
game.Game._size = 8;
game.Game._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Game.prototype);
  v._State = HEAP32[(ptr+0)>>2];
  v._PreviousState = HEAP32[(ptr+4)>>2];
  return v;
};
game.Game._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.State;
  HEAP32[(ptr+4)>>2] = v.PreviousState;
};
game.Game._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.State;
  HEAP32[(ptr+4)>>2] = v.PreviousState;
};
game.Game._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Game._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Game.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Game.StorageView.prototype = Object.create(null);
game.Game.StorageView.prototype.constructor = game.Game.StorageView;
game.Game._view = game.Game.StorageView;
game.Game.StorageView._isSharedComp = game.Game._isSharedComp = false;
game.Game.StorageView._fromPtr = game.Game._fromPtr;
game.Game.StorageView._toPtr = game.Game._toPtr;
game.Game.StorageView._tempHeapPtr = game.Game._tempHeapPtr;
game.Game.StorageView._size = game.Game._size;
game.Game.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Game.StorageView.prototype, {
  State: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  PreviousState: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
});
game.Game._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Game is a POD type, so a JavaScript side copy constructor game.Game._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Game, { cid: { configurable: true, get: function() { delete game.Game.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Game.cid = Module._ut_component_register_cid(/*game.Game*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Game"*/, 0, 0); } } });
Object.defineProperties(game.Game.StorageView, { cid: { configurable: true, get: function() { return game.Game.cid; } } });
game.Game.State = { $ofs:0, $t:"game.GameState", $c:game.Game };
game.Game.PreviousState = { $ofs:4, $t:"game.GameState", $c:game.Game };
game.Hero = function(arg0, arg1, arg2, arg3, arg4) {
  this._ScrollSpeed = (+(arg0===undefined ? 0 : arg0));
  this._AirSpeed = (+(arg1===undefined ? 0 : arg1));
  this._IsSmashing = (arg2 ? true : false);
  this._SmashCooldownTimer = (+(arg3===undefined ? 0 : arg3));
  this._IsSmashingCooldown = (arg4 ? true : false);
};
game.Hero.prototype = Object.create(null);
game.Hero.prototype.constructor = game.Hero;
Object.defineProperties(game.Hero.prototype, {
  ScrollSpeed: {
    get: function() { return this._ScrollSpeed; },
    set: function(v) { this._ScrollSpeed = (+(v===undefined ? 0 : v)); },
  },
  AirSpeed: {
    get: function() { return this._AirSpeed; },
    set: function(v) { this._AirSpeed = (+(v===undefined ? 0 : v)); },
  },
  IsSmashing: {
    get: function() { return this._IsSmashing; },
    set: function(v) { this._IsSmashing = (v ? true : false); },
  },
  SmashCooldownTimer: {
    get: function() { return this._SmashCooldownTimer; },
    set: function(v) { this._SmashCooldownTimer = (+(v===undefined ? 0 : v)); },
  },
  IsSmashingCooldown: {
    get: function() { return this._IsSmashingCooldown; },
    set: function(v) { this._IsSmashingCooldown = (v ? true : false); },
  },
});
game.Hero._size = 20;
game.Hero._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Hero.prototype);
  v._ScrollSpeed = HEAPF32[(ptr+0)>>2];
  v._AirSpeed = HEAPF32[(ptr+4)>>2];
  v._IsSmashing = (HEAP8[ptr+8]?true:false);
  v._SmashCooldownTimer = HEAPF32[(ptr+12)>>2];
  v._IsSmashingCooldown = (HEAP8[ptr+16]?true:false);
  return v;
};
game.Hero._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.ScrollSpeed;
  HEAPF32[(ptr+4)>>2] = v.AirSpeed;
  HEAP8[ptr+8] = (v.IsSmashing)?1:0;
  HEAPF32[(ptr+12)>>2] = v.SmashCooldownTimer;
  HEAP8[ptr+16] = (v.IsSmashingCooldown)?1:0;
};
game.Hero._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.ScrollSpeed;
  HEAPF32[(ptr+4)>>2] = v.AirSpeed;
  HEAP8[ptr+8] = (v.IsSmashing)?1:0;
  HEAPF32[(ptr+12)>>2] = v.SmashCooldownTimer;
  HEAP8[ptr+16] = (v.IsSmashingCooldown)?1:0;
};
game.Hero._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.Hero._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Hero.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Hero.StorageView.prototype = Object.create(null);
game.Hero.StorageView.prototype.constructor = game.Hero.StorageView;
game.Hero._view = game.Hero.StorageView;
game.Hero.StorageView._isSharedComp = game.Hero._isSharedComp = false;
game.Hero.StorageView._fromPtr = game.Hero._fromPtr;
game.Hero.StorageView._toPtr = game.Hero._toPtr;
game.Hero.StorageView._tempHeapPtr = game.Hero._tempHeapPtr;
game.Hero.StorageView._size = game.Hero._size;
game.Hero.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.Hero.StorageView.prototype, {
  ScrollSpeed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  AirSpeed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  IsSmashing: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  SmashCooldownTimer: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  IsSmashingCooldown: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
});
game.Hero._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Hero is a POD type, so a JavaScript side copy constructor game.Hero._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Hero, { cid: { configurable: true, get: function() { delete game.Hero.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Hero.cid = Module._ut_component_register_cid(/*game.Hero*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Hero"*/, 0, 0); } } });
Object.defineProperties(game.Hero.StorageView, { cid: { configurable: true, get: function() { return game.Hero.cid; } } });
game.Hero.ScrollSpeed = { $ofs:0, $t:"float", $c:game.Hero };
game.Hero.AirSpeed = { $ofs:4, $t:"float", $c:game.Hero };
game.Hero.IsSmashing = { $ofs:8, $t:"bool", $c:game.Hero };
game.Hero.SmashCooldownTimer = { $ofs:12, $t:"float", $c:game.Hero };
game.Hero.IsSmashingCooldown = { $ofs:16, $t:"bool", $c:game.Hero };
game.LastPosition = function(arg0, arg1) {
  this._Position = new ut.Math.Vector3(); if ((arg0) !== undefined) { this._Position.copy(arg0); };
  this._Updated = (arg1 ? true : false);
};
game.LastPosition.prototype = Object.create(null);
game.LastPosition.prototype.constructor = game.LastPosition;
Object.defineProperties(game.LastPosition.prototype, {
  Position: {
    get: function() { return this._Position; },
    set: function(v) { this._Position.copy(v); },
  },
  Updated: {
    get: function() { return this._Updated; },
    set: function(v) { this._Updated = (v ? true : false); },
  },
});
game.LastPosition._size = 16;
game.LastPosition._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LastPosition.prototype);
  v._Position = ut._utils.vec3FromHeap(null, ptr+0);
  v._Updated = (HEAP8[ptr+12]?true:false);
  return v;
};
game.LastPosition._toPtr = function(ptr, v) {
  ut._utils.vec3ToHeap(v.Position, ptr+0);
  HEAP8[ptr+12] = (v.Updated)?1:0;
};
game.LastPosition._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec3ToHeap(v.Position, ptr+0);
  HEAP8[ptr+12] = (v.Updated)?1:0;
};
game.LastPosition._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.LastPosition._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LastPosition.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.LastPosition.StorageView.prototype = Object.create(null);
game.LastPosition.StorageView.prototype.constructor = game.LastPosition.StorageView;
game.LastPosition._view = game.LastPosition.StorageView;
game.LastPosition.StorageView._isSharedComp = game.LastPosition._isSharedComp = false;
game.LastPosition.StorageView._fromPtr = game.LastPosition._fromPtr;
game.LastPosition.StorageView._toPtr = game.LastPosition._toPtr;
game.LastPosition.StorageView._tempHeapPtr = game.LastPosition._tempHeapPtr;
game.LastPosition.StorageView._size = game.LastPosition._size;
game.LastPosition.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.LastPosition.StorageView.prototype, {
  Position: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+0); },
  },
  Updated: {
    get: function() { return (HEAP8[this._ptr+12]?true:false); },
    set: function(v) { HEAP8[this._ptr+12] = (v)?1:0; },
  },
});
game.LastPosition._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.LastPosition is a POD type, so a JavaScript side copy constructor game.LastPosition._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.LastPosition, { cid: { configurable: true, get: function() { delete game.LastPosition.cid; var offsetsPtr = 0, offsetsCount = 0; return game.LastPosition.cid = Module._ut_component_register_cid(/*game.LastPosition*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::LastPosition"*/, 0, 0); } } });
Object.defineProperties(game.LastPosition.StorageView, { cid: { configurable: true, get: function() { return game.LastPosition.cid; } } });
game.LastPosition.Position = { $ofs:0, $t:"ut.Math.Vector3", $c:game.LastPosition };
game.LastPosition.Position.z = { $ofs:8, $t:"float", $c:game.LastPosition };
game.LastPosition.Position.y = { $ofs:4, $t:"float", $c:game.LastPosition };
game.LastPosition.Position.x = { $ofs:0, $t:"float", $c:game.LastPosition };
game.LastPosition.Updated = { $ofs:12, $t:"bool", $c:game.LastPosition };
game.MovingWithPlayer = function(arg0, arg1) {
  this._Speed = (+(arg0===undefined ? 0 : arg0));
  this._Deactivated = (arg1 ? true : false);
};
game.MovingWithPlayer.prototype = Object.create(null);
game.MovingWithPlayer.prototype.constructor = game.MovingWithPlayer;
Object.defineProperties(game.MovingWithPlayer.prototype, {
  Speed: {
    get: function() { return this._Speed; },
    set: function(v) { this._Speed = (+(v===undefined ? 0 : v)); },
  },
  Deactivated: {
    get: function() { return this._Deactivated; },
    set: function(v) { this._Deactivated = (v ? true : false); },
  },
});
game.MovingWithPlayer._size = 8;
game.MovingWithPlayer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MovingWithPlayer.prototype);
  v._Speed = HEAPF32[(ptr+0)>>2];
  v._Deactivated = (HEAP8[ptr+4]?true:false);
  return v;
};
game.MovingWithPlayer._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
  HEAP8[ptr+4] = (v.Deactivated)?1:0;
};
game.MovingWithPlayer._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
  HEAP8[ptr+4] = (v.Deactivated)?1:0;
};
game.MovingWithPlayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.MovingWithPlayer._toTempHeapPtr(ptr, v);
  return ptr;
};
game.MovingWithPlayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.MovingWithPlayer.StorageView.prototype = Object.create(null);
game.MovingWithPlayer.StorageView.prototype.constructor = game.MovingWithPlayer.StorageView;
game.MovingWithPlayer._view = game.MovingWithPlayer.StorageView;
game.MovingWithPlayer.StorageView._isSharedComp = game.MovingWithPlayer._isSharedComp = false;
game.MovingWithPlayer.StorageView._fromPtr = game.MovingWithPlayer._fromPtr;
game.MovingWithPlayer.StorageView._toPtr = game.MovingWithPlayer._toPtr;
game.MovingWithPlayer.StorageView._tempHeapPtr = game.MovingWithPlayer._tempHeapPtr;
game.MovingWithPlayer.StorageView._size = game.MovingWithPlayer._size;
game.MovingWithPlayer.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.MovingWithPlayer.StorageView.prototype, {
  Speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Deactivated: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
});
game.MovingWithPlayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MovingWithPlayer is a POD type, so a JavaScript side copy constructor game.MovingWithPlayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.MovingWithPlayer, { cid: { configurable: true, get: function() { delete game.MovingWithPlayer.cid; var offsetsPtr = 0, offsetsCount = 0; return game.MovingWithPlayer.cid = Module._ut_component_register_cid(/*game.MovingWithPlayer*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::MovingWithPlayer"*/, 0, 0); } } });
Object.defineProperties(game.MovingWithPlayer.StorageView, { cid: { configurable: true, get: function() { return game.MovingWithPlayer.cid; } } });
game.MovingWithPlayer.Speed = { $ofs:0, $t:"float", $c:game.MovingWithPlayer };
game.MovingWithPlayer.Deactivated = { $ofs:4, $t:"bool", $c:game.MovingWithPlayer };
game.RepeatingBackground = function(arg0, arg1, arg2, arg3) {
  this._First = (arg0 === undefined ? new ut.Entity : arg0);
  this._Second = (arg1 === undefined ? new ut.Entity : arg1);
  this._Spacing = (+(arg2===undefined ? 0 : arg2));
  this._Offscreen = (+(arg3===undefined ? 0 : arg3));
};
game.RepeatingBackground.prototype = Object.create(null);
game.RepeatingBackground.prototype.constructor = game.RepeatingBackground;
Object.defineProperties(game.RepeatingBackground.prototype, {
  First: {
    get: function() { return this._First; },
    set: function(v) { this._First = (v === undefined ? new ut.Entity : v); },
  },
  Second: {
    get: function() { return this._Second; },
    set: function(v) { this._Second = (v === undefined ? new ut.Entity : v); },
  },
  Spacing: {
    get: function() { return this._Spacing; },
    set: function(v) { this._Spacing = (+(v===undefined ? 0 : v)); },
  },
  Offscreen: {
    get: function() { return this._Offscreen; },
    set: function(v) { this._Offscreen = (+(v===undefined ? 0 : v)); },
  },
});
game.RepeatingBackground._size = 24;
game.RepeatingBackground._fromPtr = function(ptr, v) {
  v = v || Object.create(game.RepeatingBackground.prototype);
  v._First = ut.Entity._fromPtr(ptr+0);
  v._Second = ut.Entity._fromPtr(ptr+8);
  v._Spacing = HEAPF32[(ptr+16)>>2];
  v._Offscreen = HEAPF32[(ptr+20)>>2];
  return v;
};
game.RepeatingBackground._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.First);
  ut.Entity._toPtr(ptr+8, v.Second);
  HEAPF32[(ptr+16)>>2] = v.Spacing;
  HEAPF32[(ptr+20)>>2] = v.Offscreen;
};
game.RepeatingBackground._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.First);
  ut.Entity._toPtr(ptr+8, v.Second);
  HEAPF32[(ptr+16)>>2] = v.Spacing;
  HEAPF32[(ptr+20)>>2] = v.Offscreen;
};
game.RepeatingBackground._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.RepeatingBackground._toTempHeapPtr(ptr, v);
  return ptr;
};
game.RepeatingBackground.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.RepeatingBackground.StorageView.prototype = Object.create(null);
game.RepeatingBackground.StorageView.prototype.constructor = game.RepeatingBackground.StorageView;
game.RepeatingBackground._view = game.RepeatingBackground.StorageView;
game.RepeatingBackground.StorageView._isSharedComp = game.RepeatingBackground._isSharedComp = false;
game.RepeatingBackground.StorageView._fromPtr = game.RepeatingBackground._fromPtr;
game.RepeatingBackground.StorageView._toPtr = game.RepeatingBackground._toPtr;
game.RepeatingBackground.StorageView._tempHeapPtr = game.RepeatingBackground._tempHeapPtr;
game.RepeatingBackground.StorageView._size = game.RepeatingBackground._size;
game.RepeatingBackground.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.RepeatingBackground.StorageView.prototype, {
  First: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  Second: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  Spacing: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  Offscreen: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
});
game.RepeatingBackground._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.RepeatingBackground is a POD type, so a JavaScript side copy constructor game.RepeatingBackground._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.RepeatingBackground, { cid: { configurable: true, get: function() { delete game.RepeatingBackground.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8]); var offsetsCount = 2; return game.RepeatingBackground.cid = Module._ut_component_register_cid(/*game.RepeatingBackground*/ 24, 4, 0, offsetsPtr, offsetsCount, 0/*"game::RepeatingBackground"*/, 0, 0); } } });
Object.defineProperties(game.RepeatingBackground.StorageView, { cid: { configurable: true, get: function() { return game.RepeatingBackground.cid; } } });
game.RepeatingBackground.First = { $ofs:0, $t:"ut.Entity", $c:game.RepeatingBackground };
game.RepeatingBackground.First.index = { $ofs:0, $t:"int32_t", $c:game.RepeatingBackground };
game.RepeatingBackground.First.version = { $ofs:4, $t:"int32_t", $c:game.RepeatingBackground };
game.RepeatingBackground.Second = { $ofs:8, $t:"ut.Entity", $c:game.RepeatingBackground };
game.RepeatingBackground.Second.index = { $ofs:8, $t:"int32_t", $c:game.RepeatingBackground };
game.RepeatingBackground.Second.version = { $ofs:12, $t:"int32_t", $c:game.RepeatingBackground };
game.RepeatingBackground.Spacing = { $ofs:16, $t:"float", $c:game.RepeatingBackground };
game.RepeatingBackground.Offscreen = { $ofs:20, $t:"float", $c:game.RepeatingBackground };
game.ReusableEnemy = function(arg0) {
  this._Offset = (+(arg0===undefined ? 0 : arg0));
};
game.ReusableEnemy.prototype = Object.create(null);
game.ReusableEnemy.prototype.constructor = game.ReusableEnemy;
Object.defineProperties(game.ReusableEnemy.prototype, {
  Offset: {
    get: function() { return this._Offset; },
    set: function(v) { this._Offset = (+(v===undefined ? 0 : v)); },
  },
});
game.ReusableEnemy._size = 4;
game.ReusableEnemy._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ReusableEnemy.prototype);
  v._Offset = HEAPF32[(ptr+0)>>2];
  return v;
};
game.ReusableEnemy._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Offset;
};
game.ReusableEnemy._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Offset;
};
game.ReusableEnemy._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.ReusableEnemy._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ReusableEnemy.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ReusableEnemy.StorageView.prototype = Object.create(null);
game.ReusableEnemy.StorageView.prototype.constructor = game.ReusableEnemy.StorageView;
game.ReusableEnemy._view = game.ReusableEnemy.StorageView;
game.ReusableEnemy.StorageView._isSharedComp = game.ReusableEnemy._isSharedComp = false;
game.ReusableEnemy.StorageView._fromPtr = game.ReusableEnemy._fromPtr;
game.ReusableEnemy.StorageView._toPtr = game.ReusableEnemy._toPtr;
game.ReusableEnemy.StorageView._tempHeapPtr = game.ReusableEnemy._tempHeapPtr;
game.ReusableEnemy.StorageView._size = game.ReusableEnemy._size;
game.ReusableEnemy.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.ReusableEnemy.StorageView.prototype, {
  Offset: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.ReusableEnemy._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ReusableEnemy is a POD type, so a JavaScript side copy constructor game.ReusableEnemy._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ReusableEnemy, { cid: { configurable: true, get: function() { delete game.ReusableEnemy.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ReusableEnemy.cid = Module._ut_component_register_cid(/*game.ReusableEnemy*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ReusableEnemy"*/, 0, 0); } } });
Object.defineProperties(game.ReusableEnemy.StorageView, { cid: { configurable: true, get: function() { return game.ReusableEnemy.cid; } } });
game.ReusableEnemy.Offset = { $ofs:0, $t:"float", $c:game.ReusableEnemy };
game.Rotation2D = function(arg0) {
  this._Rotation = (+(arg0===undefined ? 0 : arg0));
};
game.Rotation2D.prototype = Object.create(null);
game.Rotation2D.prototype.constructor = game.Rotation2D;
Object.defineProperties(game.Rotation2D.prototype, {
  Rotation: {
    get: function() { return this._Rotation; },
    set: function(v) { this._Rotation = (+(v===undefined ? 0 : v)); },
  },
});
game.Rotation2D._size = 4;
game.Rotation2D._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Rotation2D.prototype);
  v._Rotation = HEAPF32[(ptr+0)>>2];
  return v;
};
game.Rotation2D._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Rotation;
};
game.Rotation2D._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Rotation;
};
game.Rotation2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.Rotation2D._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Rotation2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Rotation2D.StorageView.prototype = Object.create(null);
game.Rotation2D.StorageView.prototype.constructor = game.Rotation2D.StorageView;
game.Rotation2D._view = game.Rotation2D.StorageView;
game.Rotation2D.StorageView._isSharedComp = game.Rotation2D._isSharedComp = false;
game.Rotation2D.StorageView._fromPtr = game.Rotation2D._fromPtr;
game.Rotation2D.StorageView._toPtr = game.Rotation2D._toPtr;
game.Rotation2D.StorageView._tempHeapPtr = game.Rotation2D._tempHeapPtr;
game.Rotation2D.StorageView._size = game.Rotation2D._size;
game.Rotation2D.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.Rotation2D.StorageView.prototype, {
  Rotation: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.Rotation2D._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Rotation2D is a POD type, so a JavaScript side copy constructor game.Rotation2D._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Rotation2D, { cid: { configurable: true, get: function() { delete game.Rotation2D.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Rotation2D.cid = Module._ut_component_register_cid(/*game.Rotation2D*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Rotation2D"*/, 0, 0); } } });
Object.defineProperties(game.Rotation2D.StorageView, { cid: { configurable: true, get: function() { return game.Rotation2D.cid; } } });
game.Rotation2D.Rotation = { $ofs:0, $t:"float", $c:game.Rotation2D };
game.SpawnTimer = function(arg0, arg1, arg2, arg3) {
  this._Timer = (+(arg0===undefined ? 0 : arg0));
  this._NextDuration = (+(arg1===undefined ? 0 : arg1));
  this._Modifier = (+(arg2===undefined ? 0 : arg2));
  this._ModifierIncrement = (+(arg3===undefined ? 0 : arg3));
};
game.SpawnTimer.prototype = Object.create(null);
game.SpawnTimer.prototype.constructor = game.SpawnTimer;
Object.defineProperties(game.SpawnTimer.prototype, {
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  NextDuration: {
    get: function() { return this._NextDuration; },
    set: function(v) { this._NextDuration = (+(v===undefined ? 0 : v)); },
  },
  Modifier: {
    get: function() { return this._Modifier; },
    set: function(v) { this._Modifier = (+(v===undefined ? 0 : v)); },
  },
  ModifierIncrement: {
    get: function() { return this._ModifierIncrement; },
    set: function(v) { this._ModifierIncrement = (+(v===undefined ? 0 : v)); },
  },
});
game.SpawnTimer._size = 16;
game.SpawnTimer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SpawnTimer.prototype);
  v._Timer = HEAPF32[(ptr+0)>>2];
  v._NextDuration = HEAPF32[(ptr+4)>>2];
  v._Modifier = HEAPF32[(ptr+8)>>2];
  v._ModifierIncrement = HEAPF32[(ptr+12)>>2];
  return v;
};
game.SpawnTimer._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.NextDuration;
  HEAPF32[(ptr+8)>>2] = v.Modifier;
  HEAPF32[(ptr+12)>>2] = v.ModifierIncrement;
};
game.SpawnTimer._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.NextDuration;
  HEAPF32[(ptr+8)>>2] = v.Modifier;
  HEAPF32[(ptr+12)>>2] = v.ModifierIncrement;
};
game.SpawnTimer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.SpawnTimer._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SpawnTimer.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SpawnTimer.StorageView.prototype = Object.create(null);
game.SpawnTimer.StorageView.prototype.constructor = game.SpawnTimer.StorageView;
game.SpawnTimer._view = game.SpawnTimer.StorageView;
game.SpawnTimer.StorageView._isSharedComp = game.SpawnTimer._isSharedComp = false;
game.SpawnTimer.StorageView._fromPtr = game.SpawnTimer._fromPtr;
game.SpawnTimer.StorageView._toPtr = game.SpawnTimer._toPtr;
game.SpawnTimer.StorageView._tempHeapPtr = game.SpawnTimer._tempHeapPtr;
game.SpawnTimer.StorageView._size = game.SpawnTimer._size;
game.SpawnTimer.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.SpawnTimer.StorageView.prototype, {
  Timer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  NextDuration: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  Modifier: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  ModifierIncrement: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
});
game.SpawnTimer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SpawnTimer is a POD type, so a JavaScript side copy constructor game.SpawnTimer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.SpawnTimer, { cid: { configurable: true, get: function() { delete game.SpawnTimer.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SpawnTimer.cid = Module._ut_component_register_cid(/*game.SpawnTimer*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::SpawnTimer"*/, 0, 0); } } });
Object.defineProperties(game.SpawnTimer.StorageView, { cid: { configurable: true, get: function() { return game.SpawnTimer.cid; } } });
game.SpawnTimer.Timer = { $ofs:0, $t:"float", $c:game.SpawnTimer };
game.SpawnTimer.NextDuration = { $ofs:4, $t:"float", $c:game.SpawnTimer };
game.SpawnTimer.Modifier = { $ofs:8, $t:"float", $c:game.SpawnTimer };
game.SpawnTimer.ModifierIncrement = { $ofs:12, $t:"float", $c:game.SpawnTimer };
game.ThrowState = function(arg0, arg1, arg2, arg3, arg4) {
  this._State = (arg0|0);
  this._Angle = (+(arg1===undefined ? 0 : arg1));
  this._Force = (+(arg2===undefined ? 0 : arg2));
  this._ThrowTimer = (+(arg3===undefined ? 0 : arg3));
  this._CanRethrow = (arg4 ? true : false);
};
game.ThrowState.prototype = Object.create(null);
game.ThrowState.prototype.constructor = game.ThrowState;
Object.defineProperties(game.ThrowState.prototype, {
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
  Angle: {
    get: function() { return this._Angle; },
    set: function(v) { this._Angle = (+(v===undefined ? 0 : v)); },
  },
  Force: {
    get: function() { return this._Force; },
    set: function(v) { this._Force = (+(v===undefined ? 0 : v)); },
  },
  ThrowTimer: {
    get: function() { return this._ThrowTimer; },
    set: function(v) { this._ThrowTimer = (+(v===undefined ? 0 : v)); },
  },
  CanRethrow: {
    get: function() { return this._CanRethrow; },
    set: function(v) { this._CanRethrow = (v ? true : false); },
  },
});
game.ThrowState._size = 20;
game.ThrowState._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ThrowState.prototype);
  v._State = HEAP8[ptr+0];
  v._Angle = HEAPF32[(ptr+4)>>2];
  v._Force = HEAPF32[(ptr+8)>>2];
  v._ThrowTimer = HEAPF32[(ptr+12)>>2];
  v._CanRethrow = (HEAP8[ptr+16]?true:false);
  return v;
};
game.ThrowState._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.State;
  HEAPF32[(ptr+4)>>2] = v.Angle;
  HEAPF32[(ptr+8)>>2] = v.Force;
  HEAPF32[(ptr+12)>>2] = v.ThrowTimer;
  HEAP8[ptr+16] = (v.CanRethrow)?1:0;
};
game.ThrowState._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.State;
  HEAPF32[(ptr+4)>>2] = v.Angle;
  HEAPF32[(ptr+8)>>2] = v.Force;
  HEAPF32[(ptr+12)>>2] = v.ThrowTimer;
  HEAP8[ptr+16] = (v.CanRethrow)?1:0;
};
game.ThrowState._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.ThrowState._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ThrowState.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ThrowState.StorageView.prototype = Object.create(null);
game.ThrowState.StorageView.prototype.constructor = game.ThrowState.StorageView;
game.ThrowState._view = game.ThrowState.StorageView;
game.ThrowState.StorageView._isSharedComp = game.ThrowState._isSharedComp = false;
game.ThrowState.StorageView._fromPtr = game.ThrowState._fromPtr;
game.ThrowState.StorageView._toPtr = game.ThrowState._toPtr;
game.ThrowState.StorageView._tempHeapPtr = game.ThrowState._tempHeapPtr;
game.ThrowState.StorageView._size = game.ThrowState._size;
game.ThrowState.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.ThrowState.StorageView.prototype, {
  State: {
    get: function() { return HEAP8[this._ptr+0]; },
    set: function(v) { HEAP8[this._ptr+0] = v; },
  },
  Angle: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  Force: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  ThrowTimer: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  CanRethrow: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
});
game.ThrowState._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ThrowState is a POD type, so a JavaScript side copy constructor game.ThrowState._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ThrowState, { cid: { configurable: true, get: function() { delete game.ThrowState.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ThrowState.cid = Module._ut_component_register_cid(/*game.ThrowState*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ThrowState"*/, 0, 0); } } });
Object.defineProperties(game.ThrowState.StorageView, { cid: { configurable: true, get: function() { return game.ThrowState.cid; } } });
game.ThrowState.State = { $ofs:0, $t:"int8_t", $c:game.ThrowState };
game.ThrowState.Angle = { $ofs:4, $t:"float", $c:game.ThrowState };
game.ThrowState.Force = { $ofs:8, $t:"float", $c:game.ThrowState };
game.ThrowState.ThrowTimer = { $ofs:12, $t:"float", $c:game.ThrowState };
game.ThrowState.CanRethrow = { $ofs:16, $t:"bool", $c:game.ThrowState };
game.BackAndForth = function(arg0, arg1, arg2, arg3, arg4) {
  this._Min = (+(arg0===undefined ? 0 : arg0));
  this._Max = (+(arg1===undefined ? 0 : arg1));
  this._Forward = (arg2 ? true : false);
  this._Duration = (+(arg3===undefined ? 0 : arg3));
  this._Timer = (+(arg4===undefined ? 0 : arg4));
};
game.BackAndForth.prototype = Object.create(null);
game.BackAndForth.prototype.constructor = game.BackAndForth;
Object.defineProperties(game.BackAndForth.prototype, {
  Min: {
    get: function() { return this._Min; },
    set: function(v) { this._Min = (+(v===undefined ? 0 : v)); },
  },
  Max: {
    get: function() { return this._Max; },
    set: function(v) { this._Max = (+(v===undefined ? 0 : v)); },
  },
  Forward: {
    get: function() { return this._Forward; },
    set: function(v) { this._Forward = (v ? true : false); },
  },
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
});
game.BackAndForth._size = 20;
game.BackAndForth._fromPtr = function(ptr, v) {
  v = v || Object.create(game.BackAndForth.prototype);
  v._Min = HEAPF32[(ptr+0)>>2];
  v._Max = HEAPF32[(ptr+4)>>2];
  v._Forward = (HEAP8[ptr+8]?true:false);
  v._Duration = HEAPF32[(ptr+12)>>2];
  v._Timer = HEAPF32[(ptr+16)>>2];
  return v;
};
game.BackAndForth._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Min;
  HEAPF32[(ptr+4)>>2] = v.Max;
  HEAP8[ptr+8] = (v.Forward)?1:0;
  HEAPF32[(ptr+12)>>2] = v.Duration;
  HEAPF32[(ptr+16)>>2] = v.Timer;
};
game.BackAndForth._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Min;
  HEAPF32[(ptr+4)>>2] = v.Max;
  HEAP8[ptr+8] = (v.Forward)?1:0;
  HEAPF32[(ptr+12)>>2] = v.Duration;
  HEAPF32[(ptr+16)>>2] = v.Timer;
};
game.BackAndForth._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.BackAndForth._toTempHeapPtr(ptr, v);
  return ptr;
};
game.BackAndForth.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.BackAndForth.StorageView.prototype = Object.create(null);
game.BackAndForth.StorageView.prototype.constructor = game.BackAndForth.StorageView;
game.BackAndForth._view = game.BackAndForth.StorageView;
game.BackAndForth.StorageView._isSharedComp = game.BackAndForth._isSharedComp = false;
game.BackAndForth.StorageView._fromPtr = game.BackAndForth._fromPtr;
game.BackAndForth.StorageView._toPtr = game.BackAndForth._toPtr;
game.BackAndForth.StorageView._tempHeapPtr = game.BackAndForth._tempHeapPtr;
game.BackAndForth.StorageView._size = game.BackAndForth._size;
game.BackAndForth.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.BackAndForth.StorageView.prototype, {
  Min: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Max: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  Forward: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  Duration: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
});
game.BackAndForth._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.BackAndForth is a POD type, so a JavaScript side copy constructor game.BackAndForth._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.BackAndForth, { cid: { configurable: true, get: function() { delete game.BackAndForth.cid; var offsetsPtr = 0, offsetsCount = 0; return game.BackAndForth.cid = Module._ut_component_register_cid(/*game.BackAndForth*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::BackAndForth"*/, 0, 0); } } });
Object.defineProperties(game.BackAndForth.StorageView, { cid: { configurable: true, get: function() { return game.BackAndForth.cid; } } });
game.BackAndForth.Min = { $ofs:0, $t:"float", $c:game.BackAndForth };
game.BackAndForth.Max = { $ofs:4, $t:"float", $c:game.BackAndForth };
game.BackAndForth.Forward = { $ofs:8, $t:"bool", $c:game.BackAndForth };
game.BackAndForth.Duration = { $ofs:12, $t:"float", $c:game.BackAndForth };
game.BackAndForth.Timer = { $ofs:16, $t:"float", $c:game.BackAndForth };
game.InGamePanel = function(arg0) {
  this._Das = (arg0|0);
};
game.InGamePanel.prototype = Object.create(null);
game.InGamePanel.prototype.constructor = game.InGamePanel;
Object.defineProperties(game.InGamePanel.prototype, {
  Das: {
    get: function() { return this._Das; },
    set: function(v) { this._Das = (v|0); },
  },
});
game.InGamePanel._size = 2;
game.InGamePanel._fromPtr = function(ptr, v) {
  v = v || Object.create(game.InGamePanel.prototype);
  v._Das = HEAP16[(ptr+0)>>1];
  return v;
};
game.InGamePanel._toPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.Das;
};
game.InGamePanel._toTempHeapPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.Das;
};
game.InGamePanel._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(2);
  if (v) game.InGamePanel._toTempHeapPtr(ptr, v);
  return ptr;
};
game.InGamePanel.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.InGamePanel.StorageView.prototype = Object.create(null);
game.InGamePanel.StorageView.prototype.constructor = game.InGamePanel.StorageView;
game.InGamePanel._view = game.InGamePanel.StorageView;
game.InGamePanel.StorageView._isSharedComp = game.InGamePanel._isSharedComp = false;
game.InGamePanel.StorageView._fromPtr = game.InGamePanel._fromPtr;
game.InGamePanel.StorageView._toPtr = game.InGamePanel._toPtr;
game.InGamePanel.StorageView._tempHeapPtr = game.InGamePanel._tempHeapPtr;
game.InGamePanel.StorageView._size = game.InGamePanel._size;
game.InGamePanel.StorageView.prototype.$advance = function() {
  this._ptr += 2;
};
Object.defineProperties(game.InGamePanel.StorageView.prototype, {
  Das: {
    get: function() { return HEAP16[(this._ptr+0)>>1]; },
    set: function(v) { HEAP16[(this._ptr+0)>>1] = v; },
  },
});
game.InGamePanel._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.InGamePanel is a POD type, so a JavaScript side copy constructor game.InGamePanel._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.InGamePanel, { cid: { configurable: true, get: function() { delete game.InGamePanel.cid; var offsetsPtr = 0, offsetsCount = 0; return game.InGamePanel.cid = Module._ut_component_register_cid(/*game.InGamePanel*/ 2, 2, 0, offsetsPtr, offsetsCount, 0/*"game::InGamePanel"*/, 0, 0); } } });
Object.defineProperties(game.InGamePanel.StorageView, { cid: { configurable: true, get: function() { return game.InGamePanel.cid; } } });
game.InGamePanel.Das = { $ofs:0, $t:"int16_t", $c:game.InGamePanel };
game.PauseMenu = function(arg0) {
  this._Das = (arg0|0);
};
game.PauseMenu.prototype = Object.create(null);
game.PauseMenu.prototype.constructor = game.PauseMenu;
Object.defineProperties(game.PauseMenu.prototype, {
  Das: {
    get: function() { return this._Das; },
    set: function(v) { this._Das = (v|0); },
  },
});
game.PauseMenu._size = 2;
game.PauseMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PauseMenu.prototype);
  v._Das = HEAP16[(ptr+0)>>1];
  return v;
};
game.PauseMenu._toPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.Das;
};
game.PauseMenu._toTempHeapPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.Das;
};
game.PauseMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(2);
  if (v) game.PauseMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PauseMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PauseMenu.StorageView.prototype = Object.create(null);
game.PauseMenu.StorageView.prototype.constructor = game.PauseMenu.StorageView;
game.PauseMenu._view = game.PauseMenu.StorageView;
game.PauseMenu.StorageView._isSharedComp = game.PauseMenu._isSharedComp = false;
game.PauseMenu.StorageView._fromPtr = game.PauseMenu._fromPtr;
game.PauseMenu.StorageView._toPtr = game.PauseMenu._toPtr;
game.PauseMenu.StorageView._tempHeapPtr = game.PauseMenu._tempHeapPtr;
game.PauseMenu.StorageView._size = game.PauseMenu._size;
game.PauseMenu.StorageView.prototype.$advance = function() {
  this._ptr += 2;
};
Object.defineProperties(game.PauseMenu.StorageView.prototype, {
  Das: {
    get: function() { return HEAP16[(this._ptr+0)>>1]; },
    set: function(v) { HEAP16[(this._ptr+0)>>1] = v; },
  },
});
game.PauseMenu._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PauseMenu is a POD type, so a JavaScript side copy constructor game.PauseMenu._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.PauseMenu, { cid: { configurable: true, get: function() { delete game.PauseMenu.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PauseMenu.cid = Module._ut_component_register_cid(/*game.PauseMenu*/ 2, 2, 0, offsetsPtr, offsetsCount, 0/*"game::PauseMenu"*/, 0, 0); } } });
Object.defineProperties(game.PauseMenu.StorageView, { cid: { configurable: true, get: function() { return game.PauseMenu.cid; } } });
game.PauseMenu.Das = { $ofs:0, $t:"int16_t", $c:game.PauseMenu };
game.CustomButton = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
  this._IsPressed = (arg0 ? true : false);
  this._JustDown = (arg1 ? true : false);
  this._JustUp = (arg2 ? true : false);
  this._JustClicked = (arg3 ? true : false);
  this._TimePressed = (+(arg4===undefined ? 0 : arg4));
  this._LastDown = (arg5 ? true : false);
  this._LastOver = (arg6 ? true : false);
  this._DefaultSprite = (arg7 === undefined ? new ut.Entity : arg7);
  this._HoveredSprite = (arg8 === undefined ? new ut.Entity : arg8);
  this._PressedSprite = (arg9 === undefined ? new ut.Entity : arg9);
  this._DisabledSprite = (arg10 === undefined ? new ut.Entity : arg10);
  this._ContentToOffsetOnPress = (arg11 === undefined ? new ut.Entity : arg11);
  this._PressedOffsetY = (+(arg12===undefined ? 0 : arg12));
  this._ContentDefautPositionY = (+(arg13===undefined ? 0 : arg13));
  this._ContentDefautPositionIsSet = (arg14 ? true : false);
  this._IsPointerOver = (arg15 ? true : false);
  this._IsInteractable = (arg16 ? true : false);
  this._LastIsInteractable = (arg17 ? true : false);
};
game.CustomButton.prototype = Object.create(null);
game.CustomButton.prototype.constructor = game.CustomButton;
Object.defineProperties(game.CustomButton.prototype, {
  IsPressed: {
    get: function() { return this._IsPressed; },
    set: function(v) { this._IsPressed = (v ? true : false); },
  },
  JustDown: {
    get: function() { return this._JustDown; },
    set: function(v) { this._JustDown = (v ? true : false); },
  },
  JustUp: {
    get: function() { return this._JustUp; },
    set: function(v) { this._JustUp = (v ? true : false); },
  },
  JustClicked: {
    get: function() { return this._JustClicked; },
    set: function(v) { this._JustClicked = (v ? true : false); },
  },
  TimePressed: {
    get: function() { return this._TimePressed; },
    set: function(v) { this._TimePressed = (+(v===undefined ? 0 : v)); },
  },
  LastDown: {
    get: function() { return this._LastDown; },
    set: function(v) { this._LastDown = (v ? true : false); },
  },
  LastOver: {
    get: function() { return this._LastOver; },
    set: function(v) { this._LastOver = (v ? true : false); },
  },
  DefaultSprite: {
    get: function() { return this._DefaultSprite; },
    set: function(v) { this._DefaultSprite = (v === undefined ? new ut.Entity : v); },
  },
  HoveredSprite: {
    get: function() { return this._HoveredSprite; },
    set: function(v) { this._HoveredSprite = (v === undefined ? new ut.Entity : v); },
  },
  PressedSprite: {
    get: function() { return this._PressedSprite; },
    set: function(v) { this._PressedSprite = (v === undefined ? new ut.Entity : v); },
  },
  DisabledSprite: {
    get: function() { return this._DisabledSprite; },
    set: function(v) { this._DisabledSprite = (v === undefined ? new ut.Entity : v); },
  },
  ContentToOffsetOnPress: {
    get: function() { return this._ContentToOffsetOnPress; },
    set: function(v) { this._ContentToOffsetOnPress = (v === undefined ? new ut.Entity : v); },
  },
  PressedOffsetY: {
    get: function() { return this._PressedOffsetY; },
    set: function(v) { this._PressedOffsetY = (+(v===undefined ? 0 : v)); },
  },
  ContentDefautPositionY: {
    get: function() { return this._ContentDefautPositionY; },
    set: function(v) { this._ContentDefautPositionY = (+(v===undefined ? 0 : v)); },
  },
  ContentDefautPositionIsSet: {
    get: function() { return this._ContentDefautPositionIsSet; },
    set: function(v) { this._ContentDefautPositionIsSet = (v ? true : false); },
  },
  IsPointerOver: {
    get: function() { return this._IsPointerOver; },
    set: function(v) { this._IsPointerOver = (v ? true : false); },
  },
  IsInteractable: {
    get: function() { return this._IsInteractable; },
    set: function(v) { this._IsInteractable = (v ? true : false); },
  },
  LastIsInteractable: {
    get: function() { return this._LastIsInteractable; },
    set: function(v) { this._LastIsInteractable = (v ? true : false); },
  },
});
game.CustomButton._size = 64;
game.CustomButton._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CustomButton.prototype);
  v._IsPressed = (HEAP8[ptr+0]?true:false);
  v._JustDown = (HEAP8[ptr+1]?true:false);
  v._JustUp = (HEAP8[ptr+2]?true:false);
  v._JustClicked = (HEAP8[ptr+3]?true:false);
  v._TimePressed = HEAPF32[(ptr+4)>>2];
  v._LastDown = (HEAP8[ptr+8]?true:false);
  v._LastOver = (HEAP8[ptr+9]?true:false);
  v._DefaultSprite = ut.Entity._fromPtr(ptr+12);
  v._HoveredSprite = ut.Entity._fromPtr(ptr+20);
  v._PressedSprite = ut.Entity._fromPtr(ptr+28);
  v._DisabledSprite = ut.Entity._fromPtr(ptr+36);
  v._ContentToOffsetOnPress = ut.Entity._fromPtr(ptr+44);
  v._PressedOffsetY = HEAPF32[(ptr+52)>>2];
  v._ContentDefautPositionY = HEAPF32[(ptr+56)>>2];
  v._ContentDefautPositionIsSet = (HEAP8[ptr+60]?true:false);
  v._IsPointerOver = (HEAP8[ptr+61]?true:false);
  v._IsInteractable = (HEAP8[ptr+62]?true:false);
  v._LastIsInteractable = (HEAP8[ptr+63]?true:false);
  return v;
};
game.CustomButton._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsPressed)?1:0;
  HEAP8[ptr+1] = (v.JustDown)?1:0;
  HEAP8[ptr+2] = (v.JustUp)?1:0;
  HEAP8[ptr+3] = (v.JustClicked)?1:0;
  HEAPF32[(ptr+4)>>2] = v.TimePressed;
  HEAP8[ptr+8] = (v.LastDown)?1:0;
  HEAP8[ptr+9] = (v.LastOver)?1:0;
  ut.Entity._toPtr(ptr+12, v.DefaultSprite);
  ut.Entity._toPtr(ptr+20, v.HoveredSprite);
  ut.Entity._toPtr(ptr+28, v.PressedSprite);
  ut.Entity._toPtr(ptr+36, v.DisabledSprite);
  ut.Entity._toPtr(ptr+44, v.ContentToOffsetOnPress);
  HEAPF32[(ptr+52)>>2] = v.PressedOffsetY;
  HEAPF32[(ptr+56)>>2] = v.ContentDefautPositionY;
  HEAP8[ptr+60] = (v.ContentDefautPositionIsSet)?1:0;
  HEAP8[ptr+61] = (v.IsPointerOver)?1:0;
  HEAP8[ptr+62] = (v.IsInteractable)?1:0;
  HEAP8[ptr+63] = (v.LastIsInteractable)?1:0;
};
game.CustomButton._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsPressed)?1:0;
  HEAP8[ptr+1] = (v.JustDown)?1:0;
  HEAP8[ptr+2] = (v.JustUp)?1:0;
  HEAP8[ptr+3] = (v.JustClicked)?1:0;
  HEAPF32[(ptr+4)>>2] = v.TimePressed;
  HEAP8[ptr+8] = (v.LastDown)?1:0;
  HEAP8[ptr+9] = (v.LastOver)?1:0;
  ut.Entity._toPtr(ptr+12, v.DefaultSprite);
  ut.Entity._toPtr(ptr+20, v.HoveredSprite);
  ut.Entity._toPtr(ptr+28, v.PressedSprite);
  ut.Entity._toPtr(ptr+36, v.DisabledSprite);
  ut.Entity._toPtr(ptr+44, v.ContentToOffsetOnPress);
  HEAPF32[(ptr+52)>>2] = v.PressedOffsetY;
  HEAPF32[(ptr+56)>>2] = v.ContentDefautPositionY;
  HEAP8[ptr+60] = (v.ContentDefautPositionIsSet)?1:0;
  HEAP8[ptr+61] = (v.IsPointerOver)?1:0;
  HEAP8[ptr+62] = (v.IsInteractable)?1:0;
  HEAP8[ptr+63] = (v.LastIsInteractable)?1:0;
};
game.CustomButton._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(64);
  if (v) game.CustomButton._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CustomButton.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CustomButton.StorageView.prototype = Object.create(null);
game.CustomButton.StorageView.prototype.constructor = game.CustomButton.StorageView;
game.CustomButton._view = game.CustomButton.StorageView;
game.CustomButton.StorageView._isSharedComp = game.CustomButton._isSharedComp = false;
game.CustomButton.StorageView._fromPtr = game.CustomButton._fromPtr;
game.CustomButton.StorageView._toPtr = game.CustomButton._toPtr;
game.CustomButton.StorageView._tempHeapPtr = game.CustomButton._tempHeapPtr;
game.CustomButton.StorageView._size = game.CustomButton._size;
game.CustomButton.StorageView.prototype.$advance = function() {
  this._ptr += 64;
};
Object.defineProperties(game.CustomButton.StorageView.prototype, {
  IsPressed: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  JustDown: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  JustUp: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  JustClicked: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
  TimePressed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  LastDown: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  LastOver: {
    get: function() { return (HEAP8[this._ptr+9]?true:false); },
    set: function(v) { HEAP8[this._ptr+9] = (v)?1:0; },
  },
  DefaultSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+12, v); },
  },
  HoveredSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+20); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+20, v); },
  },
  PressedSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+28); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+28, v); },
  },
  DisabledSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+36); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+36, v); },
  },
  ContentToOffsetOnPress: {
    get: function() { return ut.Entity._fromPtr(this._ptr+44); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+44, v); },
  },
  PressedOffsetY: {
    get: function() { return HEAPF32[(this._ptr+52)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+52)>>2] = v; },
  },
  ContentDefautPositionY: {
    get: function() { return HEAPF32[(this._ptr+56)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+56)>>2] = v; },
  },
  ContentDefautPositionIsSet: {
    get: function() { return (HEAP8[this._ptr+60]?true:false); },
    set: function(v) { HEAP8[this._ptr+60] = (v)?1:0; },
  },
  IsPointerOver: {
    get: function() { return (HEAP8[this._ptr+61]?true:false); },
    set: function(v) { HEAP8[this._ptr+61] = (v)?1:0; },
  },
  IsInteractable: {
    get: function() { return (HEAP8[this._ptr+62]?true:false); },
    set: function(v) { HEAP8[this._ptr+62] = (v)?1:0; },
  },
  LastIsInteractable: {
    get: function() { return (HEAP8[this._ptr+63]?true:false); },
    set: function(v) { HEAP8[this._ptr+63] = (v)?1:0; },
  },
});
game.CustomButton._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CustomButton is a POD type, so a JavaScript side copy constructor game.CustomButton._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.CustomButton, { cid: { configurable: true, get: function() { delete game.CustomButton.cid; var offsetsPtr = ut.tempHeapPtrI32([12,20,28,36,44]); var offsetsCount = 5; return game.CustomButton.cid = Module._ut_component_register_cid(/*game.CustomButton*/ 64, 4, 0, offsetsPtr, offsetsCount, 0/*"game::CustomButton"*/, 0, 0); } } });
Object.defineProperties(game.CustomButton.StorageView, { cid: { configurable: true, get: function() { return game.CustomButton.cid; } } });
game.CustomButton.IsPressed = { $ofs:0, $t:"bool", $c:game.CustomButton };
game.CustomButton.JustDown = { $ofs:1, $t:"bool", $c:game.CustomButton };
game.CustomButton.JustUp = { $ofs:2, $t:"bool", $c:game.CustomButton };
game.CustomButton.JustClicked = { $ofs:3, $t:"bool", $c:game.CustomButton };
game.CustomButton.TimePressed = { $ofs:4, $t:"float", $c:game.CustomButton };
game.CustomButton.LastDown = { $ofs:8, $t:"bool", $c:game.CustomButton };
game.CustomButton.LastOver = { $ofs:9, $t:"bool", $c:game.CustomButton };
game.CustomButton.DefaultSprite = { $ofs:12, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.DefaultSprite.index = { $ofs:12, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.DefaultSprite.version = { $ofs:16, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.HoveredSprite = { $ofs:20, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.HoveredSprite.index = { $ofs:20, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.HoveredSprite.version = { $ofs:24, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.PressedSprite = { $ofs:28, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.PressedSprite.index = { $ofs:28, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.PressedSprite.version = { $ofs:32, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.DisabledSprite = { $ofs:36, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.DisabledSprite.index = { $ofs:36, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.DisabledSprite.version = { $ofs:40, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.ContentToOffsetOnPress = { $ofs:44, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.ContentToOffsetOnPress.index = { $ofs:44, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.ContentToOffsetOnPress.version = { $ofs:48, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.PressedOffsetY = { $ofs:52, $t:"float", $c:game.CustomButton };
game.CustomButton.ContentDefautPositionY = { $ofs:56, $t:"float", $c:game.CustomButton };
game.CustomButton.ContentDefautPositionIsSet = { $ofs:60, $t:"bool", $c:game.CustomButton };
game.CustomButton.IsPointerOver = { $ofs:61, $t:"bool", $c:game.CustomButton };
game.CustomButton.IsInteractable = { $ofs:62, $t:"bool", $c:game.CustomButton };
game.CustomButton.LastIsInteractable = { $ofs:63, $t:"bool", $c:game.CustomButton };
game.DESTROYTHIS = function() {
};
game.DESTROYTHIS.prototype = Object.create(null);
game.DESTROYTHIS.prototype.constructor = game.DESTROYTHIS;
Object.defineProperties(game.DESTROYTHIS.prototype, {
});
game.DESTROYTHIS._size = 1;
game.DESTROYTHIS._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DESTROYTHIS.prototype);
  return v;
};
game.DESTROYTHIS._toPtr = function(ptr, v) {
};
game.DESTROYTHIS._toTempHeapPtr = function(ptr, v) {
};
game.DESTROYTHIS._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.DESTROYTHIS._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DESTROYTHIS.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DESTROYTHIS.StorageView.prototype = Object.create(null);
game.DESTROYTHIS.StorageView.prototype.constructor = game.DESTROYTHIS.StorageView;
game.DESTROYTHIS._view = game.DESTROYTHIS.StorageView;
game.DESTROYTHIS.StorageView._isSharedComp = game.DESTROYTHIS._isSharedComp = false;
game.DESTROYTHIS.StorageView._fromPtr = game.DESTROYTHIS._fromPtr;
game.DESTROYTHIS.StorageView._toPtr = game.DESTROYTHIS._toPtr;
game.DESTROYTHIS.StorageView._tempHeapPtr = game.DESTROYTHIS._tempHeapPtr;
game.DESTROYTHIS.StorageView._size = game.DESTROYTHIS._size;
game.DESTROYTHIS.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.DESTROYTHIS.StorageView.prototype, {
});
game.DESTROYTHIS._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DESTROYTHIS is a POD type, so a JavaScript side copy constructor game.DESTROYTHIS._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.DESTROYTHIS, { cid: { configurable: true, get: function() { delete game.DESTROYTHIS.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DESTROYTHIS.cid = Module._ut_component_register_cid(/*game.DESTROYTHIS*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::DESTROYTHIS"*/, 0, 0); } } });
Object.defineProperties(game.DESTROYTHIS.StorageView, { cid: { configurable: true, get: function() { return game.DESTROYTHIS.cid; } } });
game.Config = function(arg0, arg1, arg2, arg3) {
  this._Gravity = (+(arg0===undefined ? 0 : arg0));
  this._GroundPosition = (+(arg1===undefined ? 0 : arg1));
  this._SmashForce = (+(arg2===undefined ? 0 : arg2));
  this._SmashCooldown = (+(arg3===undefined ? 0 : arg3));
};
game.Config.prototype = Object.create(null);
game.Config.prototype.constructor = game.Config;
Object.defineProperties(game.Config.prototype, {
  Gravity: {
    get: function() { return this._Gravity; },
    set: function(v) { this._Gravity = (+(v===undefined ? 0 : v)); },
  },
  GroundPosition: {
    get: function() { return this._GroundPosition; },
    set: function(v) { this._GroundPosition = (+(v===undefined ? 0 : v)); },
  },
  SmashForce: {
    get: function() { return this._SmashForce; },
    set: function(v) { this._SmashForce = (+(v===undefined ? 0 : v)); },
  },
  SmashCooldown: {
    get: function() { return this._SmashCooldown; },
    set: function(v) { this._SmashCooldown = (+(v===undefined ? 0 : v)); },
  },
});
game.Config._size = 16;
game.Config._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Config.prototype);
  v._Gravity = HEAPF32[(ptr+0)>>2];
  v._GroundPosition = HEAPF32[(ptr+4)>>2];
  v._SmashForce = HEAPF32[(ptr+8)>>2];
  v._SmashCooldown = HEAPF32[(ptr+12)>>2];
  return v;
};
game.Config._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Gravity;
  HEAPF32[(ptr+4)>>2] = v.GroundPosition;
  HEAPF32[(ptr+8)>>2] = v.SmashForce;
  HEAPF32[(ptr+12)>>2] = v.SmashCooldown;
};
game.Config._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Gravity;
  HEAPF32[(ptr+4)>>2] = v.GroundPosition;
  HEAPF32[(ptr+8)>>2] = v.SmashForce;
  HEAPF32[(ptr+12)>>2] = v.SmashCooldown;
};
game.Config._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Config._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Config.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Config.StorageView.prototype = Object.create(null);
game.Config.StorageView.prototype.constructor = game.Config.StorageView;
game.Config._view = game.Config.StorageView;
game.Config.StorageView._isSharedComp = game.Config._isSharedComp = false;
game.Config.StorageView._fromPtr = game.Config._fromPtr;
game.Config.StorageView._toPtr = game.Config._toPtr;
game.Config.StorageView._tempHeapPtr = game.Config._tempHeapPtr;
game.Config.StorageView._size = game.Config._size;
game.Config.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Config.StorageView.prototype, {
  Gravity: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  GroundPosition: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  SmashForce: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  SmashCooldown: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
});
game.Config._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Config is a POD type, so a JavaScript side copy constructor game.Config._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Config, { cid: { configurable: true, get: function() { delete game.Config.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Config.cid = Module._ut_component_register_cid(/*game.Config*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Config"*/, 0, 0); } } });
Object.defineProperties(game.Config.StorageView, { cid: { configurable: true, get: function() { return game.Config.cid; } } });
game.Config.Gravity = { $ofs:0, $t:"float", $c:game.Config };
game.Config.GroundPosition = { $ofs:4, $t:"float", $c:game.Config };
game.Config.SmashForce = { $ofs:8, $t:"float", $c:game.Config };
game.Config.SmashCooldown = { $ofs:12, $t:"float", $c:game.Config };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Default*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Default"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.TransparentFX*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::TransparentFX"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.IgnoreRaycast*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::IgnoreRaycast"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Water*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Water"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.UI*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::UI"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.a = function() {
};
ut.Core2D.layers.a.prototype = Object.create(null);
ut.Core2D.layers.a.prototype.constructor = ut.Core2D.layers.a;
Object.defineProperties(ut.Core2D.layers.a.prototype, {
});
ut.Core2D.layers.a._size = 1;
ut.Core2D.layers.a._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.a.prototype);
  return v;
};
ut.Core2D.layers.a._toPtr = function(ptr, v) {
};
ut.Core2D.layers.a._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.a._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.a._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.a.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.a.StorageView.prototype = Object.create(null);
ut.Core2D.layers.a.StorageView.prototype.constructor = ut.Core2D.layers.a.StorageView;
ut.Core2D.layers.a._view = ut.Core2D.layers.a.StorageView;
ut.Core2D.layers.a.StorageView._isSharedComp = ut.Core2D.layers.a._isSharedComp = false;
ut.Core2D.layers.a.StorageView._fromPtr = ut.Core2D.layers.a._fromPtr;
ut.Core2D.layers.a.StorageView._toPtr = ut.Core2D.layers.a._toPtr;
ut.Core2D.layers.a.StorageView._tempHeapPtr = ut.Core2D.layers.a._tempHeapPtr;
ut.Core2D.layers.a.StorageView._size = ut.Core2D.layers.a._size;
ut.Core2D.layers.a.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.a.StorageView.prototype, {
});
ut.Core2D.layers.a._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.a is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.a._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.a, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.a.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.a.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.a*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::a"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.a.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.a.cid; } } });
ut.Core2D.layers.b = function() {
};
ut.Core2D.layers.b.prototype = Object.create(null);
ut.Core2D.layers.b.prototype.constructor = ut.Core2D.layers.b;
Object.defineProperties(ut.Core2D.layers.b.prototype, {
});
ut.Core2D.layers.b._size = 1;
ut.Core2D.layers.b._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.b.prototype);
  return v;
};
ut.Core2D.layers.b._toPtr = function(ptr, v) {
};
ut.Core2D.layers.b._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.b._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.b._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.b.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.b.StorageView.prototype = Object.create(null);
ut.Core2D.layers.b.StorageView.prototype.constructor = ut.Core2D.layers.b.StorageView;
ut.Core2D.layers.b._view = ut.Core2D.layers.b.StorageView;
ut.Core2D.layers.b.StorageView._isSharedComp = ut.Core2D.layers.b._isSharedComp = false;
ut.Core2D.layers.b.StorageView._fromPtr = ut.Core2D.layers.b._fromPtr;
ut.Core2D.layers.b.StorageView._toPtr = ut.Core2D.layers.b._toPtr;
ut.Core2D.layers.b.StorageView._tempHeapPtr = ut.Core2D.layers.b._tempHeapPtr;
ut.Core2D.layers.b.StorageView._size = ut.Core2D.layers.b._size;
ut.Core2D.layers.b.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.b.StorageView.prototype, {
});
ut.Core2D.layers.b._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.b is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.b._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.b, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.b.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.b.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.b*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::b"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.b.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.b.cid; } } });
ut.Core2D.layers.c = function() {
};
ut.Core2D.layers.c.prototype = Object.create(null);
ut.Core2D.layers.c.prototype.constructor = ut.Core2D.layers.c;
Object.defineProperties(ut.Core2D.layers.c.prototype, {
});
ut.Core2D.layers.c._size = 1;
ut.Core2D.layers.c._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.c.prototype);
  return v;
};
ut.Core2D.layers.c._toPtr = function(ptr, v) {
};
ut.Core2D.layers.c._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.c._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.c._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.c.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.c.StorageView.prototype = Object.create(null);
ut.Core2D.layers.c.StorageView.prototype.constructor = ut.Core2D.layers.c.StorageView;
ut.Core2D.layers.c._view = ut.Core2D.layers.c.StorageView;
ut.Core2D.layers.c.StorageView._isSharedComp = ut.Core2D.layers.c._isSharedComp = false;
ut.Core2D.layers.c.StorageView._fromPtr = ut.Core2D.layers.c._fromPtr;
ut.Core2D.layers.c.StorageView._toPtr = ut.Core2D.layers.c._toPtr;
ut.Core2D.layers.c.StorageView._tempHeapPtr = ut.Core2D.layers.c._tempHeapPtr;
ut.Core2D.layers.c.StorageView._size = ut.Core2D.layers.c._size;
ut.Core2D.layers.c.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.c.StorageView.prototype, {
});
ut.Core2D.layers.c._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.c is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.c._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.c, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.c.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.c.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.c*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::c"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.c.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.c.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceAnimationClip*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceAnimationClip"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceAudioClip*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceAudioClip"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceSprite*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceSprite"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceSpriteAtlas*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceSpriteAtlas"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTexture2D*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTexture2D"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTileBase*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTileBase"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTMP_FontAsset*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTMP_FontAsset"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.CameraCullingMask*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::CameraCullingMask"*/, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.EntityLayer*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::EntityLayer"*/, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.DestroyZombiesSystemJS = ut.System.define({
  name: "game.DestroyZombiesSystemJS"
});
game.SpawnZombiesSystemJS = ut.System.define({
  name: "game.SpawnZombiesSystemJS"
});
game.UIDataGetSystemJS = ut.System.define({
  name: "game.UIDataGetSystemJS"
});
game.CameraSystemJS = ut.System.define({
  name: "game.CameraSystemJS"
});
game.MovingWithPlayerSystemJS = ut.System.define({
  name: "game.MovingWithPlayerSystemJS"
});
game.RepeatingBackgroundSystemJS = ut.System.define({
  name: "game.RepeatingBackgroundSystemJS"
});
game.HeroSystemJS = ut.System.define({
  name: "game.HeroSystemJS"
});
game.BlinkEnemyystemJS = ut.System.define({
  name: "game.BlinkEnemyystemJS"
});
game.HitEnemySystemJS = ut.System.define({
  name: "game.HitEnemySystemJS"
});
game.UpdateCustomButtonSystemJS = ut.System.define({
  name: "game.UpdateCustomButtonSystemJS"
});



