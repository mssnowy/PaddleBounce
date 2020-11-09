var ball,img,paddle;
var edges;
function preload() {
ballImage = loadImage("ball.png");
paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
paddle = createSprite(385,200,20,50);
paddle.addAnimation("paddle",paddleImage);
ball = createSprite(50,200,20,50);
ball.addAnimation("ball",ballImage);
 ball.velocityX = 9;   

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
ball.bounceOff(edges[0]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]); 


   
  
if (keyWentDown(UP_ARROW)) {
  paddle.velocityY = -5;
}
if (keyWentDown(DOWN_ARROW)) {
  paddle.velocityY = 5;
}
  if (ball.bounceOff(paddle)){
       randomVelocity();
}
 
  drawSprites();
  
}

function randomVelocity() {
var rand = Math.round(random(1,5));
    switch (rand){
      case 1: 
      ball.velocityY = 10;
        break;
      case 2: 
      ball.velocityY = 8;
        break;
      case 3: 
      ball.velocityY = 11;
        break;
      case 4: 
      ball.velocityY = 7;
        break;
      case 5: 
      ball.velocityY = 12;
        break;
        default: break;
    }
  console.log(rand)
}

