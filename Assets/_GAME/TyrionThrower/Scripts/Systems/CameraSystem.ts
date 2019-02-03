namespace game
{
    export class CameraSystem extends ut.ComponentSystem
    {
        /*
        private offset: ut.Math.Vector2 = new ut.Math.Vector2(-1, 0);
        private upperLimit: number = 20;
        private bottomLimit: number = -2;
        */

        OnUpdate(): void
        {
            let displayInfo = this.world.getConfigData(ut.Core2D.DisplayInfo);
            let cameraEntity = this.world.getEntityByName("MainCamera");
            let camera = this.world.getComponentData(cameraEntity, ut.Core2D.Camera2D);
            let cameraHalfWidth = displayInfo.width / displayInfo.height * camera.halfVerticalSize;


            let hero = GameService.GetHeroEntity(this.world);

            let playerPos = ut.Core2D.TransformService.computeWorldPosition(this.world, hero);

            this.world.forEach(
                [ut.Core2D.Camera2D, game.FollowerCamera, ut.Core2D.TransformLocalPosition],
                (camera, followerCamera, transform) => {
                    var pos = transform.position;

                    pos.x = playerPos.x + cameraHalfWidth - followerCamera.Offset.x;
                    
                    if (playerPos.y + followerCamera.Offset.y >= followerCamera.UpperLimit)
                        pos.y = playerPos.y + followerCamera.Offset.y;
                    else
                        pos.y = this.lerp(playerPos.y + followerCamera.Offset.y, followerCamera.BottomLimit, this.scheduler.deltaTime());

                    if (playerPos.y <= followerCamera.BottomLimit)
                        pos.y = followerCamera.BottomLimit;

                    transform.position = pos;
                }
            );
        }

        lerp(start: number, end: number, amt: number): number
        {
            return (1 - amt) * start + amt * end;
        }


    }
}
