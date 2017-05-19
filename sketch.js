var x1 = 10;
var y1 = 195;
var x2 = 480;
var y2 = 195;
var xBall = 50;
var speed = 4;
var p1Score = 0;
var p2Score = 0;
var hit = false;
var yBall;
var angle = 0;
var l = 5;
var theBall = {
  x: 50,
  opponent: {
    y: 50
  }
}
var scores = [0 , 0];

function setup() {
  createCanvas(500, 500);
  theBall.y = width / 2;
}

function draw() {
  background(0, 255, 0);
  fill(0);
  rect(249, 0, 2, 500);
  fill(255);
  paddle1y();
  paddle2y();
  ball();
  keepScore(1);
  restart();
  ballSide();
  console.log(ballSide());
}

function paddle1y() {
  rect(x1, y1, 10, 90);
  if (keyIsDown(87) && y1 > 0)
    y1 -= 5;

  if (keyIsDown(83) && y1 + 90 < 500)
    y1 += 5;

  for (var i = 1; i < 91; i += 1) {

  }
}

function paddle2y() {
  rect(x2, y2, 10, 90);
  if (keyIsDown(UP_ARROW) && y2 > 0)
    y2 -= 5;

  if (keyIsDown(DOWN_ARROW) && y2 + 90 < 500)
    y2 += 5;

}

function ball() {

  if (theBall.y < 500) {
    angle = -angle;

  }
  if (theBall.y > 0) {
    angle = -angle

  }

  ellipse(theBall.x, theBall.y, 20, 20);
  theBall.x += speed * cos(radians(angle));
  theBall.y += speed * sin(radians(angle));

  hit1 = collideRectCircle(x1, y1, 10, 90, theBall.x, theBall.y, 20);
  hit2 = collideRectCircle(x2, y2, 10, 90, theBall.x, theBall.y, 20);


  if (hit1)
    if (theBall.y > y1 && theBall.y < y1 + 31) {
      angle = -35;
      speed *= 1.01;
    } else if (theBall.y > y1 + 31 && theBall.y < y1 + 61) {
    speed += 1.01;
    angle = 0;
  } else if (theBall.y > y1 + 61 && theBall.y < y1 + 93) {
    speed *= 1.01;
    angle = 35;
  }

  if (hit2)
    if (theBall.y > y2 && theBall.y < y2 + 31) {
      speed *= 1.01;
      angle = -155;
    } else if (theBall.y > y2 + 31 && theBall.y < y2 + 61) {
    speed *= 1.01;
    angle = 180;
  } else if (theBall.y > y2 + 61 && theBall.y < y2 + 93) {
    speed *= 1.01;
    angle = 155;
  }
}

function keepScore(num) {

  textSize(50);
  text(scores[0], 115, 50);
  textSize(50);
  text(scores[1], 350, 50);

  if (theBall.x > 500) {
    scores[0] += num;

  }
  if (theBall.x < 0) {
    scores[1] += num;
  }
}

function restart() {
  if (theBall.x > 500) {
    theBall.x = 100;

    theBall.y = 250;
    angle = 0;
    speed = 4;
  }
  if (theBall.x < 0) {
    theBall.x = 100;
    angle = 0;
    theBall.y = 250;
    speed = 4;
  }
}

function ballSide(){
  var left = "leftSide";
  var right = "rightSide";
  if(theBall.x < 250){
  return left;
  }
  else {
    return right;
  }
}

