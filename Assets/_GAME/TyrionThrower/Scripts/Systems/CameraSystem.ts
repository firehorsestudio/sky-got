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
            let hero = GameService.GetHeroEntity(this.world);

            let playerPos = this.world.getComponentData(hero, ut.Core2D.TransformLocalPosition);

            this.world.forEach(
                [ut.Core2D.Camera2D, game.FollowerCamera, ut.Core2D.TransformLocalPosition],
                (camera, followerCamera, transform) => {

                    //let height = 2 * camera.halfVerticalSize;
                    
                    var pos = transform.position;
                    
                    pos.x = playerPos.position.x + followerCamera.Offset.x;
                    
                    if (playerPos.position.y + followerCamera.Offset.y >= followerCamera.UpperLimit)
                        pos.y = playerPos.position.y + followerCamera.Offset.y;
                    else
                        pos.y = this.lerp(playerPos.position.y + followerCamera.Offset.y, followerCamera.BottomLimit, this.scheduler.deltaTime());

                    if (playerPos.position.y <= followerCamera.BottomLimit)
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
