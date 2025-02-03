"use strict";

var cn = document.getElementById("canvas");
var cx = cn.getContext("2d");

//images
var butterfly = new Image();
var bg = new Image();
var fg = new Image();
var pillarUp = new Image();
var pillarDown = new Image();

butterfly.src = "https://cdn.glitch.global/fdf6058e-73c2-42ca-8d01-e253e1a6e82b/BUTTERFLY.png?v=1734622012979"
bg.src = ""
fg.src = ""
pillarUp.src = "https://cdn.glitch.global/fdf6058e-73c2-42ca-8d01-e253e1a6e82b/pastaNoodle.png?v=1734765128686"
pillarDown.src = ""

//variables
var gap = 85;
var constant;
var bX = 10;
var bY = 150;
var gravity = 1.5;
var score = 0;

//audio
var fly = new Audio();
var point = new Audio();

fly.src = ""
point.src = ""

//on down key
document.addEventListener("keydown", moveUp)

function moveUp() {
  bY -= 25;
  
  fly.play();
}

//pipe
var pipe = [];
pipe[0] = {
  x: cn.width,
  y: 0,
};
// draw images
function draw() {
  cx.drawImage(bg, 0, 0);
  for (var i = 0; i < pipe.length; i++) {
    constant = pillarUp.height + gap;
    cx.drawImage(pillarUp, pipe[i].x, pipe[i].y);
    cx.drawImage(pillarUp, pipe[i].x, pipe[i].y + constant);
    pipe[i].x--;
    if (pipe[i].x == 125) {
      pipe.push({
      x : cn.width,
        y: Math.floor(Math.random() * pillarUp.height) - pillarUp.height,
      });
    }
    // detect collision
    if (
      (bX + butterfly.width >= pipe[i].x &&
        bX <= pipe[i].x + pillarUp.width &&
        (bY <= pipe[i].y + pillarUp.height ||
          bY + butterfly.height >= pipe[i].y + constant)) ||
      bY + butterfly.height >= cn.height - fg.height
    ) {
      location.reload(); // reload the page
    }
    if (pipe[i].x == 5) {
      score++;
      point.play();
    }
  }
  cx.drawImage(fg, 0, cn.height - fg.height);
  cx.drawImage(butterfly, bX, bY);
  bY += gravity;
  cx.fillStyle = "#000";
  cx.font = "20px Verdana";
  cx.fillText("Score : " + score, 10, cn.height - 20);
  requestAnimationFrame(draw);
}
draw();