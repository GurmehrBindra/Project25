const Bodies= Matter.Bodies;
const Engine= Matter.Engine;
const World= Matter.World;



var dustbinrod1,dustbinrod2,dustbinrod3,dustbin;
var paperball,ground;

function setup(){
    createCanvas(600,400);
    engine= Engine.create();
    world=engine.world;
    dustbinrod1= new Dustbinrods(460,300,15,100);
    dustbinrod2= new Dustbinrods(540,300,15,100);
    dustbinrod3= new Dustbinrods(500,350,100,10);
    paperball= new Paperball(80,300,30);
    dustbin= new Dustbin(500,300);
    ground= new Ground();
}
function draw(){
    background('yellow');
    Engine.update(engine);
    
    dustbinrod1.display();
    dustbinrod2.display();
    dustbinrod3.display();
    dustbin.display();
    paperball.display();
    
    ground.display();
    drawSprites(); 
}

