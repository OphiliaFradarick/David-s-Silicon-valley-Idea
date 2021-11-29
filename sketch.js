const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world;
var gamestate="start";
var button,buttonImage,bg,bgImage,basket1Image,basket2Image,chestImage,enemyImage,goldImage,playerImage,swordImage,sword2Image;
var howToButton,howToButtonImage,storyButton
var ocean,ocean2;
var backButton;
var enemy,enemyGroup;
var sword,swordGroup;
var gold,goldGroup;
var whooshSound;
var splashSound;
var goldSound;
var score=0;
var goldCount=0;
var cooldown=3;
var food=30;
var motherShip;
var motherHealth;
var health1,health2,health3,health4,health5,health6;
var motherHealthCount=6;


function preload(){
buttonImage=loadImage("images/play.gif");
introImage = loadImage('images/bgImage.png')
bgImage=loadImage("images/Blue Background 2.jpg");
basket1Image=loadImage("images/Basket.png");
basket2Image=loadImage("images/Basket2.png");
chestImage=loadImage("images/chest.png");
enemyImage=loadImage("images/Enemy.png");
goldImage=loadImage("images/gold.png");
playerImage=loadImage("images/Player.png");
swordImage=loadImage("images/sword.png");
sword2Image=loadImage("images/sword2.png");
howToButtonImage=loadImage("images/button.png");
whooshSound=loadSound("sounds/whoosh sound.flac")
splashSound=loadSound("sounds/splashSound.wav")
goldSound=loadSound("sounds/goldCollectSound.wav");
health1=loadImage("images/health1.PNG");
health2=loadImage("images/health2.PNG");
health3=loadImage("images/health3.PNG");
health4=loadImage("images/health4.PNG");
health5=loadImage("images/health5.PNG");
health6=loadImage("images/health6.PNG");

}

function setup(){
 createCanvas(displayWidth ,displayHeight -150);
 //world=engine.world;
 button=createSprite(displayWidth/2,displayHeight/2-50);
 button.addImage("button",buttonImage);
 button.scale=0.6;
 //button.debug=true;
 backButton=createSprite(displayWidth/4-200,displayHeight/2+200,10,10)
 backButton.addImage("back",howToButtonImage);

 howToButton=createSprite(displayWidth/2,displayHeight/2+200);
 howToButton.addImage("howTo",howToButtonImage);



 ocean=createSprite(displayWidth/2,displayHeight/2);
 ocean.addImage("ocean",bgImage);
 //ocean.velocityY=5;
        
 ocean2=createSprite(displayWidth/2,displayHeight/-2);
 ocean2.addImage("ocean",bgImage);

 //ocean2.velocityY=5;
  motherHealth=createSprite(displayWidth-300,100)
  motherHealth.addImage("health",health1);
  motherHealth.visible=false;
    
  motherShip=createSprite(Math.round(random(200,displayWidth-200)),-300);
  motherShip.addImage("ship",enemyImage);
  motherShip.debug=false;
  motherShip.scale=6.5;
  motherShip.setCollider("rectangle",-3,0,25,50);

  player=createSprite(displayWidth/2,displayHeight/2+200);
  player.addImage(playerImage);
  player.scale=2;
  
  sword=createSprite(20,displayHeight/2+200);
  sword.addImage("sword",swordImage);
  sword.scale=0.3
  sword.visible=true;

  //swordGroup= new Group();
  enemyGroup=new Group();
  goldGroup=new Group();

  start = new Start();
  gameState = new GameState();
  howToPlay = new Tutorial();
}

function draw(){
    background(introImage);
    //Engine.update(engine);
    drawSprites();

    if(gamestate==="start"){
        start.display()
    }

    if(gamestate==="howTo"){
        
      howToPlay.display();

      if(mousePressedOver(button)){
        gamestate="play";
        button.debug=true;
      }
      if(mousePressedOver(backButton)){
        gamestate="start"

      }
      if(mousePressedOver(storyButton)){
        gamestate="story";
        
      }

      if(gamestate==="play"){
        gameState.play();
      }

    }

    if(gamestate==="win"){
       gameState.win();
    }

    if(gamestate==="lose"){
      gameState.gameOver();
    } 
}
function spawnEnemy(){
 /* if(goldCount>20){
    enemy.velocityY=7

  }*/
  if(frameCount%60===0){
    enemy=createSprite(Math.round(random(100,displayWidth-100)),50);
    enemy.addImage("enemy",enemyImage);
    enemy.debug=false;
    enemy.velocityY= 5;
    enemyGroup.add(enemy);
    enemy.scale=2.5;
    enemy.debug=true;
    enemy.setCollider("rectangle",-3,0,25,50);
    
  }
}

function shootSword(){
  sword=createSprite(20,displayHeight/2+200);
  sword.addImage("sword",swordImage);
  sword.scale=0.3
  sword.visible=true;
  swordGroup.add(sword);
  sword.x=player.x
  sword.debug=true;
  sword.velocityY=-5;
}

function spawnGold(){
if(frameCount%100==0){
gold=createSprite(Math.round(random(100,displayWidth-100)),50);
gold.addImage("gold",goldImage);
gold.debug=true;
gold.velocityY=5;
gold.scale=0.5;
goldGroup.add(gold);

}

}

/*
function collision() {
if(sword!=null){
  var distance=dist(swordGroup[0].x,swordGroup[0].y,enemyGroup[0].x,enemyGroup[0].y);
  if(distance<=100){
    swordGroup[0].lifetime=0;
    enemyGroup[0].lifetime=0;

  }
  

}

}
*/
