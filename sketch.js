const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;
var stone;
var boy;
var mango1, mango2, mango3, mango4, mango5,mango6,mango7,mango8,mango9,mango10;
var elastic, launcherObj;

function preload()
{
  boy=loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1700, 600);
  

	engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,670,800,20);
  tree = new Tree(850,90,450,600);
  stone =new Stone(230,220,30);
  mango1 = new Mango(920,300,40);
  mango2 = new Mango(960,200,40);
  mango3 = new Mango(1000,180,40);
  mango4 = new Mango(1040,300,40);
  mango5 = new Mango(1080,320,40);
  mango6 = new Mango(1180, 220, 40);
  mango7 =  new Mango(1210, 200, 40);
  mango8 = new Mango(960, 270, 40);
  mango9 = new Mango(1140, 330, 40);
  mango10 = new Mango(1140, 150, 40);
  launcherObj = new Launcher(stone.body,{x:235,y:420});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  
  image(boy ,200,340,200,300);

  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  launcherObj.display();
}

function mouseDragged(){
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcherObj.fly();
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.diameter+lstone.diameter)
{
  Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:230,y:420});
    launcherObj.attach(stone.body);
    }
}