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
using UTiny.Interpolation;
using UTiny.Particles;
using UTiny.Text;
using UTiny.Tweens;

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
    namespace SettingsMenu
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Game : IComponentData
    {
        public game.GameState State;
        public game.GameState PreviousState;
    }
    public struct Hero : IComponentData
    {
        public float ScrollSpeed;
        public float AirSpeed;
        public bool Launched;
    }
    public struct SettingsMenu : IComponentData
    {
        public Entity ButtonOK;
        public Entity ButtonCredits;
        public Entity ButtonResetProgress;
        public Entity ButtonLanguage;
        public Entity ButtonRenderMode;
        public Entity LabelRenderMode;
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
        public Entity Sprite;
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

namespace ut.Interpolation
{
}

namespace ut.Particles
{
}

namespace ut.HTML
{
}

namespace ut.Text
{
}

namespace ut.Tweens
{
}
namespace game
{
    public class FlyingSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class LaunchSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class UpdateCustomButtonSystemJS : IComponentSystem
    {
    }
}
