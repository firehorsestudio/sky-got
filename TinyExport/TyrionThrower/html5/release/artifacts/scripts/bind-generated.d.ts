
declare namespace ut {

  /** Base class for user-defined Systems.*/
  abstract class ComponentSystem {

    /** Scheduler executing this system.*/
    readonly scheduler: ut.Scheduler;

    /** World on which this system operates on.*/
    readonly world: ut.World;

    /** Override this method to define your system update function.*/
    abstract OnUpdate():void;
  }

  type Schedulable = typeof ComponentBehaviour | typeof ComponentSystem | System | SystemJS;
  
  /** Decorator. This system will be executed after the given systems.*/
  function executeAfter(...args: Schedulable[]) : any;

  /** Decorator. This system will be executed before the given systems.*/
  function executeBefore(...args: Schedulable[]) : any;

  /** Decorator. These components are required by this system.*/
  function requiredComponents(...args: typeof Component[]) : any;

  /** Decorator. These components are optionally affected by this system.*/
  function optionalComponents(...args: typeof Component[]) : any;

  /** Classes based on EntityFilter can be used to iterate on entities.
   * 
   * This class is parsed by the Editor according to this convention:
   * - Add ut.Component fields to a filter to require them when iterating.
   * - Add the optional modifier '?' to ut.Component fields to require them if they exist.
   * - Add the 'readonly' modifier to ut.Component fields to tell the runtime this data is not modified.
   *
  */
  abstract class EntityFilter {
    /** Populates this filter from the given entity.*/
    Read(world: ut.World, entity: ut.Entity): void;
    /** Writes the contents of this filter to the given entity.*/
    Write(world: ut.World, entity: ut.Entity): void;
    /** Resets all fields to undefined.*/
    Reset(): void;
    /** Invokes the given callback for each entity matching this filter.*/
    ForEach(world: ut.World, callback: (entity: ut.Entity) => void): void;
  }

  /** Decorator. Declare that this system or behaviour may use the given EntityFilter during processing.*/
  function usingFilters(...filters: typeof EntityFilter[]) : any;

  /** Base class to define multiple systems following a familiar component lifecycle.
   * 
   * You must add an EntityFilter field to access per-entity data.
   * 
   * You must also define at least one of the following methods to get callbacks per entity matching the filter:
   * - OnEntityEnable. Called only once, the first frame this entity is matched by this behaviour.
   * - OnEntityUpdate. Called every frame on matching entities.
   * - OnEntityDisable. Called only once, the first frame this entity is marked as disabled by this behaviour.
  */
  abstract class ComponentBehaviour {
    /** Single instance for this class.*/
    static readonly Instance: ComponentBehaviour;

    readonly scheduler: ut.Scheduler;
    readonly world: ut.World;
    readonly entity: ut.Entity;

