
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var canvas;
var engine, world;
var maxDrops=100;
var umbrella;
var drops=[];
var thunder;
var thunder1Img, thunder2Img,thunder3Img,thunder4Img;
var rand;


function preload(){
   thunder1Img = loadImage("images/1.png");
   thunder2Img = loadImage("images/2.png");
   thunder3Img = loadImage("images/3.png")
   thunder4Img = loadImage("images/4.png");
   
    
}

function setup(){
   
   engine = Engine.create();
	world = engine.world;

   Engine.run(engine);

   umbrella = new Umbrella(200,600);

   thunder = createSprite(random(0,400),150,40,40);
  // thunder2.addImage(thunder1);
   thunder.scale = 0.4;

  
   
   for(i=0;i<maxDrops;i++){
      
      drops.push(new Drops(random(0,400),random(0,800)));
   }

   
  
   
    
}

function draw(){
  
   canvas = createCanvas(500,800);
   background("black");
   
   umbrella.display();
   
   for (var j = 0; j <drops.length ; j++){
     
      drops[j].display();
      drops[j].update();
   }

   rand = Math.round(random(1,4));

   switch(rand){
      case 1: thunder.addImage(thunder1Img);
               break;
      case 2: thunder.addImage(thunder2Img);
               break;
      case 3: thunder.addImage(thunder3Img);
               break;
      case 4: thunder.addImage(thunder4Img);
               break;
      default: break;
   }

   

   drawSprites();

   


   
   
   
  
   
}   

