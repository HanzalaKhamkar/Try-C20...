var zenia,tourus,cyclap,wall,zenia_spd,tourus_spd,cyclap_spd,deformation;

function setup() {
  createCanvas(600,400);
  wall = createSprite(570,200,50,400);
  wall.shapeColor = "green";

  zenia = createSprite(0,100,40,20);
  zenia_spd = Math.round(random(20,100));
  zenia.velocityX = zenia_spd;
  zenia.shapeColor = "blue";

  tourus = createSprite(0,200,40,20);
  tourus_spd = Math.round(random(20,100));
  tourus.velocityX = tourus_spd;

  cyclap = createSprite(0,300,40,20);
  cyclap_spd = Math.round(random(20,100));
  cyclap.velocityX = cyclap_spd;
}

function draw() {
  background(255,255,255);  
  zenia.collide(wall);
  tourus.collide(wall);
  cyclap.collide(wall);

  if(wall.x - zenia.x == wall.width/2 + zenia.width/2) {
    deformation = 0.5*zenia_spd*zenia_spd*2260/22500;
    console.log("zenia" + deformation);
    if(deformation > 180) zenia.shapeColor = "red";
    if(deformation > 80 && deformation < 180) zenia.shapeColor = "yellow";
    else if (deformation < 80) zenia.shapeColor = "green"; 
  }

  if(wall.x - tourus.x == wall.width/2 + tourus.width/2) {
    deformation = 0.5*tourus_spd*tourus_spd*2260/22500;
    console.log("tourus" + deformation);
    if(deformation > 180) tourus.shapeColor = "red";
    if(deformation > 80 && deformation < 180) tourus.shapeColor = "green";
    else if(deformation < 80) tourus.shapeColor = "violet";
  }

  if(wall.x - cyclap.x == wall.width/2 + cyclap.width/2) {
    deformation = 0.5*cyclap_spd*cyclap_spd*2260/22500;
    console.log("cyclap" + deformation);
    if(deformation > 180) cyclap.shapeColor = "red";
    if(deformation > 80 && deformation < 180) cyclap.shapeColor = "black";
    else if(deformation < 80) cyclap.shapeColor = "orange"; 
  }
  drawSprites();
}