var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  gameObject1 = createSprite(400, 100, 50, 80);
  gameObject1.shapeColor = "green";
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  gameObject1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,gameObject1)

drawSprites();

}

