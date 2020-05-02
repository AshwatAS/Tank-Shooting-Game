const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
var engine,world,canvas,ground;
function setup(){
    canvas=createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    ground=new Ground(600,390,1200,20);
    cannonbase1=new CannonBase(80,365,150,30);
    cannonbase2=new CannonBase(80,310,40,80);
    cannonbase3=new CannonBase(140,233,80,20);
    cannonhead=new CannonHead(80,233,80,80);
}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    cannonbase1.display();
    cannonbase2.display();
    cannonbase3.display();
    cannonhead.display();
}

