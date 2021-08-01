
var score=0;
var PLAY=0;
var gameState = 0;
var scene, girl,girlImg, ground;
var bone, crate, greenbox, tree, saw, spike, bone1;
var jellyImg1, jellyImg2, jellyImg3, jellyImg4, jellyImg5, jellyImg6;
var obstacleImg1, obstacleImg2, obstacleImg3, obstacleImg4, obstacleImg5, obstacleImg6, obstacleImg7;
var bgImg;


function preload()
{
  bgImg = loadImage('images/background_img.jpg');
  
  girlImg = loadAnimation('images/Run (1).png','images/Run (2).png','images/Run (3).png','images/Run (4).png','images/Run (5).png','images/Run (6).png','images/Run (7).png','images/Run (8).png','images/Run (9).png','images/Run (10).png','images/Run (11).png','images/Run (12).png','images/Run (13).png','images/Run (14).png','images/Run (15).png','images/Run (16).png','images/Run (17).png','images/Run (18).png','images/Run (19).png','images/Run (20).png');

  jellyImg1 = loadImage('images/Jelly (1).png');
  jellyImg6 = loadImage('images/Jelly (6).png');
  jellyImg2 = loadImage('images/Jelly (2).png');
  jellyImg3 = loadImage('images/Jelly (3).png');
  jellyImg4 = loadImage('images/Jelly (4).png');
  jellyImg5 = loadImage('images/Jelly (5).png');
  
  obstacleImg1 = loadImage('images/Bone (2).png');
  obstacleImg2 = loadImage('images/Bone (3).png');
  obstacleImg3 = loadImage('images/Crate.png');
  obstacleImg4 = loadImage('images/Green Box.png');
  obstacleImg5 = loadImage('images/Saw.png');
  obstacleImg6 = loadImage('images/Spike.png');
  obstacleImg7 = loadImage('images/Tree.png');

  
}

function setup() {
  createCanvas(700, 800);
  
  //creating background
  scene = createSprite(200,200,400,400);
  scene.addImage(bgImg);
  scene.velocityX = -8;
  scene.x = scene.width / 2;

  //creating girl sprite, adding animation and scaling sprite
  girl = createSprite(57,328,10,10);
  girl.addAnimation("girlRun",girlImg);
  girl.scale = 0.45;
  girl.setCollider("circle",0,0,220);
  girl.debug = true;
  
  //creating ground sprite and adding color to the sprite
  ground = createSprite(5,391,900,10);
  ground.shapeColor = "brown";

  //adding the velocity, make the ground half and make the ground invisible
  ground.velocityX = -8;
  ground.x=ground.width/2;
  ground.visible=false;
}
function draw() 
{
  //make the girl jump and adding jump sound
  if(keyWentDown("up"))
    {
      girl.velocityY = -12;
      //playSound("sound://category_jump/arcade_game_jump_18.mp3");
      
    }

  //add gravity
  girl.velocityY = girl.velocityY + 0.8;

  //collide the girl to the ground
  girl.collide(ground);

//making the moving background
  if(scene.x < 250)
      {
      scene.x=scene.width/2 ; 
      }
      
      if(gameState=PLAY)
      {
        //playSound("jazzy_beats.mp3");  
  }
    
  //maing the moving ground
  if(ground.x <0)
  {
    ground.x=ground.width/2 ; 
  }
    earnPoints();
    loosePoints();      
      
  drawSprites();
  textStyle("bold");
  fill("black");
  textSize(25);
  text("Score: "+score, 460,35);

}

function earnPoints()
{
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3 * frameCount / 50);
    obstacle.collide(ground);
    
    //generate random obstacles
    var rand = Math.random(1,5);
    switch (rand) {
      case 1: obstacle.addImage(jellyImg1);
              obstacle.scale = 0.2;
              
        break;
      case 2: obstacle.addImage(jellyImg2);
              obstacle.scale = 0.2;
              
        break;
        case 3: obstacle.addImage(jellyImg3);
              obstacle.scale = 0.2;
              
        break;
        case 4: obstacle.addImage(jellyImg4);
              obstacle.scale = 0.2;
              
        break;
        case 5: obstacle.addImage(jellyImg5);
              obstacle.scale = 0.2;
              
        break;
        case 6: obstacle.addImage(jellyImg6);
              obstacle.scale = 0.2;
              
        break;
      default: break;
      
    }
    
     if(girl.isTouching(obstacle))
      {
        score = score+1;
        //obstacle.visible=false;
      }
    } 
  }
  

  
function loosePoints()
{
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(200,365,10,40);
    obstacle.velocityX = - (6 + 3*frameCount/200);
    obstacle.collide(ground);
    
    //generate random obstacles
    var rand = Math.random(6, 11);
     switch (rand) {
      case 1: obstacle.addImage(obstacleImg1);
              obstacle.scale = 0.2;
              
        break;
      case 2: obstacle.addImage(obstacleImg2);
              obstacle.scale = 0.2;
              
        break;
        case 3: obstacle.addImage(obstacleImg3);
              obstacle.scale = 0.2;
        break;
        case 4: obstacle.addImage(obstacleImg4);
              obstacle.scale = 0.2;
              
        break;
        case 5: obstacle.addImage(obstacleImg5);
              obstacle.scale = 0.2;
             
        break;
        case 6: obstacle.addImage(obstacleImg6);
              obstacle.scale = 0.2;
              
        break;
        case 7: obstacle.addImage(obstacleImg7);
              obstacle.scale = 0.2;
              
        break;
      default: break;
      
    }  
    
    if(girl.isTouching(obstacle)){
      score = score-1;
      //obstacle.visible=false;
    }   
  } 
}



