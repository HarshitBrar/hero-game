const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var superhero,superImage;
var monster,monsterImage;
var backGround,ground,inground;
var fly;
var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16,block17;
function preload(){
  superImage = loadImage("Superhero-01.png")
  monsterImage = loadImage("Monster-01.png")
  backGround = loadImage("GamingBackground.png")

//preload the images here
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  superhero = new Hero(200,200,30);
  ground = new Ground(500,500,1000,10);
  fly = new Fly(superhero.body,{x:200,y:10});
  block1 = new Block(600,465,40,60);
  block2 = new Block(600,405,40,60);
  block3 = new Block(600,345,40,60);
  block4 = new Block(600,285,40,60);
  block5 = new Block(600,225,40,60);
  block6 = new Block(600,165,40,60);

  block7 = new Block(700,465,40,60);
  block8 = new Block(700,405,40,60);
  block9 = new Block(700,345,40,60);
  block10 = new Block(700,285,40,60);
  block11 = new Block(700,225,40,60);

  block12 = new Block(800,465,40,60);
  block13 = new Block(800,405,40,60);
  block14 = new Block(800,345,40,60);
  block15 = new Block(800,285,40,60);
  block16 = new Block(800,225,40,60);
  block17 = new Block(800,165,40,60);

  monster = new Villain(950,50,30);

  inground = new Ground(950,300,100,10);
  // create sprites here
}

function draw() {
  background(backGround);
  Engine.update(engine);

  superhero.display();
  ground.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();

  monster.display();

  //inground.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}
