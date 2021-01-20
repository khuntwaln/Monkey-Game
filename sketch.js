
var monkey , monkey_running;
var bananaImage, obstacle, obstacleImage, ground, groundImage;
var bananaGroup, obstacleGroup;
var score = 0;
var invisibleGround;
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(580,200);
  monkey = createSprite(100,165,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(10,195,580,5);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  invisibleGround = createSprite(10,195,200,5);
  invisibleGround.visible = false;
}

function draw() {
  background("pink");
  banana();
  obstacle();
  if (gameState == PLAY){
  if(keyDown("space") && monkey.y >= 120 ){
  monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleGround);
  if (ground.x < 300){
  ground.x = ground.width/2;
  }
  score = score + Math.round(setFrameRate()/60);
  }
  else if (gameState == END){
  banana.destroyEach(0);
  obstacle.destroyEach(0);
  ground.velocityX = 0;
  obstacleGroup.setVelocityXEach(0);
  bananaGroup.setVelocityXEach(0);
  score = 0;
  }
  drawSprites();
  text("Survival Time: " + score,225,30);
}
function banana(){
  if(frameCount % 80 === 0){
  var banana =     createSprite(580,Math.round(random(10,80)),20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.05;
  banana.velocityX = -2;
  banana.lifetime = 300;
  bananaGroup = createGroup();
  bananaGroup.add(banana);
}
}
function obstacle(){
  if(frameCount % 300 === 0){
  var obstacle = createSprite(580,165,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  obstacle.lifetime = 200;
  obstacleGroup = createGroup();
  obstacleGroup.add(obstacle);
  }
}






