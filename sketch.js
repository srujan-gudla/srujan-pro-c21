var sun,mercury,venus,mars,earth,jupiter,saturn,uranus,neptune;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg;
var angle = 0;
var anglespeed = 0.2;
var sunRadius;
function preload() {
  sunImage = loadImage("u.png");
  mercuryImage = loadImage("me.png");
  venusImage = loadImage("ve.png");
  earthImage = loadImage("e.png");
  marsImage = loadImage("m.png");
  jupiterImage = loadImage("ju.png");
  saturnImage = loadImage("s.jpg");
  uranusImage = loadImage("n.jpg");
  neptuneImage = loadImage("ep.png");


}

function setup() {
    createCanvas(800, 800);
    sun = createSprite(0, 0);
    sun.addImage("sun", sunImage);
    sun.setCollider("circle", -85, -60, 140);
    sun.scale = 0.3;
    
    

    mercury = createSprite(70, 50);
    mercury.addImage("mercury", mercuryImage);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 300);
    mercury.debug=true;

    venus = createSprite(210, 60);
    venus.addImage("venus", venusImage);
    venus.scale = 0.15;
    venus.setCollider("circle",0,0,300);
    venus.debug=true;

    earth = createSprite(150, -18);
    earth.addImage("earth", earthImage);
    earth.scale = 0.22;
    earth.debug=true;

    mars = createSprite(30, 220);
    mars.addImage("mars", marsImage);
    mars.scale = 0.2;
    mars.debug=true;

    jupiter = createSprite(-180, 210);
    jupiter.addImage("jupiter", jupiterImage);
    jupiter.scale = 0.3;
    jupiter.debug=true;

    saturn = createSprite(340, -30);
    saturn.addImage("saturn", saturnImage);
    saturn.scale = 0.3;
    saturn.debug=true;

    uranus = createSprite(220, 350);
    uranus.addImage("uranus", uranusImage);
    uranus.scale = 0.2;
    uranus.debug=true;

    neptune = createSprite(-340, -320);
    neptune.addImage("neptune", neptuneImage);
    neptune.scale = 0.1;
    neptune.debug=true;

}

function draw() {
    background(0);
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);
    if (sun.collide(mercury)) {
      mercury.destroy();
  }
  if (sun.collide(venus)) {
    venus.destroy();
  }
  if (sun.collide(earth)) {
    earth.destroy();
  }
  if (sun.collide(mars)) {
    mars.destroy();
  }
  if (sun.collide(jupiter)) {
    jupiter.destroy();
  }
  if (sun.collide(saturn)) {
    saturn.destroy();
  }
  if (sun.collide(uranus)) {
    uranus.destroy();
  }
  if (sun.collide(neptune)) {
    neptune.destroy();
  }
    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        sun.scale = sun.scale + 0.01;
    }
    drawSprites();
} 
