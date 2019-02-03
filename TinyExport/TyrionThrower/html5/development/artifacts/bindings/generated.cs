using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.UIControls;
using UTiny.UILayout;
using UTiny.Text;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Bootstrap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Session
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace SettingsMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace InGameTopMenuGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace MenuInitialGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace PauseMenuGroup
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct SettingsMenu : IComponentData
    {
        public Entity ButtonOK;
        public Entity ButtonCredits;
        public Entity ButtonResetProgress;
        public Entity ButtonLanguage;
        public Entity ButtonRenderMode;
        public Entity LabelRenderMode;
    }
    public struct BoxCollider : IComponentData
    {
        public float x;
        public float y;
        public float width;
        public float height;
    }
    public struct Enemy : IComponentData
    {
    }
    public struct Flying : IComponentData
    {
        public float ScrollSpeed;
        public float AirSpeed;
        public Vector3 PreviousPosition;
    }
    public struct Game : IComponentData
    {
        public game.GameState State;
        public game.GameState PreviousState;
    }
    public struct Hero : IComponentData
    {
        public float ScrollSpeed;
        public float AirSpeed;
        public bool IsSmashing;
        public float SmashCooldownTimer;
        public bool IsSmashingCooldown;
    }
    public struct LastPosition : IComponentData
    {
        public Vector3 Position;
        public bool Updated;
    }
    public struct InGamePanel : IComponentData
    {
        public short Das;
    }
    public struct PauseMenu : IComponentData
    {
        public short Das;
    }
    public struct CustomButton : IComponentData
    {
        public bool IsPressed;
        public bool JustDown;
        public bool JustUp;
        public bool JustClicked;
        public float TimePressed;
        public bool LastDown;
        public bool LastOver;
        public Entity DefaultSprite;
        public Entity HoveredSprite;
        public Entity PressedSprite;
        public Entity DisabledSprite;
        public Entity ContentToOffsetOnPress;
        public float PressedOffsetY;
        public float ContentDefautPositionY;
        public bool ContentDefautPositionIsSet;
        public bool IsPointerOver;
        public bool IsInteractable;
        public bool LastIsInteractable;
    }
    public struct RepeatingBackground : IComponentData
    {
        public Entity First;
        public Entity Second;
        public float Spacing;
        public float Offscreen;
    }
    public struct MovingWithPlayer : IComponentData
    {
        public float Speed;
    }
    public struct DwarfSprites : IComponentData
    {
        public Entity Idle;
        public Entity Fly1;
        public Entity Fly2;
        public Entity Kick1;
        public Entity Kick2;
    }
    public enum GameState
    {
        MENU = 10
        , THROW = 20
        , PLAYING = 30
        , PAUSED = 40
        , END = 50
    }
    [Configuration]
    public struct Config : IComponentData
    {
        public float Gravity;
        public float GroundPosition;
        public float SmashForce;
        public float SmashCooldown;
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct a : IComponentData
        {
        }
        public struct b : IComponentData
        {
        }
        public struct c : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTileBase : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.UIControls
{
}

namespace ut.UILayout
{
}

namespace ut.HTML
{
}

namespace ut.Text
{
}
namespace game
{
    public class UIDataGetSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class MovingWithPlayerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class RepeatingBackgroundSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class HeroSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class HitEnemySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateCustomButtonSystemJS : IComponentSystem
    {
    }
}
