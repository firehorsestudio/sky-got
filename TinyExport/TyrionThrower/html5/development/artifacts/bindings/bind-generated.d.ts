declare namespace game {
enum GameState {
  MENU = 10,
  THROW = 20,
  PLAYING = 30,
  PAUSED = 40,
  END = 50,
}
}
declare namespace entities.game.Bootstrap {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.SettingsMenu {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace game {

class Game extends ut.Component {
  constructor(State?: GameState, PreviousState?: GameState);
  State: GameState;
  PreviousState: GameState;
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Game): Game;
  static _toPtr(p: number, v: Game): void;
  static _tempHeapPtr(v: Game): number;
  static _dtorFn(v: Game): void;
}

}
declare namespace game {

class Hero extends ut.Component {
  constructor(ScrollSpeed?: number, AirSpeed?: number, Launched?: boolean);
  ScrollSpeed: number;
  AirSpeed: number;
  Launched: boolean;
  static readonly ScrollSpeed: ComponentFieldDesc;
  static readonly AirSpeed: ComponentFieldDesc;
  static readonly Launched: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Hero): Hero;
  static _toPtr(p: number, v: Hero): void;
  static _tempHeapPtr(v: Hero): number;
  static _dtorFn(v: Hero): void;
}

}
declare namespace game {

class SettingsMenu extends ut.Component {
  constructor(ButtonOK?: Entity, ButtonCredits?: Entity, ButtonResetProgress?: Entity, ButtonLanguage?: Entity, ButtonRenderMode?: Entity, LabelRenderMode?: Entity);
  ButtonOK: Entity;
  ButtonCredits: Entity;
  ButtonResetProgress: Entity;
  ButtonLanguage: Entity;
  ButtonRenderMode: Entity;
  LabelRenderMode: Entity;
  static readonly ButtonOK: EntityComponentFieldDesc;
  static readonly ButtonCredits: EntityComponentFieldDesc;
  static readonly ButtonResetProgress: EntityComponentFieldDesc;
  static readonly ButtonLanguage: EntityComponentFieldDesc;
  static readonly ButtonRenderMode: EntityComponentFieldDesc;
  static readonly LabelRenderMode: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SettingsMenu): SettingsMenu;
  static _toPtr(p: number, v: SettingsMenu): void;
  static _tempHeapPtr(v: SettingsMenu): number;
  static _dtorFn(v: SettingsMenu): void;
}

}
declare namespace game {

class CustomButton extends ut.Component {
  constructor(IsPressed?: boolean, JustDown?: boolean, JustUp?: boolean, JustClicked?: boolean, TimePressed?: number, LastDown?: boolean, LastOver?: boolean, DefaultSprite?: Entity, HoveredSprite?: Entity, PressedSprite?: Entity, DisabledSprite?: Entity, ContentToOffsetOnPress?: Entity, PressedOffsetY?: number, ContentDefautPositionY?: number, ContentDefautPositionIsSet?: boolean, IsPointerOver?: boolean, IsInteractable?: boolean, LastIsInteractable?: boolean);
  IsPressed: boolean;
  JustDown: boolean;
  JustUp: boolean;
  JustClicked: boolean;
  TimePressed: number;
  LastDown: boolean;
  LastOver: boolean;
  DefaultSprite: Entity;
  HoveredSprite: Entity;
  PressedSprite: Entity;
  DisabledSprite: Entity;
  ContentToOffsetOnPress: Entity;
  PressedOffsetY: number;
  ContentDefautPositionY: number;
  ContentDefautPositionIsSet: boolean;
  IsPointerOver: boolean;
  IsInteractable: boolean;
  LastIsInteractable: boolean;
  static readonly IsPressed: ComponentFieldDesc;
  static readonly JustDown: ComponentFieldDesc;
  static readonly JustUp: ComponentFieldDesc;
  static readonly JustClicked: ComponentFieldDesc;
  static readonly TimePressed: ComponentFieldDesc;
  static readonly LastDown: ComponentFieldDesc;
  static readonly LastOver: ComponentFieldDesc;
  static readonly DefaultSprite: EntityComponentFieldDesc;
  static readonly HoveredSprite: EntityComponentFieldDesc;
  static readonly PressedSprite: EntityComponentFieldDesc;
  static readonly DisabledSprite: EntityComponentFieldDesc;
  static readonly ContentToOffsetOnPress: EntityComponentFieldDesc;
  static readonly PressedOffsetY: ComponentFieldDesc;
  static readonly ContentDefautPositionY: ComponentFieldDesc;
  static readonly ContentDefautPositionIsSet: ComponentFieldDesc;
  static readonly IsPointerOver: ComponentFieldDesc;
  static readonly IsInteractable: ComponentFieldDesc;
  static readonly LastIsInteractable: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CustomButton): CustomButton;
  static _toPtr(p: number, v: CustomButton): void;
  static _tempHeapPtr(v: CustomButton): number;
  static _dtorFn(v: CustomButton): void;
}

}
declare namespace game {

class Config extends ut.Component {
  constructor(Gravity?: number, GroundPosition?: number, Sprite?: Entity);
  Gravity: number;
  GroundPosition: number;
  Sprite: Entity;
  static readonly Gravity: ComponentFieldDesc;
  static readonly GroundPosition: ComponentFieldDesc;
  static readonly Sprite: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Config): Config;
  static _toPtr(p: number, v: Config): void;
  static _tempHeapPtr(v: Config): number;
  static _dtorFn(v: Config): void;
}

}
declare namespace ut.Core2D.layers {

class Default extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Default): Default;
  static _toPtr(p: number, v: Default): void;
  static _tempHeapPtr(v: Default): number;
  static _dtorFn(v: Default): void;
}

}
declare namespace ut.Core2D.layers {

class TransparentFX extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TransparentFX): TransparentFX;
  static _toPtr(p: number, v: TransparentFX): void;
  static _tempHeapPtr(v: TransparentFX): number;
  static _dtorFn(v: TransparentFX): void;
}

}
declare namespace ut.Core2D.layers {

class IgnoreRaycast extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: IgnoreRaycast): IgnoreRaycast;
  static _toPtr(p: number, v: IgnoreRaycast): void;
  static _tempHeapPtr(v: IgnoreRaycast): number;
  static _dtorFn(v: IgnoreRaycast): void;
}

}
declare namespace ut.Core2D.layers {

class Water extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Water): Water;
  static _toPtr(p: number, v: Water): void;
  static _tempHeapPtr(v: Water): number;
  static _dtorFn(v: Water): void;
}

}
declare namespace ut.Core2D.layers {

class UI extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: UI): UI;
  static _toPtr(p: number, v: UI): void;
  static _tempHeapPtr(v: UI): number;
  static _dtorFn(v: UI): void;
}

}
declare namespace ut.Core2D.layers {

class a extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: a): a;
  static _toPtr(p: number, v: a): void;
  static _tempHeapPtr(v: a): number;
  static _dtorFn(v: a): void;
}

}
declare namespace ut.Core2D.layers {

class b extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: b): b;
  static _toPtr(p: number, v: b): void;
  static _tempHeapPtr(v: b): number;
  static _dtorFn(v: b): void;
}

}
declare namespace ut.Core2D.layers {

class c extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: c): c;
  static _toPtr(p: number, v: c): void;
  static _tempHeapPtr(v: c): number;
  static _dtorFn(v: c): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAnimationClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
  static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
  static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
  static _dtorFn(v: AssetReferenceAnimationClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAudioClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
  static _toPtr(p: number, v: AssetReferenceAudioClip): void;
  static _tempHeapPtr(v: AssetReferenceAudioClip): number;
  static _dtorFn(v: AssetReferenceAudioClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSprite extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
  static _toPtr(p: number, v: AssetReferenceSprite): void;
  static _tempHeapPtr(v: AssetReferenceSprite): number;
  static _dtorFn(v: AssetReferenceSprite): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSpriteAtlas extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
  static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
  static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
  static _dtorFn(v: AssetReferenceSpriteAtlas): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTexture2D extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
  static _toPtr(p: number, v: AssetReferenceTexture2D): void;
  static _tempHeapPtr(v: AssetReferenceTexture2D): number;
  static _dtorFn(v: AssetReferenceTexture2D): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTileBase extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
  static _toPtr(p: number, v: AssetReferenceTileBase): void;
  static _tempHeapPtr(v: AssetReferenceTileBase): number;
  static _dtorFn(v: AssetReferenceTileBase): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTMP_FontAsset extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
  static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
  static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
  static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
}

}
declare namespace ut.EditorExtensions {

class CameraCullingMask extends ut.Component {
  constructor(mask?: number);
  mask: number;
  static readonly mask: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
  static _toPtr(p: number, v: CameraCullingMask): void;
  static _tempHeapPtr(v: CameraCullingMask): number;
  static _dtorFn(v: CameraCullingMask): void;
}

}
declare namespace ut.EditorExtensions {

class EntityLayer extends ut.Component {
  constructor(layer?: number);
  layer: number;
  static readonly layer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EntityLayer): EntityLayer;
  static _toPtr(p: number, v: EntityLayer): void;
  static _tempHeapPtr(v: EntityLayer): number;
  static _dtorFn(v: EntityLayer): void;
}

}
declare namespace game {
var FlyingSystemJS: ut.SystemJS;
}
declare namespace game {
var LaunchSystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateCustomButtonSystemJS: ut.SystemJS;
}


declare namespace Module {

}

