let ground;
let lander;
var lander_img;
var bg_img;


var vy = 0;
var g = 0.02;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,400,300);
  

  ground = createSprite(500,570,2000,10);
  ground.shapeColor= ("black");
  ground.visible = false;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }

  if(keyCode==RIGHT_ARROW)
  {
   lander.velocityX = 2;
  }

  if(keyCode==LEFT_ARROW)
  {
    lander.velocityX = -2;
  }
}

function upward_thrust()
{
  vy = -1;
}

