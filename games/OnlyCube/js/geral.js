var optsBarra = false;
var lvl = expMax = expAtual = progressoExp = 5;
var setaCima = "keyboard_arrow_up";
var setaBaixo = "keyboard_arrow_down";
var i = 1;
var opemInv = false;

function opemopts() {
    if (optsBarra) {
        $('.opts').css({ "display": "none" });
        $('.nick-opts').css({ "transform": "rotate(0deg)" });
        optsBarra = false;
    } else {
        $('.opts').css({ "display": "block" });
        $('.nick-opts').css({ "transform": "rotate(180deg)" });
        optsBarra = true;
    }
}

function experiencia(xp) {
    expAtual += xp;
    if (lvl == 0) {
        expMax = 125;
    }
    if (expAtual >= expMax) {
        expAtual -= expMax;
        expMax = Math.round(expMax * 1.5);
        lvl++;
        expAtual
        $('.lvl').text("lvl: " + lvl);
        console.log(expMax);
    }
    progressoExp = (expAtual / expMax) * 100;
    if (progressoExp > 100) {
        progressoExp -= 100;
        lvl++;
        $('.progresso').css({ "width": progressoExp + "%" });
    } else {
        $('.progresso').css({ "width": progressoExp + "%" });
    }
}



function opemInventory() {
    if (!opemInv) {
        $('.inventario').css({ "display": "block" });
        opemInv = true;
    } else {
        $('.inventario').css({ "display": "none" });
        opemInv = false;
    }
}

$(document).ready(function() {
    $(document).keypress(function(e) {
        var key = e.keyCode;
        if (key == 101) {
            opemInventory()
        }
    })
})

function inventoryCreate() {
    while (i <= 40) {
        //<div class="itens item1"></div>
        $('.boxItens').append("<div class='itens item" + i + "'></div>");
        i++;
    }
}

inventoryCreate();