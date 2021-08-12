class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB=pointB;
    }

fly(){
    this.sling.bodyA=null;
}

    display(){
        if (this.sling.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}