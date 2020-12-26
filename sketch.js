const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos = []
var particle;
var yellowline;
var score = 0;
var turn = 0;
var count = 0;
var gameState = "start";

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

//Bodies

  //grounds

    ground = new Ground()

  //divisions & walls

    lwall = new Division(0,400)
    rwall = new Division(480,400)

    division1 = new Division(96,1000)
    division2 = new Division(192,1000)
    division3 = new Division(288,1000)
    division4 = new Division(384,1000)

  //plinkos

  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,75))
  }

  for (var r = 60; r <= width - 50; r=r+50) {
    plinkos.push(new Plinko(r,175))
  }

  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,275))
  }

  for (var r = 60; r <= width - 50; r=r+50) {
    plinkos.push(new Plinko(r,375))
  }

  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,475))
  }

  for (var r = 60; r <= width - 50; r=r+50) {
    plinkos.push(new Plinko(r,575))
  }

}

function draw() {

  background(0,0,0);

  fill(255,255,255)

  text("SCORE : " + score,350,50)

  text("500",40,700)

  text("500",424,700)

  text("500",136,700)

  text("500",324,700)

  text("500",232,700)

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display()
  }

  Engine.update(engine);

  ground.display()

  lwall.display()
  rwall.display()

  division1.display()
  division2.display()
  division3.display()
  division4.display()

  if(particle != null){
    particle.display()
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 300){
        score = score + 500;
        particle = null;
        if(count >= 5){
          gameState = "end";
        }
      }
    }

  }

}

function mousePressed(){
  if(gameState !== "end"){
    count++;
      particle = new Particle(mouseX,10,10)
  }
}