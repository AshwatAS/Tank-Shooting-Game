const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
var engine,world,canvas,ground;
function setup(){
    canvas=createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    ground=new Ground(600,390,20,1200);
}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
}

