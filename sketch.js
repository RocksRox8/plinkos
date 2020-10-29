function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

ground1= new Ground(400,10);

for(var j=40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75))
}

for (var j = 15; j <=width-10; j=j+50) 
{
  plinkos(new Plinko(j,175));
}

  drawSprites();
}