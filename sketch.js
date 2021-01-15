
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,bob6;
var roof1,roof2,roof3,roof4,roof5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    

    bobStartPosX= width/2;
    bobStartPosY=500;
    bobDiameter =40;
//roof

    roof=new Ground(width/2,150,540,30);
//bobs
var options={
isStaic:false
}
    bob1=new ball(bobStartPosX-bobDiameter*4,bobStartPosY,bobDiameter,options);

    bob2=new ball(bobStartPosX-bobDiameter*2,bobStartPosY,bobDiameter);

    bob3=new ball(bobStartPosX,bobStartPosY,bobDiameter);

    bob4=new ball(bobStartPosX+bobDiameter*2,bobStartPosY,bobDiameter);

    bob5=new ball(bobStartPosX+bobDiameter*4,bobStartPosY,bobDiameter);

 //ropes

    rope1=new rope(bob1.body,roof.body,-bobDiameter*+4,0);

    rope2=new rope(bob2.body,roof.body,-bobDiameter*2,0);

    rope3=new rope(bob3.body,roof.body,0,0);

    rope4=new rope(bob4.body,roof.body,-bobDiameter*-2,0);

    rope5=new rope(bob5.body,roof.body,-bobDiameter*-4,0);

	Engine.run(engine);
  
}

function draw() {
  background(200)
  rectMode(CENTER);
 
  bob1.display();
 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
 // ball6.display();
  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed (){
    if(keyCode === UP_ARROW){
        console.log("hi")
      
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:200})
    
    
    }
    
    
    }


