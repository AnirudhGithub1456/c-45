class Ball{
    constructor(x,y){
        var options = {
            restitution: 1.12,
            frictionAir: 0.004,
            isStatic: true
          };
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("ball0.png")
        World.add(world, this.body);
    

    }
    move(){
        Matter.Body.setStatic(this.body, false);
        var newAngle = paddle.angle - 2
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setVelocity(this.body, {
            x: velocity.x *(-180/2), y: velocity.y * (180/2)});
        setTimeout(() => {
            Matter.Body.setStatic(this.body,true);
                
              }, 1500);
    

        
       
      
    }
    stop(){
        Matter.Body.setStatic(this.body, true);

    }
    display(){
        let pos = this.body.position;
        push();
        translate (pos.x,pos.y)
        imageMode(CENTER);
        noFill()
        image(this.image, 0,0, 100,100);
        pop();
       
    }
}