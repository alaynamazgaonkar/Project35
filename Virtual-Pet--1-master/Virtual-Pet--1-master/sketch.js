//Create variables here
var database;
var dog1,dog2;
var foodnum,foodCount=0;

function preload()
{
  //load images here
  dog1=loadImage("images/dogImg1.png")
  dog2=loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(800, 700);
  database= firebase.database();
  var foodnum=database.ref("food") 
  foodnum.on("value",function(data){
  foodCount = data.val() })

  dog= createSprite(400,500,50,50)
  dog.addImage("dog",dog1)
  dog.scale=0.3
  
  //food= createSprite(400,300,50,70)

 }


 function draw() {  
  console.log(foodCount)
background("white")

  if(keyDown("space")){
  foodCount=foodCount-1
  update(foodCount)
  
  }

  if(foodCount<1){
    foodCount=20;
    update(foodCount)
  }


  
  drawSprites();
  //add styles here
  textSize(30)
  text("food:"+foodCount,400,100)
 }

 function update(foodCount){
  database.ref("/").update({
  food:foodCount})
  } 