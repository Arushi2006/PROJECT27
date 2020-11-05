var bob,roof,rope;
var b1,b2,b3,b4,b5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bob=new Bob(100,500,60);
roof=new Roof(350,90,500);
rope=new Rope(340,50);

b1=new Bob(223,40,67,89);
b2=new Bob(290,400,50,40);
b3=new Bob(300,50,59,49);
b4=new Bob(700,40,30,30);
b5=new Bob(789,400,20,60);

rope1=new Rope(b1.body,roof.body,-40*2,0);
rope2=new Rope(b2.body,roof.body,-40*2,0);
rope3=new Rope(b3.body,roof.body,-40*2,0);
rope4=new Rope(b4.body,roof.body,-40*2,0);
rope5=new Rope(b5.body,roof.body,-40*2,0);


	Engine.run(engine);


  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  
  drawSprites();
   bob.display();
  roof.display();
  rope.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
 
}
function keyPressed()
{
  if(keyDown_upArrow)
  {
     this.body.b1.applyForce();
  }
}



