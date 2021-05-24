
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite
var packageSprite,packageIMG,packageBody;
var box1Sprite,box2Sprite,box3Sprite;
var box2Body;
var ground

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
var canvas = createCanvas(800, 700);



	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,30);
	groundSprite.shapeColor=color(255)

	box1Sprite = createSprite(300,height-100,20,100);
    box1Sprite.shapeColor=color("red");

	box2Sprite = createSprite(width/2,height-60,200,20);
	box2Sprite.shapeColor=color("red");

	box3Sprite = createSprite(500,height-100,20,100);
    box3Sprite.shapeColor=color("red");

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;



	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	box2Body = Bodies.rectangle(width/2,640,200,20, {isStatic:true});
	World.add(world,box2Body)

	Engine.run(engine);
  
}


function draw() {
background(0)
Engine.update(engine);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);
	
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



