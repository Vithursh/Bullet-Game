
var Wall,Bullet,Speed,Weight, thickness;


function setup() {createCanvas(1600,400); 
  Wall = createSprite(1200,200,thickness,height/2); 
  Bullet = createSprite(50,200,50,5);
  thickness=random(22,83);
  Speed=random(223,321);
  Weight=random(30,52);
  Bullet.velocityX = Speed;
Bullet.shapeColor = "White";
}

function draw() {
  background(0);  
  
   
  

  


if(hasCollided(Bullet, Wall))
{


Bullet.velocityX=0;
var damage=0.5 * Weight * Speed* Speed/(thickness *thickness *thickness);


if(damage>10)
{
    Wall.shapeColor=color(255,0,0);

}



if(damage<10)
{
  Wall.shapeColor=color(0,255,0);
}
  
}



    
  
  drawSprites();
}


function hasCollided(Lbullet, Lwall)
  {
       
     BulletRightEdge=Lbullet.x + Lbullet.width;
     WallLeftEdge=Lwall.x;
     if (BulletRightEdge>=WallLeftEdge)
  {
         return true
  }
return false;

}