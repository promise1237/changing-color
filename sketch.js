var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(400,300,30,80);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY
  if(movingRect.x - fixedRect.x<fixedRect.width/2 + movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2&&
    fixedRect.y-movingRect.y<fixedRect.width/2 + movingRect.width/2&&
    movingRect.y - fixedRect.y <fixedRect.width/2 + movingRect.width/2) {
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}