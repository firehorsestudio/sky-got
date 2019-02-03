/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var game = game || {};
game.GameState = {
  MENU: 10,
  THROW: 20,
  PLAYING: 30,
  PAUSED: 40,
  END: 50
};
game.GameState._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.GameState', 4, [
    {name: 'MENU', offset: 10, type: enumType},
    {name: 'THROW', offset: 20, type: enumType},
    {name: 'PLAYING', offset: 30, type: enumType},
    {name: 'PAUSED', offset: 40, type: enumType},
    {name: 'END', offset: 50, type: enumType}
  ]);
})();
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
entities.game.Bootstrap.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Bootstrap.Component', 1, []);
})();
Object.defineProperties(entities.game.Bootstrap.Component, { cid: { configurable: true, get: function() { delete entities.game.Bootstrap.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bootstrap.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Bootstrap.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
entities.game.Session.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Session.Component', 1, []);
})();
Object.defineProperties(entities.game.Session.Component, { cid: { configurable: true, get: function() { delete entities.game.Session.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Session.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Session.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
entities.game.SettingsMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.SettingsMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.SettingsMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.SettingsMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.SettingsMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.SettingsMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.SettingsMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.SettingsMenu.Component.cid; } } });
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
entities.game.InGameTopMenuGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.InGameTopMenuGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.InGameTopMenuGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.InGameTopMenuGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.InGameTopMenuGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.InGameTopMenuGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
entities.game.MenuInitialGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.MenuInitialGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.MenuInitialGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.MenuInitialGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.MenuInitialGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.MenuInitialGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
entities.game.PauseMenuGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.PauseMenuGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.PauseMenuGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.PauseMenuGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.PauseMenuGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.PauseMenuGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.PauseMenuGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.PauseMenuGroup.Component.cid; } } });
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
game.SettingsMenu._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SettingsMenu', 48, [
    {name: 'ButtonOK', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonCredits', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonResetProgress', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonLanguage', offset: 24, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonRenderMode', offset: 32, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelRenderMode', offset: 40, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.SettingsMenu, { cid: { configurable: true, get: function() { delete game.SettingsMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24,32,40]); var offsetsCount = 6; return game.SettingsMenu.cid = Module._ut_component_register_cid_with_type(game.SettingsMenu._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.BoxCollider = function(arg0, arg1, arg2, arg3) {
  this._x = (+(arg0===undefined ? 0 : arg0));
  this._y = (+(arg1===undefined ? 0 : arg1));
  this._width = (+(arg2===undefined ? 0 : arg2));
  this._height = (+(arg3===undefined ? 0 : arg3));
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
});
game.BoxCollider._size = 16;
game.BoxCollider._fromPtr = function(ptr, v) {
  v = v || Object.create(game.BoxCollider.prototype);
  v._x = HEAPF32[(ptr+0)>>2];
  v._y = HEAPF32[(ptr+4)>>2];
  v._width = HEAPF32[(ptr+8)>>2];
  v._height = HEAPF32[(ptr+12)>>2];
  return v;
};
game.BoxCollider._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.x;
  HEAPF32[(ptr+4)>>2] = v.y;
  HEAPF32[(ptr+8)>>2] = v.width;
  HEAPF32[(ptr+12)>>2] = v.height;
};
game.BoxCollider._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.x;
  HEAPF32[(ptr+4)>>2] = v.y;
  HEAPF32[(ptr+8)>>2] = v.width;
  HEAPF32[(ptr+12)>>2] = v.height;
};
game.BoxCollider._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
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
  this._ptr += 16;
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
});
game.BoxCollider._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.BoxCollider is a POD type, so a JavaScript side copy constructor game.BoxCollider._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.BoxCollider._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.BoxCollider', 16, [
    {name: 'x', offset: 0, type: ut.meta.getType('float')},
    {name: 'y', offset: 4, type: ut.meta.getType('float')},
    {name: 'width', offset: 8, type: ut.meta.getType('float')},
    {name: 'height', offset: 12, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.BoxCollider, { cid: { configurable: true, get: function() { delete game.BoxCollider.cid; var offsetsPtr = 0, offsetsCount = 0; return game.BoxCollider.cid = Module._ut_component_register_cid_with_type(game.BoxCollider._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.BoxCollider.StorageView, { cid: { configurable: true, get: function() { return game.BoxCollider.cid; } } });
game.BoxCollider.x = { $ofs:0, $t:"float", $c:game.BoxCollider };
game.BoxCollider.y = { $ofs:4, $t:"float", $c:game.BoxCollider };
game.BoxCollider.width = { $ofs:8, $t:"float", $c:game.BoxCollider };
game.BoxCollider.height = { $ofs:12, $t:"float", $c:game.BoxCollider };
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
game.Enemy._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Enemy', 1, []);
})();
Object.defineProperties(game.Enemy, { cid: { configurable: true, get: function() { delete game.Enemy.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Enemy.cid = Module._ut_component_register_cid_with_type(game.Enemy._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.Flying._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Flying', 20, [
    {name: 'ScrollSpeed', offset: 0, type: ut.meta.getType('float')},
    {name: 'AirSpeed', offset: 4, type: ut.meta.getType('float')},
    {name: 'PreviousPosition', offset: 8, type: ut.meta.getType('ut.Math.Vector3')}
  ]);
})();
Object.defineProperties(game.Flying, { cid: { configurable: true, get: function() { delete game.Flying.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Flying.cid = Module._ut_component_register_cid_with_type(game.Flying._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Flying.StorageView, { cid: { configurable: true, get: function() { return game.Flying.cid; } } });
game.Flying.ScrollSpeed = { $ofs:0, $t:"float", $c:game.Flying };
game.Flying.AirSpeed = { $ofs:4, $t:"float", $c:game.Flying };
game.Flying.PreviousPosition = { $ofs:8, $t:"ut.Math.Vector3", $c:game.Flying };
game.Flying.PreviousPosition.z = { $ofs:16, $t:"float", $c:game.Flying };
game.Flying.PreviousPosition.y = { $ofs:12, $t:"float", $c:game.Flying };
game.Flying.PreviousPosition.x = { $ofs:8, $t:"float", $c:game.Flying };
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
game.Game._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Game', 8, [
    {name: 'State', offset: 0, type: ut.meta.getType('game.GameState')},
    {name: 'PreviousState', offset: 4, type: ut.meta.getType('game.GameState')}
  ]);
})();
Object.defineProperties(game.Game, { cid: { configurable: true, get: function() { delete game.Game.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Game.cid = Module._ut_component_register_cid_with_type(game.Game._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.Hero._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Hero', 20, [
    {name: 'ScrollSpeed', offset: 0, type: ut.meta.getType('float')},
    {name: 'AirSpeed', offset: 4, type: ut.meta.getType('float')},
    {name: 'IsSmashing', offset: 8, type: ut.meta.getType('bool')},
    {name: 'SmashCooldownTimer', offset: 12, type: ut.meta.getType('float')},
    {name: 'IsSmashingCooldown', offset: 16, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.Hero, { cid: { configurable: true, get: function() { delete game.Hero.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Hero.cid = Module._ut_component_register_cid_with_type(game.Hero._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.LastPosition._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.LastPosition', 16, [
    {name: 'Position', offset: 0, type: ut.meta.getType('ut.Math.Vector3')},
    {name: 'Updated', offset: 12, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.LastPosition, { cid: { configurable: true, get: function() { delete game.LastPosition.cid; var offsetsPtr = 0, offsetsCount = 0; return game.LastPosition.cid = Module._ut_component_register_cid_with_type(game.LastPosition._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.LastPosition.StorageView, { cid: { configurable: true, get: function() { return game.LastPosition.cid; } } });
game.LastPosition.Position = { $ofs:0, $t:"ut.Math.Vector3", $c:game.LastPosition };
game.LastPosition.Position.z = { $ofs:8, $t:"float", $c:game.LastPosition };
game.LastPosition.Position.y = { $ofs:4, $t:"float", $c:game.LastPosition };
game.LastPosition.Position.x = { $ofs:0, $t:"float", $c:game.LastPosition };
game.LastPosition.Updated = { $ofs:12, $t:"bool", $c:game.LastPosition };
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
game.InGamePanel._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.InGamePanel', 2, [
    {name: 'Das', offset: 0, type: ut.meta.getType('int16')}
  ]);
})();
Object.defineProperties(game.InGamePanel, { cid: { configurable: true, get: function() { delete game.InGamePanel.cid; var offsetsPtr = 0, offsetsCount = 0; return game.InGamePanel.cid = Module._ut_component_register_cid_with_type(game.InGamePanel._typeDesc, 2, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.PauseMenu._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PauseMenu', 2, [
    {name: 'Das', offset: 0, type: ut.meta.getType('int16')}
  ]);
})();
Object.defineProperties(game.PauseMenu, { cid: { configurable: true, get: function() { delete game.PauseMenu.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PauseMenu.cid = Module._ut_component_register_cid_with_type(game.PauseMenu._typeDesc, 2, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.CustomButton._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CustomButton', 64, [
    {name: 'IsPressed', offset: 0, type: ut.meta.getType('bool')},
    {name: 'JustDown', offset: 1, type: ut.meta.getType('bool')},
    {name: 'JustUp', offset: 2, type: ut.meta.getType('bool')},
    {name: 'JustClicked', offset: 3, type: ut.meta.getType('bool')},
    {name: 'TimePressed', offset: 4, type: ut.meta.getType('float')},
    {name: 'LastDown', offset: 8, type: ut.meta.getType('bool')},
    {name: 'LastOver', offset: 9, type: ut.meta.getType('bool')},
    {name: 'DefaultSprite', offset: 12, type: ut.meta.getType('ut.Entity')},
    {name: 'HoveredSprite', offset: 20, type: ut.meta.getType('ut.Entity')},
    {name: 'PressedSprite', offset: 28, type: ut.meta.getType('ut.Entity')},
    {name: 'DisabledSprite', offset: 36, type: ut.meta.getType('ut.Entity')},
    {name: 'ContentToOffsetOnPress', offset: 44, type: ut.meta.getType('ut.Entity')},
    {name: 'PressedOffsetY', offset: 52, type: ut.meta.getType('float')},
    {name: 'ContentDefautPositionY', offset: 56, type: ut.meta.getType('float')},
    {name: 'ContentDefautPositionIsSet', offset: 60, type: ut.meta.getType('bool')},
    {name: 'IsPointerOver', offset: 61, type: ut.meta.getType('bool')},
    {name: 'IsInteractable', offset: 62, type: ut.meta.getType('bool')},
    {name: 'LastIsInteractable', offset: 63, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.CustomButton, { cid: { configurable: true, get: function() { delete game.CustomButton.cid; var offsetsPtr = ut.tempHeapPtrI32([12,20,28,36,44]); var offsetsCount = 5; return game.CustomButton.cid = Module._ut_component_register_cid_with_type(game.CustomButton._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.RepeatingBackground._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.RepeatingBackground', 24, [
    {name: 'First', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'Second', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'Spacing', offset: 16, type: ut.meta.getType('float')},
    {name: 'Offscreen', offset: 20, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.RepeatingBackground, { cid: { configurable: true, get: function() { delete game.RepeatingBackground.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8]); var offsetsCount = 2; return game.RepeatingBackground.cid = Module._ut_component_register_cid_with_type(game.RepeatingBackground._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.RepeatingBackground.StorageView, { cid: { configurable: true, get: function() { return game.RepeatingBackground.cid; } } });
game.RepeatingBackground.First = { $ofs:0, $t:"ut.Entity", $c:game.RepeatingBackground };
game.RepeatingBackground.First.index = { $ofs:0, $t:"int32_t", $c:game.RepeatingBackground };
game.RepeatingBackground.First.version = { $ofs:4, $t:"int32_t", $c:game.RepeatingBackground };
game.RepeatingBackground.Second = { $ofs:8, $t:"ut.Entity", $c:game.RepeatingBackground };
game.RepeatingBackground.Second.index = { $ofs:8, $t:"int32_t", $c:game.RepeatingBackground };
game.RepeatingBackground.Second.version = { $ofs:12, $t:"int32_t", $c:game.RepeatingBackground };
game.RepeatingBackground.Spacing = { $ofs:16, $t:"float", $c:game.RepeatingBackground };
game.RepeatingBackground.Offscreen = { $ofs:20, $t:"float", $c:game.RepeatingBackground };
game.MovingWithPlayer = function(arg0) {
  this._Speed = (+(arg0===undefined ? 0 : arg0));
};
game.MovingWithPlayer.prototype = Object.create(null);
game.MovingWithPlayer.prototype.constructor = game.MovingWithPlayer;
Object.defineProperties(game.MovingWithPlayer.prototype, {
  Speed: {
    get: function() { return this._Speed; },
    set: function(v) { this._Speed = (+(v===undefined ? 0 : v)); },
  },
});
game.MovingWithPlayer._size = 4;
game.MovingWithPlayer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MovingWithPlayer.prototype);
  v._Speed = HEAPF32[(ptr+0)>>2];
  return v;
};
game.MovingWithPlayer._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
};
game.MovingWithPlayer._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
};
game.MovingWithPlayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
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
  this._ptr += 4;
};
Object.defineProperties(game.MovingWithPlayer.StorageView.prototype, {
  Speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.MovingWithPlayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MovingWithPlayer is a POD type, so a JavaScript side copy constructor game.MovingWithPlayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.MovingWithPlayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.MovingWithPlayer', 4, [
    {name: 'Speed', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.MovingWithPlayer, { cid: { configurable: true, get: function() { delete game.MovingWithPlayer.cid; var offsetsPtr = 0, offsetsCount = 0; return game.MovingWithPlayer.cid = Module._ut_component_register_cid_with_type(game.MovingWithPlayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.MovingWithPlayer.StorageView, { cid: { configurable: true, get: function() { return game.MovingWithPlayer.cid; } } });
game.MovingWithPlayer.Speed = { $ofs:0, $t:"float", $c:game.MovingWithPlayer };
game.DwarfSprites = function(arg0, arg1, arg2, arg3, arg4) {
  this._Idle = (arg0 === undefined ? new ut.Entity : arg0);
  this._Fly1 = (arg1 === undefined ? new ut.Entity : arg1);
  this._Fly2 = (arg2 === undefined ? new ut.Entity : arg2);
  this._Kick1 = (arg3 === undefined ? new ut.Entity : arg3);
  this._Kick2 = (arg4 === undefined ? new ut.Entity : arg4);
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
});
game.DwarfSprites._size = 40;
game.DwarfSprites._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DwarfSprites.prototype);
  v._Idle = ut.Entity._fromPtr(ptr+0);
  v._Fly1 = ut.Entity._fromPtr(ptr+8);
  v._Fly2 = ut.Entity._fromPtr(ptr+16);
  v._Kick1 = ut.Entity._fromPtr(ptr+24);
  v._Kick2 = ut.Entity._fromPtr(ptr+32);
  return v;
};
game.DwarfSprites._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Idle);
  ut.Entity._toPtr(ptr+8, v.Fly1);
  ut.Entity._toPtr(ptr+16, v.Fly2);
  ut.Entity._toPtr(ptr+24, v.Kick1);
  ut.Entity._toPtr(ptr+32, v.Kick2);
};
game.DwarfSprites._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Idle);
  ut.Entity._toPtr(ptr+8, v.Fly1);
  ut.Entity._toPtr(ptr+16, v.Fly2);
  ut.Entity._toPtr(ptr+24, v.Kick1);
  ut.Entity._toPtr(ptr+32, v.Kick2);
};
game.DwarfSprites._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(40);
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
  this._ptr += 40;
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
});
game.DwarfSprites._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DwarfSprites is a POD type, so a JavaScript side copy constructor game.DwarfSprites._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.DwarfSprites._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DwarfSprites', 40, [
    {name: 'Idle', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'Fly1', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'Fly2', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'Kick1', offset: 24, type: ut.meta.getType('ut.Entity')},
    {name: 'Kick2', offset: 32, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.DwarfSprites, { cid: { configurable: true, get: function() { delete game.DwarfSprites.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24,32]); var offsetsCount = 5; return game.DwarfSprites.cid = Module._ut_component_register_cid_with_type(game.DwarfSprites._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.Config._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Config', 16, [
    {name: 'Gravity', offset: 0, type: ut.meta.getType('float')},
    {name: 'GroundPosition', offset: 4, type: ut.meta.getType('float')},
    {name: 'SmashForce', offset: 8, type: ut.meta.getType('float')},
    {name: 'SmashCooldown', offset: 12, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Config, { cid: { configurable: true, get: function() { delete game.Config.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Config.cid = Module._ut_component_register_cid_with_type(game.Config._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.a._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.a', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.a, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.a.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.a.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.a._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.b._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.b', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.b, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.b.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.b.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.b._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.c._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.c', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.c, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.c.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.c.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.c._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTileBase._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTileBase', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTileBase._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
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
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.UIDataGetSystemJS = ut.System.define({
  name: "game.UIDataGetSystemJS"
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
game.HitEnemySystemJS = ut.System.define({
  name: "game.HitEnemySystemJS"
});
game.UpdateCustomButtonSystemJS = ut.System.define({
  name: "game.UpdateCustomButtonSystemJS"
});



