class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 40
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            stroke(48,22,8);
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
          if(pointA.x<200){
            strokeWeight(8); 
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y+10);
            line(pointA.x+25,pointA.y,pointB.x+ 20,pointB.y+10);
            image(this.sling3,pointA.x-30,pointA.y-20,15,30);
          //  line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
          else{
            strokeWeight(6);
            line(pointA.x+20,pointA.y,pointB.x-10,pointB.y-10);
            line(pointA.x+25,pointA.y,pointB.x+ 20,pointB.y+10);
            image(this.sling3,pointA.x+20,pointA.y-10,15,30);
           }        
    }
        image(this.sling1,200,70,38,150);
        bird.display();
        image(this.sling2,175,65,38,90);
    }
    
}