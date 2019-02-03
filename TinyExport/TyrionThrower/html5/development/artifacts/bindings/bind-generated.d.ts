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
declare namespace entities.game.Session {

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
declare namespace entities.game.InGameTopMenuGroup {

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
declare namespace entities.game.MenuInitialGroup {

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
declare namespace entities.game.PauseMenuGroup {

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

class BoxCollider extends ut.Component {
  constructor(x?: number, y?: number, width?: number, height?: number);
  x: number;
  y: number;
  width: number;
  height: number;
  static readonly x: ComponentFieldDesc;
  static readonly y: ComponentFieldDesc;
  static readonly width: ComponentFieldDesc;
  static readonly height: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: BoxCollider): BoxCollider;
  static _toPtr(p: number, v: BoxCollider): void;
  static _tempHeapPtr(v: BoxCollider): number;
  static _dtorFn(v: BoxCollider): void;
}

}
declare namespace game {

class Enemy extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Enemy): Enemy;
  static _toPtr(p: number, v: Enemy): void;
  static _tempHeapPtr(v: Enemy): number;
  static _dtorFn(v: Enemy): void;
}

}
declare namespace game {

class Flying extends ut.Component {
  constructor(ScrollSpeed?: number, AirSpeed?: number, PreviousPosition?: Vector3);
  ScrollSpeed: number;
  AirSpeed: number;
  PreviousPosition: Vector3;
  static readonly ScrollSpeed: ComponentFieldDesc;
  static readonly AirSpeed: ComponentFieldDesc;
  static readonly PreviousPosition: Vector3ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Flying): Flying;
  static _toPtr(p: number, v: Flying): void;
  static _tempHeapPtr(v: Flying): number;
  static _dtorFn(v: Flying): void;
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
  constructor(ScrollSpeed?: number, AirSpeed?: number, IsSmashing?: boolean, SmashCooldownTimer?: number, IsSmashingCooldown?: boolean);
  ScrollSpeed: number;
  AirSpeed: number;
  IsSmashing: boolean;
  SmashCooldownTimer: number;
  IsSmashingCooldown: boolean;
  static readonly ScrollSpeed: ComponentFieldDesc;
  static readonly AirSpeed: ComponentFieldDesc;
  static readonly IsSmashing: ComponentFieldDesc;
  static readonly SmashCooldownTimer: ComponentFieldDesc;
  static readonly IsSmashingCooldown: ComponentFieldDesc;
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

class LastPosition extends ut.Component {
  constructor(Position?: Vector3, Updated?: boolean);
  Position: Vector3;
  Updated: boolean;
  static readonly Position: Vector3ComponentFieldDesc;
  static readonly Updated: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: LastPosition): LastPosition;
  static _toPtr(p: number, v: LastPosition): void;
  static _tempHeapPtr(v: LastPosition): number;
  static _dtorFn(v: LastPosition): void;
}

}
declare namespace game {

class InGamePanel extends ut.Component {
  constructor(Das?: number);
  Das: number;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: InGamePanel): InGamePanel;
  static _toPtr(p: number, v: InGamePanel): void;
  static _tempHeapPtr(v: InGamePanel): number;
  static _dtorFn(v: InGamePanel): void;
}

}
declare namespace game {

class PauseMenu extends ut.Component {
  constructor(Das?: number);
  Das: number;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PauseMenu): PauseMenu;
  static _toPtr(p: number, v: PauseMenu): void;
  static _tempHeapPtr(v: PauseMenu): number;
  static _dtorFn(v: PauseMenu): void;
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

class RepeatingBackground extends ut.Component {
  constructor(First?: Entity, Second?: Entity, Spacing?: number, Offscreen?: number);
  First: Entity;
  Second: Entity;
  Spacing: number;
  Offscreen: number;
  static readonly First: EntityComponentFieldDesc;
  static readonly Second: EntityComponentFieldDesc;
  static readonly Spacing: ComponentFieldDesc;
  static readonly Offscreen: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: RepeatingBackground): RepeatingBackground;
  static _toPtr(p: number, v: RepeatingBackground): void;
  static _tempHeapPtr(v: RepeatingBackground): number;
  static _dtorFn(v: RepeatingBackground): void;
}

}
declare namespace game {

class MovingWithPlayer extends ut.Component {
  constructor(Speed?: number);
  Speed: number;
  static readonly Speed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MovingWithPlayer): MovingWithPlayer;
  static _toPtr(p: number, v: MovingWithPlayer): void;
  static _tempHeapPtr(v: MovingWithPlayer): number;
  static _dtorFn(v: MovingWithPlayer): void;
}

}
declare namespace game {

class DwarfSprites extends ut.Component {
  constructor(Idle?: Entity, Fly1?: Entity, Fly2?: Entity, Kick1?: Entity, Kick2?: Entity);
  Idle: Entity;
  Fly1: Entity;
  Fly2: Entity;
  Kick1: Entity;
  Kick2: Entity;
  static readonly Idle: EntityComponentFieldDesc;
  static readonly Fly1: EntityComponentFieldDesc;
  static readonly Fly2: EntityComponentFieldDesc;
  static readonly Kick1: EntityComponentFieldDesc;
  static readonly Kick2: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DwarfSprites): DwarfSprites;
  static _toPtr(p: number, v: DwarfSprites): void;
  static _tempHeapPtr(v: DwarfSprites): number;
  static _dtorFn(v: DwarfSprites): void;
}

}
declare namespace game {

class Config extends ut.Component {
  constructor(Gravity?: number, GroundPosition?: number, SmashForce?: number, SmashCooldown?: number);
  Gravity: number;
  GroundPosition: number;
  SmashForce: number;
  SmashCooldown: number;
  static readonly Gravity: ComponentFieldDesc;
  static readonly GroundPosition: ComponentFieldDesc;
  static readonly SmashForce: ComponentFieldDesc;
  static readonly SmashCooldown: ComponentFieldDesc;
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
var UIDataGetSystemJS: ut.SystemJS;
}
declare namespace game {
var MovingWithPlayerSystemJS: ut.SystemJS;
}
declare namespace game {
var RepeatingBackgroundSystemJS: ut.SystemJS;
}
declare namespace game {
var HeroSystemJS: ut.SystemJS;
}
declare namespace game {
var HitEnemySystemJS: ut.SystemJS;
}
declare namespace game {
var UpdateCustomButtonSystemJS: ut.SystemJS;
}


declare namespace Module {

}

