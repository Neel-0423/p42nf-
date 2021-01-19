
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops,batman,batmanI;

function preload(){
    batmanI = loadImage("walking_5.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    
    for (var a = 15; a <= width-10; a= a+50) {
        drops.push(new Drop(a,175));
        
      }

    batman = createSprite(250,450);
    batman.addImage(batmanI);
    batman.scale = 0.4

    World.add(world,batman);

    drops = new Drop;
}

function draw(){
    createCanvas(500,600);
    background("black");

    for (var j = 0; j < drops.length; j++) {
        drops[j].display();
           
         }

    
    drawSprites();
    drops.display();
}   

