var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg,endImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var treasureCollection;
treasureCollection = 0;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400, 600);
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //creating boy running
  boy = createSprite(70,540,20,20);
  boy.addAnimation("SahilRunning", boyImg);
  boy.scale=0.08;


  cashG=new Group();
  diamondsG=new Group();
  jewelryG=new Group();
  swordGroup=new Group();

  //boy.setCollider("circle",0,0,200);
}

function draw() {

  if (gameState == PLAY){
        //code to reset the background
    if(path.y > 400 ){
      path.y = height/2;
    }
  
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  

      createCash();
      createDiamonds();
      createjewelry();
      createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection+100;
      }
      else if (diamondsG.isTouching(boy)) {
        diamondsG.destroyEach();
        treasureCollection = treasureCollection+150;            
      }else if(jewelryG.isTouching(boy)) {
        jewelryG.destroyEach();
        treasureCollection = treasureCollection+50;      
      }else{

    if(swordGroup.isTouching(boy)) {
      gameState = END;
      cashG.destroyEach();
      diamondsG.destroyEach();
      jewelryG.destroyEach();
      swordGroup.destroyEach();
      
      boy.addAnimation("SahilRunning", endImg);
      boy.x = 200;
      boy.y = 300;
      boy.scale = 0.6;
      
      }
    }
  

  
  drawSprites();
  textSize(30);
  fill(255);
  stroke("black");
  strokeWeight(5);
  text("Treasure: "+ treasureCollection,140,30);
  
  }
}


function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 250;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 250;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 80 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 250;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 250;
  swordGroup.add(sword);
  }
}