
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var canvas;
var engine, world;
var drops,maxDrops=100;
var umbrella;

function preload(){
   
    
}

function setup(){
   
   engine = Engine.create();
	world = engine.world;

   Engine.run(engine);

   umbrella = new Umbrella(200,600);

  

  /* for(var i=0;i<maxDrops;i++){
      drops = new Drops(random(0,400),random(0,400));
   }*/
   
  
   
    
}

function draw(){
  
   canvas = createCanvas(600,800);
   background("black");
  // drops.display();
   umbrella.display();
   //drops.update();
   
  
   
}   

