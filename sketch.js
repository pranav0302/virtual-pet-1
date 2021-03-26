//Create variables here
var happyDogImg,dogImg;
var database;
var foodStock,foodS;

function preload()
{
 happyDogImg = loadImage("images/happydog.png");
 dogImg = loadImage("images/Dog.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250);
  dog.addImage(dogImg);
 
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
backround(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);

}
  drawSprites();
  textSize(20);
  fill("blue");
  stroke("black");

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<= 0){
    x=0
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

