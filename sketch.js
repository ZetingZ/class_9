var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
  if(keyDown("a")){
    ball.x += -3
  }  
  if(keyDown("d")){
    ball.x += 3
  }
  if(keyDown("w")){
    ball.y += -3
  }
  if(keyDown("s")){
    ball.y += 3
  }
  drawSprites()
}

