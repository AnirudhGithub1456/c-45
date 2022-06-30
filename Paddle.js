class Paddle{
    constructor(x,y,angle){
       
        this.body = Bodies.rectangle(x, y, width, height);
            this.width = width;
            this.height = height;
            this.image = loadImage("cue.webp")
            this.angle = angle
        
           
            
            
        
        
       
        
        
       
    }
    
   

    display(){
        if(keyIsDown(LEFT_ARROW)){
            this.angle -= 0.01
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.angle += 0.01
        }
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rotate (this.angle)
        imageMode(CENTER);
        image(this.image, 0, 0, 300, 300);
        pop();
    }


}