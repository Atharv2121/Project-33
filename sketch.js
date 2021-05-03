var c1, cImages
var s1,s2, s1Image, s2Image
var s1Group, s2Group
var bg
function preload(){
bg=loadImage("snow1.jpg");
cImages=loadAnimation("c1.png","c2.png","c3.png","c4.png");
s1Image=loadImage("snow4.webp");
s2Image=loadImage("snow5.webp")
}

function setup() {
  createCanvas(1000,500);
  c1= createSprite(150, 300, 50, 50);
  c1.addAnimation("boy",cImages);
  c1.scale=0.3

}

function draw() {
  background(bg);  

if(keyDown("RIGHT_ARROW")){
c1.velocityX=3;
}
if(keyDown("SPACE")){
  c1.velocityX=0;
}
if(keyDown("LEFT_ARROW")){
  c1.velocityX=-3;
}
if(keyDown("UP_ARROW")){
c1.velocityY=-4;
fill("Green");
textSize(30)
text("I AM FLYING! YAY!",350,100)
}

fill("Maroon");
textSize(20);
text("Move Using right,left Arrow Keys and press Space to Stop the kid.Press up arrow to make the kid fly",10,50);
snow1();
snow2();
  drawSprites();
}

function snow1(){
 if(frameCount%40===0){
  s1=createSprite(Math.round(random(20,780)),Math.round(random(-10,50)),10,10);
  s1.velocityY=1
  s1.addImage(s1Image)
  s1.scale=0.1
  s1.lifetime=410
 }
}

function snow2(){
  if(frameCount%30===0){
   s2=createSprite(Math.round(random(20,780)),Math.round(random(-10,50)),10,10);
   s2.velocityY=1
   s2.addImage(s2Image)
   s2.scale=0.1
   s2.lifetime=410
  }
 }