
var gameState = 0;
var form ;
var introSound;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17;
var wall18,wall19,wall20,back_Img,newBack_Img;
var player,walls;
function preload(){

  introSound = loadSound("alien-spaceship_daniel_simion.mp3");
  back_Img= loadImage("background.jpg");

  newBack_Img=loadImage("backImage.jpg");
}
function setup(){

  createCanvas(displayWidth- 20,displayHeight-20)

  form = new Form();

}
function draw(){

  background(back_Img);

  if(gameState === 0){
    form.display();
  }
  if(gameState === 1){
    maze();
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 10;
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x - 10;
  }
  if(keyIsDown(UP_ARROW)){
    player.y = player.y - 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y = player.y + 10;
  }
 /* if(player.isTouching(walls)){
    player.x = 70;
    player.y = 70;
  }*/
  drawSprites();
}

function maze(){

  background(newBack_Img);

  wall1 = createSprite(100,displayHeight/2-100,20,600);
  wall2= createSprite(200,displayHeight/2 + 100,20,700);
  wall3 = createSprite(300,displayHeight/2 - 100 , 20 , 700);
  wall4= createSprite(400,displayHeight/2 + 100,20,700);
  wall5= createSprite(500,displayHeight/2 - 100,20,700);
  wall6= createSprite(600,displayHeight/2 + 100,20,700);
  wall7= createSprite(700,displayHeight/2 - 100,20,700);
  wall8= createSprite(800,displayHeight/2 + 100,20,700);
  wall9= createSprite(900,displayHeight/2 - 100,20,700);
  wall10= createSprite(1000,displayHeight/2 + 100,20,700);
  wall11= createSprite(1100,displayHeight/2 - 100,20,700);
  wall12= createSprite(1200,displayHeight/2 + 100,20,700);
  wall13= createSprite(1300,displayHeight/2 - 100,20,700);
  wall14= createSprite(1400,displayHeight/2 + 100,20,700);

}