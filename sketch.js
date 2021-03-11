var a,b;


function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 50);
 b = createSprite(200,100,40,40);
 a.shapeColor = "green";
 b.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  a.x = mouseX;
  a.y = mouseY; 
  console.log(a.y-b.y)
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<45 && a.y-b.y<45 && b.y-a.y<45 ){
    a.shapeColor = "blue";
 b.shapeColor = "yellow";
  }
  else{ 
    a.shapeColor = "green";
 b.shapeColor = "green";
  }
  drawSprites();
}