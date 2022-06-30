class Balls{
    constructor(x,y){
        var options = {
            restitution: 1.1,
            frictionAir: 0.007,
            isStatic: true
          };
        this.Visiblity = 255;
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("poolBall.png")
        World.add(world, this.body);
    

    }
    move(){
        if(this.body.speed> 3){
            setTimeout(() => {
                Matter.Body.setStatic(this.body,true);
                    
                  }, 1500);

        }
        Matter.Body.setStatic(this.body,false);
    


        

        
       
      
    }
    remove(){
        this.body.position = (100000000,10000000)
        Matter.Body.setStatic(this.body,true);
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