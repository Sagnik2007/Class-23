const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var ground,ball,box1,box2;

function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world

ground = new Ground(400,390,800,10);

box1 = new Box(400,200,40,60);
box2 = new Box(380,100,60,50);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  
 ground.display();

 box1.display();
 box2.display();

  

}