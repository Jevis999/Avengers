var player,battleship1,battleship2,space;
var BattleshipGroup,lightninggroup,lt,btGroup;
var playeranim,lanim,bg,bs1,bs2,power,bt;
var score = 0,enemy,BOSS,sheild,Hammer,lt,gameState="play";
function preload()
{    
playeranim = loadImage("thor.png");
power = loadImage("Thor2.png");
lanim = loadImage("lightening.png");
bg = loadImage("space.jpg");
bs1= loadImage("bs1.png");
BOSS = loadImage("thanos2.png");
Hammer= loadImage("hammer.png");
}

function setup()
{ createCanvas(windowWidth,windowHeight);
   BattleshipGroup = new Group();
   player = new Thor();
   enemy = new Enemy();
   btGroup =new Group();
  // player.body.addImage("thr",playeranim);
player.body.scale = 0.3;
   lightninggroup = new Group();
   Thanos=createSprite(player.body.x,windowHeight-1000,25,25);
   sheild=createSprite(300,Thanos.y + 500,150,20);
   sheild.shapeColor ="yellow";
  
}
function draw() {
  if(gameState==="play"){
    background(bg);
  }else{
    background("green");
    player.body.addImage("thor",power);
  }
 
textSize(30);
fill("red");
  text("SCORE : "+ score,windowWidth/8-windowWidth/7,50);
  sheild.x = Thanos.x;
  sheild.y = Thanos.y + 75;
  if(score>200){
    BattleshipGroup.destroyEach();
    player.body.addImage("thor",power);
    Thanos.addImage("thanos",BOSS);
    Thanos.velocityY = 2;
    Thanos.scale = 0.35;
    if(frameCount%80===0&&gameState==="play"){
      bt = createSprite(Thanos.x,Thanos.y,10,30);
      bt.shapeColor ="red";
     // bt.debug = true;
     bt.setCollider("rectangle",-2,0,15,20);
     bt.velocityY = 4;
     btGroup.add(bt);
console.log(power);
    }
}else{
  player.body.addImage("thr",playeranim);
}

  if(touches.length>0||keyWentDown("space")&&gameState === "play"){
     lt = createSprite(mouseX,450,30,30);
    lt.debug = true;
   lt.setCollider("rectangle",-2,0,15,20);
   touches=[];
   if(score <= 200){
   lt.addImage("light",lanim);
  }else{
    lt.addImage("hammer",Hammer);
    lt.scale=0.25;
  }
    //lt.scale  = 0.5;                       
    lt.velocityY=-10;
    lt.lifetime = 45;
    lightninggroup.add(lt);
       
  }

 
 
  player.display();
 
  
  drawSprites();
}