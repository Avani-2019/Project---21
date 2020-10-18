function setup() 
{
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,80,10);
  wall = createSprite(1200,200,thickness,height/2);

  wall.shapeColor = "grey";
  bullet.shapeColor = "white";
  bullet.velocityX = 4.5;
}
var bullet,wall,speed,weight,thickness;

function draw() {
  background("black"); 

  if(isTouchingRight(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/( thickness * thickness * thickness );
    
    if(damage > 10)
    {
      wall.shapeColor = "red";
    }

    if(damage < 10)
    {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}



