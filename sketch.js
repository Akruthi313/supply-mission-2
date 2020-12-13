var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
var box1,box2,box3;
var engine;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1S=createSprite(300,600,20,100);
	box1S.shapeColor=color("red")

box2S=createSprite(500,600,20,100);
box2S.shapeColor=color("red")

	box3S=createSprite(400,650,200,20);
	box3S.shapeColor=color('red')

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 30 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 World.add(world, ground);

	 box3 = Bodies.rectangle(400,650,200,20 , {isStatic:true} );
	 World.add(world, box3);
	 
	 box2= Bodies.rectangle(500,600,20,100, {isStatic:true} );
	 World.add(world, box2);
	  
	box1 = Bodies.rectangle(300,600,20,100, {isStatic:true} );
	 World.add(world, box1);
	 
	 helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0;

	

	var render = Render.create({ 
		element: document.body,
		 engine: engine,
		  options:
		 { width: 1200, height: 700, wireframes: false } });
		  Engine.run(engine);
		   Render.run(render);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  Matter.Body.setStatic(packageBody,false);
    
  }
}



