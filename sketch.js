var bullet , wall
    
 
var weight,speed;



function setup() {
 createCanvas(1600,400);
background("black");

speed=random(55,90)
weight=random=(1500,400) 

 bullet = createSprite(50,200,50,50);
  
 wall=createSprite(1500,200,60,height/2);
 wall.shapColor=(80,80,80)
 bullet.velocity= speed ;
}

 {
bullet.velocity=0
var deformation=0.5 *weight*speed*speed/22500;
if (deformation>180)
{

bullet.shapeColor=color(255,0,0)

}


if (deformation>180 && deformation>100) 
{

bullet.shapeColor=color(230,230,0)

}

if ( deformation>100) 
{

bullet.shapeColor=color(0,255,0)



}

 }


var bullet , wall
    
 
var weight,speed;



function setup() {

 

 if (war.x-bullet.x<(bullet.width+wall.width)/2)
 {
bullet.velocity=0
var deformation=0.5 *weight*speed*speed/22500;
if (deformation>180)
{

bullet.shapeColor=color(255,0,0)

}


if (deformation>180 && deformation>100) 
{

bullet.shapeColor=color(230,230,0)

}

if ( deformation>100) 
{

bullet.shapeColor=color(0,255,0)
}
 }
}

