const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
var topBasketImg,basketImg;
var topBasket,basket;

function preload(){
  backgroundImg = loadImage("background.png");
 fruit=loadImage("melon.png");
 g=loadImage("basket.png");
 topBasketImg=loadImage("tampa.png");
 basketImg=loadImage("cesto.png");
}
function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  basket=Bodies.rectangle(450,490,200,200);

  //Desafio1:
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
//Desafio2
  slingShot = new Slingshot(this.ball,{x:Math.round(random(80,820)),y:Math.round(random(20,350))});

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=.025;

  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(basketImg,basket.position.x,basket.position.y,200,200);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}