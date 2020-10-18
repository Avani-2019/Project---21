function GoalBorders()
{
  border1 = createSprite(500, 150, 980, 10);
  border2 = createSprite(500, 300, 980, 10);
  border3 = createSprite(500, 450, 980, 10);

  border1.shapeColor = "white";
  border2.shapeColor = "white";
  border3.shapeColor = "white";

  Goal1 = createSprite(950,75,15,55);
  Goal2 = createSprite(950,225,15,55);
  Goal3 = createSprite(950,375,15,55);
  Goal4 = createSprite(950,525,15,55);
}

function isTouchingRight(object1,object2)
{
  if(object2.x - object1.x < object1.width/2 + object2.width/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}