var mango1, mango2, mango3;
var stoneObj, stone;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmangoBodyPosition;
	stoneBodyPosition = lstoneBodyPosition;

	var distance = dist(stone.body.position.x, stone.body.position.y, mango.body.position.x, mango.body.position.y);
	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	detectCollision(stoneObj,mango1);
	detectCollision(stoneObj,mango2);
	detectCollision(stoneObj,mango3);
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
		launcherObject.attach(stoneObj.body);
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  drawSprites();
 
}



