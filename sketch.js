const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,bin1,bin2,bin3,paper1

function preload()
{
	binimage = loadImage('bin.png');
}

function setup() {
	
	var canvas = createCanvas(1200, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	bin1 = new Bin(1100,495,150,15);
	bin2 = new Bin(1185,420,15,170);
	bin3 = new Bin(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(255);
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	bin3.display();
	bin1.display();
	bin2.display();
	image(binimage,1000,330,200,200);
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



