const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var balls = [];
var holes = []
var board1, board2;
var numberOfArrows = 10;
var score = 0

function preload() {
  bgImg = loadImage("bg0.png")
  
}

function setup() {
  ellipseMode(CENTER)
  angle = 15
  
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  hole = new Hole(150,875)
  hole_2 = new Hole(150,452)
  hole_3 = new Hole(175,100)
  hole_4 = new Hole(1775,452)
  hole_5 = new Hole(1775,875)
  hole_6 = new Hole(1775,100)
  holes.push(hole)
  holes.push(hole_2)
  holes.push(hole_3)
  holes.push(hole_4)
  holes.push(hole_5)
  holes.push(hole_6)


  paddle = new Paddle(960,452,angle)

  link = new Link(paddle.body,{x:960, y: 452})
  

  wall = new Wall(950,900,1500,20)
  wall_2 = new Wall(950,50,1500,20)
  wall_3 = new Wall(145,675,20,300)
  wall_4 = new Wall(145,275,20,300)
  wall_5 = new Wall(1775,675,20,300)
  wall_6 = new Wall(1775,275,20,300)
  
  ball = new Ball(900,452)

  ball_1 = new Balls(1000,800)
  ball_2 = new Balls(1100,800)
  ball_3 = new Balls(1200,800)
  ball_4 = new Balls(1300,800)
  ball_5 = new Balls(1250,700)
  ball_6 = new Balls(1150,700)
  ball_7 = new Balls(1050,700)
  ball_8 = new Balls(1200,600)
  ball_9 = new Balls(1100,600)
  ball_10 = new Balls(1150,500)
  balls.push(ball_1)
  balls.push(ball_2)
  balls.push(ball_3)
  balls.push(ball_4)
  balls.push(ball_5)
  balls.push(ball_6)
  balls.push(ball_7)
  balls.push(ball_8)
  balls.push(ball_9)
  balls.push(ball_10)

  console.log(windowWidth, windowHeight)


  
}

function draw() {
  
  background(bgImg);

  Engine.update(engine);
  if(gameState = PLAY){
    hole.display()
    hole_2.display()
    hole_3.display()
    hole_4.display()
    hole_5.display()
    hole_6.display()
    paddle.display()
    wall.show()
    wall_2.show()
    wall_3.show()
    wall_4.show()
    wall_5.show()
    wall_6.show()
  
  
  

  
  
  
  
  
  
  

    ball_1.display()
    ball_2.display()
    ball_3.display()
    ball_4.display()
    ball_5.display()
    ball_6.display()
    ball_7.display()
    ball_8.display()
    ball_9.display()
    ball_10.display()

    for (var i = 0; i < balls.length; i++) {
      collisionWithHole(i);
    }
    fill("#6d4c41")
    textSize(40)
    text("Score: "+score,width -200,50)
    textAlign(CENTER,CENTER)

    if(score === 50){
      END = 1
    }

  
  }

  

  ball.display()


  

  

  

  
  
  if(gameState = END){
    fill("#6d4c41");
    textAlign("center");
    textSize(100);
    text(" You won", 960,452);

    score = 0
    ball.setPosition(960,452)
    ball.stop()
    

  }
  

  
}
function collisionWithHole(index) {
  for (var i = 0; i < holes.length; i++) {
    if (balls[index] !== undefined && holes[i] !== undefined) {
      var collision = Matter.SAT.collides(balls[index].body, holes[i].body);

      if (collision.collided) {
        score += 5
        balls[index].remove()
        
          
        

        Matter.World.remove(world, balls[index].body);
        delete balls[index];
        
        
        
      }
    }
  }
}
function collisionWithHole_2() {
  for (var i = 0; i < holes.length; i++) {
    if (ball !== undefined && holes[i] !== undefined) {
      var collision = Matter.SAT.collides(ball, holes[i].body);

      if (collision.collided) {
        gameState = END
        
          
        

        
        
        
        
        
      }
    }
  }
}
function mouseDragged(){
  Matter.Body.setPosition(paddle.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
  link.fly()
  link.attach(paddle.body)
  ball.move()
  ball_1.move()
  ball_2.move()
  ball_3.move()
  ball_4.move()
  ball_5.move()
  ball_6.move()
  ball_7.move()
  ball_8.move()
  ball_9.move()
  ball_10.move()
  
  
  
  
  
}