    /** Returns true if this behaviour is currently enabled on this entity.
     * Note that this method will return false if OnEnable was not called at least once.*/
    IsEnabled(world: ut.World, entity: ut.Entity): boolean;
    /** Enables this behaviour on the given entity.*/
    Enable(world: ut.World, entity: ut.Entity): void;
    /** Disables this behaviour on the given entity.*/
    Disable(world: ut.World, entity: ut.Entity): void;
  }
}
declare var UT_ASSETS: Object;
declare namespace game{
    class Config extends ut.Component {
        constructor();
        Gravity: number;
        GroundPosition: number;
        SmashForce: number;
        SmashCooldown: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Config): Config;
        static _toPtr(p: number, v: Config): void;
        static _tempHeapPtr(v: Config): number;
        static _dtorFn(v: Config): void;
    }
    class SettingsMenu extends ut.Component {
        constructor();
        ButtonOK: ut.Entity;
        ButtonCredits: ut.Entity;
        ButtonResetProgress: ut.Entity;
        ButtonLanguage: ut.Entity;
        ButtonRenderMode: ut.Entity;
        LabelRenderMode: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SettingsMenu): SettingsMenu;
        static _toPtr(p: number, v: SettingsMenu): void;
        static _tempHeapPtr(v: SettingsMenu): number;
        static _dtorFn(v: SettingsMenu): void;
    }
    class BoxCollider extends ut.Component {
        constructor();
        x: number;
        y: number;
        width: number;
        height: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: BoxCollider): BoxCollider;
        static _toPtr(p: number, v: BoxCollider): void;
        static _tempHeapPtr(v: BoxCollider): number;
        static _dtorFn(v: BoxCollider): void;
    }
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
    class Flying extends ut.Component {
        constructor();
        ScrollSpeed: number;
        AirSpeed: number;
        PreviousPosition: ut.Math.Vector3;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Flying): Flying;
        static _toPtr(p: number, v: Flying): void;
        static _tempHeapPtr(v: Flying): number;
        static _dtorFn(v: Flying): void;
    }
    class Game extends ut.Component {
        constructor();
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
    class Hero extends ut.Component {
        constructor();
        ScrollSpeed: number;
        AirSpeed: number;
        IsSmashing: boolean;
        SmashCooldownTimer: number;
        IsSmashingCooldown: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Hero): Hero;
        static _toPtr(p: number, v: Hero): void;
        static _tempHeapPtr(v: Hero): number;
        static _dtorFn(v: Hero): void;
    }
    class LastPosition extends ut.Component {
        constructor();
        Position: ut.Math.Vector3;
        Updated: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: LastPosition): LastPosition;
        static _toPtr(p: number, v: LastPosition): void;
        static _tempHeapPtr(v: LastPosition): number;
        static _dtorFn(v: LastPosition): void;
    }
    class InGamePanel extends ut.Component {
        constructor();
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
    class PauseMenu extends ut.Component {
        constructor();
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
    class CustomButton extends ut.Component {
        constructor();
        IsPressed: boolean;
        JustDown: boolean;
        JustUp: boolean;
        JustClicked: boolean;
        TimePressed: number;
        LastDown: boolean;
        LastOver: boolean;
        DefaultSprite: ut.Entity;
        HoveredSprite: ut.Entity;
        PressedSprite: ut.Entity;
        DisabledSprite: ut.Entity;
        ContentToOffsetOnPress: ut.Entity;
        PressedOffsetY: number;
        ContentDefautPositionY: number;
        ContentDefautPositionIsSet: boolean;
        IsPointerOver: boolean;
        IsInteractable: boolean;
        LastIsInteractable: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CustomButton): CustomButton;
        static _toPtr(p: number, v: CustomButton): void;
        static _tempHeapPtr(v: CustomButton): number;
        static _dtorFn(v: CustomButton): void;
    }
    class FollowerCamera extends ut.Component {
        constructor();
        Smooth: boolean;
        Offset: ut.Math.Vector2;
        UpperLimit: number;
        BottomLimit: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: FollowerCamera): FollowerCamera;
        static _toPtr(p: number, v: FollowerCamera): void;
        static _tempHeapPtr(v: FollowerCamera): number;
        static _dtorFn(v: FollowerCamera): void;
    }
    enum GameState {
        MENU = 0,
        THROW = 1,
        PLAYING = 2,
        PAUSED = 3,
        END = 4,
    }
}
declare namespace ut{
}
declare namespace ut.EditorExtensions{
    class AssetReferenceAnimationClip extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
        static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
        static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
        static _dtorFn(v: AssetReferenceAnimationClip): void;
    }
    class AssetReferenceAudioClip extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
        static _toPtr(p: number, v: AssetReferenceAudioClip): void;
        static _tempHeapPtr(v: AssetReferenceAudioClip): number;
        static _dtorFn(v: AssetReferenceAudioClip): void;
    }
    class AssetReferenceSprite extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
        static _toPtr(p: number, v: AssetReferenceSprite): void;
        static _tempHeapPtr(v: AssetReferenceSprite): number;
        static _dtorFn(v: AssetReferenceSprite): void;
    }
    class AssetReferenceSpriteAtlas extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
        static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
        static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
        static _dtorFn(v: AssetReferenceSpriteAtlas): void;
    }
    class AssetReferenceTexture2D extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
        static _toPtr(p: number, v: AssetReferenceTexture2D): void;
        static _tempHeapPtr(v: AssetReferenceTexture2D): number;
        static _dtorFn(v: AssetReferenceTexture2D): void;
    }
    class AssetReferenceTileBase extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
        static _toPtr(p: number, v: AssetReferenceTileBase): void;
        static _tempHeapPtr(v: AssetReferenceTileBase): number;
        static _dtorFn(v: AssetReferenceTileBase): void;
    }
    class AssetReferenceTMP_FontAsset extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
        static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
        static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
        static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
    }
    class CameraCullingMask extends ut.Component {
        constructor();
        mask: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
        static _toPtr(p: number, v: CameraCullingMask): void;
        static _tempHeapPtr(v: CameraCullingMask): number;
        static _dtorFn(v: CameraCullingMask): void;
    }
    class EntityLayer extends ut.Component {
        constructor();
        layer: number;
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
declare namespace ut{
    class EntityGroupData extends Object{
        Component: ut.ComponentClass<any>;
        load(world: ut.World): ut.Entity[];
        name: string;
    }
    interface EntityGroups{
        [module: string]: any;
        game: {
            [data: string]: EntityGroupData;
            Bootstrap: EntityGroupData;
            GroundTile: EntityGroupData;
            SettingsMenu: EntityGroupData;
            InGameTopMenuGroup: EntityGroupData;
            MenuInitialGroup: EntityGroupData;
            PauseMenuGroup: EntityGroupData;
        }
    }
}
declare let entities: ut.EntityGroups;
declare namespace ut.Core2D.layers{
    class Default extends ut.Component {
        static _wrap(w: number, e: number): Default;
        static readonly cid: number;
    }
    class TransparentFX extends ut.Component {
        static _wrap(w: number, e: number): TransparentFX;
        static readonly cid: number;
    }
    class IgnoreRaycast extends ut.Component {
        static _wrap(w: number, e: number): IgnoreRaycast;
        static readonly cid: number;
    }
    class Water extends ut.Component {
        static _wrap(w: number, e: number): Water;
        static readonly cid: number;
    }
    class UI extends ut.Component {
        static _wrap(w: number, e: number): UI;
        static readonly cid: number;
    }
    class a extends ut.Component {
        static _wrap(w: number, e: number): a;
        static readonly cid: number;
    }
    class b extends ut.Component {
        static _wrap(w: number, e: number): b;
        static readonly cid: number;
    }
    class c extends ut.Component {
        static _wrap(w: number, e: number): c;
        static readonly cid: number;
    }
}
