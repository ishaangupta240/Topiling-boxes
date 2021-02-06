const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(200,200,30,30);
    box2=new Box(210,100,34,30);
    box3=new Box(200,100,30,30);
    box4=new Box(200,100,30,30);
    ground=new Ground(600,380,1200,40);
    
}

function draw(){
    background(0);
    Engine.update(engine);
       box1.display();
       box2.display();
       box3.display();
       box4.display();
       ground.display();
    
    
    
}