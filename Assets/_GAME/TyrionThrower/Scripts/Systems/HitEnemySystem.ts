/// <reference path="FlyingSystem.ts" />
/// <reference path="HitGroundSystem.ts" />

namespace game {

    @ut.executeAfter(FlyingSystem)
    @ut.executeBefore(HitGroundSystem)
    export class HitEnemySystem extends ut.ComponentSystem {

        //private hero: game.BoxCollider;
        
        //private heroOffsetedCollider: game.BoxCollider = new game.BoxCollider();
        //private enemyOffsetedCollider: game.BoxCollider = new game.BoxCollider();

        OnUpdate(): void
        {
            if (GameService.IsPaused(this.world) || GameService.GetCurrentGameState(this.world) != GameState.PLAYING)
                return;

            let hero = GameService.GetHeroEntity(this.world);
            let heroTransform = this.world.getComponentData(hero, ut.Core2D.TransformLocalPosition);
            let heroCollider = this.world.getComponentData(hero, game.BoxCollider);

            //console.log("hero h: " + heroCollider.height + ", w: " + heroCollider.width);
            heroCollider.x = heroTransform.position.x - heroCollider.width;
            heroCollider.y = heroTransform.position.y - heroCollider.height;
            
            this.world.forEach(
                [ut.Entity, game.Enemy, ut.Core2D.TransformLocalPosition, game.BoxCollider],
                (entity, enemy, transform, collider) =>
                {
                    //console.log("enemy w: " + collider.width + ", h: " + collider.height);
                    let enemyCollider = new BoxCollider();

                    enemyCollider.x = transform.position.x - collider.width;
                    enemyCollider.y = transform.position.y - collider.height;

                    enemyCollider.height = collider.height;
                    enemyCollider.width = collider.width;

                    if (this.CheckCollision(heroCollider, enemyCollider))
                    {
                        console.log(this.world.getEntityName(entity));
                    }
                }
            );
        }

        CheckCollision(colliderA:BoxCollider, colliderB: BoxCollider): boolean
        {
            return !(
                ((colliderA.y + 2 * colliderA.height) < (colliderB.y)) ||
                (colliderA.y > (colliderB.y + 2 * colliderB.height)) ||
                ((colliderA.x + 2 * colliderA.width) < colliderB.x) ||
                (colliderA.x > (colliderB.x + 2 * colliderB.width))
            );
        }
    }
}
