

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	cb= new Paper(200,200,20);
	//Engine.run(engine);
	g = new Ground(600,height,1200,20);
	d1=new Dustbin(800,375,200,10);
	d2=new Dustbin(900,255,10,250);
	d3=new Dustbin(700,330,10,100);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("pink");
  cb.display();
  g.display();
  d1.display();
  d2.display();
  d3.display();
  keyPressed(cb,d3);

  drawSprites();
 
}
function keyPressed(paperObject){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:250,y:-85});
	}
	
}


