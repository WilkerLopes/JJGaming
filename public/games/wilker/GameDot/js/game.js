var game = document.getElementById("GameDot");
var ctx = game.getContext("2d");

var gravit = 0;
var gravitSpeed = 0.05;

var xp = 0;
var yp = 0;

var limitTot = 0;
var limitLef = 0;
var limitBot = 400;
var limitRig = 700;

$(document).keypress(function (e) {
  var key = e.keyCode;
  if (key == 32) {
    yp -= 25;
    gravit = 0;
  }
});

function draw() {
  ctx.fillStyle = "#258936";
  ctx.fillRect(xp, yp, 25, 25);
  gravit += gravitSpeed;

  if (yp < limitBot - 25) {
    yp += gravit;
  } else {
    gravit = 0;
  }

  console.log("ttt");
}

function clearGame() {
  ctx.clearRect(0, 0, limitRig, limitBot);
}

function updateGame() {
  clearGame();
  draw();

  requestAnimationFrame(updateGame);
}

$(document).ready(updateGame());
