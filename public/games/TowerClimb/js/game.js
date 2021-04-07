var score = 0;
var altura = 0;
var moveSpeed = 0.5;
var moreSpeed = 0.01;
var jump = 100;
var windowNumbers = 0;
var ladoEsq = [];
var ladoDir = [];
var ladoPlayer = 0;
$(document).keypress(function(e) {
    var key = e.keyCode;
    if (key == 32) {
        yp -= 25;
        gravit = 0;
    }
});
/*
left: calc(50 % -(100 px + 25 px));
left: calc(50% + 100px)
*/
function moveDir() {
    $(".player").css({ "left": "calc(50% + 100px)", "transform": "rotateY(180deg)" });
    ladoPlayer = 1;
    up();
}

function moveEsq() {
    $(".player").css({ "left": "calc(50% - (100px + 25px))", "transform": "rotateY(0deg)" });
    ladoPlayer = 0;
    up();
}

function up() {
    altura -= jump;
    $(".windows").css({ "bottom": altura });
    if (ladoPlayer == 0) {
        if (ladoEsq[0] == 1) {
            loseGame();
        }
    } else {
        if (ladoDir[0] == 1) {
            loseGame();
        }
    }
    poits(25);
    ladoDir.splice(0, 1);
    ladoEsq.splice(0, 1);
    windowGen(1);
    windowDel();
    console.log(ladoDir);
    console.log(ladoEsq);
}


function poits(value) {
    score += value;
    $(".score .value").text(score);
    $(".scoreFinish").text(score);
}


function windowGen(moreGemW) {
    for (let w = 1; w <= moreGemW; w++) {
        windowNumbers++;
        let lado = (Math.random()) * 100;
        if (lado >= 50) {
            ladoEsq.push(1);
            ladoDir.push(0);
            $(".windows").append("<div class='window w" + windowNumbers + "' style='bottom: " + jump * windowNumbers + "; left: calc(50% - (100px + 40px))'></div>");
        } else {
            ladoEsq.push(0);
            ladoDir.push(1);
            $(".windows").append("<div class='window w" + windowNumbers + "' style='bottom: " + jump * windowNumbers + "; left: calc(50% + 100px );transform: rotateY(180deg);'></div>");
        }
    }
}

function windowDel() {
    let delW = windowNumbers - 11;
    $(".w" + delW).remove();
}

function loseGame() {
    $(".gameControl").hide();
    $(".score").hide();
    $(".loseGame").show();
}

windowGen(10);

function startGame() {
    moveFundo();
    requestAnimationFrame(startGame);
}