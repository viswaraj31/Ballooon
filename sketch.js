var database,position;
var b,b1

function preload(){
  b1 = loadImage("b1.png")
}

function setup() {
  createCanvas(600,600);

  database=firebase.database();

  b = createSprite(400, 200, 50, 50);
  b.addImage(b1);
  b.scale=0.3

  database.ref("Balloon/Position").on("value",function (data){
    position=data.val();
    b.x=position.x;
    b.y=position.y;
  })
}

function draw() {
  background(255,255,255); 
  
  if(position != undefined){

  if(keyDown(LEFT_ARROW)){
    update(-2,0);
  }

  if(keyDown(RIGHT_ARROW)){
    update(2,0);
  }

  if(keyDown(UP_ARROW)){
    update(0,-2);
  }

  if(keyDown(DOWN_ARROW)){
    update(0,2);
  }
  
  drawSprites();
}
}

function update(x,y){
  database.ref("Balloon/Position").set({
    x:position.x+x,
    y:position.y+y
  })
}