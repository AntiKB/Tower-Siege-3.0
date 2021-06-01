const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var Block1;
var Block2;
var Block3;
var Block4;
var Block5;
var Block6;
var Block7;
var Block8;
var Block9;
var Block10;
var Block11;
var Block12;
var Block13;
var Block14;
var Block15;
var Block16;
var Block17;
var Block18;
var Block19;
var Block20;
var Block21;
var Block22;
var Block23;
var Block24;
var Block25;

var Stand1;
var Stand2;

var cannonBall;
var slingshot;

var BackgroundImage;
var Background = "Sprites/BlackImage.png";
function preload(){
  getBackgroundColour();
}

function setup(){
  createCanvas(1600,600);
  engine = Engine.create();
  world = engine.world;

  Stand1 = new Stand(560,380,350,20);
  Stand2 = new Stand(1000,195,250,20);

  Block25 = new Block(1100,160,50,50);
  Block24 = new Block(1050,160,50,50);
  Block23 = new Block(1000,160,50,50);
  Block22 = new Block(950,160,50,50);
  Block21 = new Block(900,160,50,50);
  Block20 = new Block(1050,110,50,50);
  Block19 = new Block(1000,110,50,50);
  Block18 = new Block(950,110,50,50);
  Block17 = new Block(1000,60,50,50);

  Block16 = new Block(710,345,50,50);
  Block15 = new Block(660,345,50,50);
  Block14 = new Block(610,345,50,50);
  Block13 = new Block(560,345,50,50);
  Block12 = new Block(510,345,50,50);
  Block11 = new Block(460,345,50,50);
  Block10 = new Block(410,345,50,50);
  Block9 = new Block(660,295,50,50);
  Block8 = new Block(610,295,50,50);
  Block7 = new Block(560,295,50,50);
  Block6 = new Block(510,295,50,50);
  Block5 = new Block(460,295,50,50);
  Block4 = new Block(610,245,50,50);
  Block3 = new Block(560,245,50,50);
  Block2 = new Block(510,245,50,50);
  Block1 = new Block(560,195,50,50);

  cannonBall = new CannonBall(150,250,6,25);

  slingshot = new Slingshot(cannonBall.body,{x:150,y:230});
}
function draw(){
  if (BackgroundImage)
    background(BackgroundImage);
  Engine.update(engine);
  strokeWeight(5);

  Stand1.display();
  Stand2.display();
  
  Block25.display();
  Block24.display();
  Block23.display();
  Block22.display();
  Block21.display();
  Block20.display();
  Block19.display();
  Block18.display();
  Block17.display();

  Block16.display();
  Block15.display();
  Block14.display();
  Block13.display();
  Block12.display();
  Block11.display();
  Block10.display();
  Block9.display();
  Block8.display();
  Block7.display();
  Block6.display();
  Block5.display();
  Block4.display();
  Block3.display();
  Block2.display();
  Block1.display();

  cannonBall.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(cannonBall.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
    slingshot.attach(cannonBall.body);
  }
}

async function getBackgroundColour(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=0600 && hour<=1800){
    BackgroundImage = "Sprites/WhiteImage.jpg";
  }
  else{
    BackgroundImage = "Sprites/BlackImage.jpg";
  }
  BackgroundImage = loadImage(BackgroundImage);
}