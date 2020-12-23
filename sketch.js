var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState = "play";
var gameState= "start";
var gameState= "end";

var part1;
var turn=0;
var count=0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(part1!=null)
   {
     part1.display();

     if(part1.body.position.y>760)
     {
     if(part1.body.position.x<300)
     {
          score = score + 500;
          part1=null;
          if(score>=5)gameState="end";
     }
    }
   }
   if(part1!=null)
   {
     part1.display();

     if(part1.body.position.x>301&& part1.body.position.x<600)
     {
    
          score = score + 100;
          part1=null;
          if(score>=5)gameState="end";
     }

   }
 

   textSize(30);
   text("Score: " + score,130,50)
   text("500",20,550);
   text("500",100,550);
   text("500",170,550);
   text("500",250,550);
   text("100",340,550);
   text("100",410,550);
   text("100",500,550);
   text("200",580,550);
   text("200",650,550); 
   text("200",740,550);
  
}

function mousePressed()
{
  if(gameState!=="end")
  {
    score++;
    part1 = new Particle(mouseX,10,10,10);
  }
}