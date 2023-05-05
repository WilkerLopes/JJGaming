var nick = $('#nickLogin').val();
var senha = $('#senhaLogin').val();
var save = $('#manterLogin').val();

function changeCard(card) {
    if (card == 1) {
        $(".btnLogin").show();
        $(".btnRegister").hide();

        $(".cardRegister").show();
        $(".cardLogin").hide();

        $(".ladoEsquerdo").show();
        $(".ladoDireito").hide();

    } else {
        $(".btnLogin").hide();
        $(".btnRegister").show();

        $(".cardRegister").hide();
        $(".cardLogin").show()

        $(".ladoEsquerdo").hide();
        $(".ladoDireito").show();
    }
}


function respansiveAnimation() {
    let altura = $(document).height();
    let largura = $(document).width();
    if (largura <= 720) {
        console.log("mode: mobile");
        /*Fundo*/
        $(".lados").css({ "width": "100%", "height": "50%" });
        /*Cards*/
        $(".cards").css({ "width": "80%", "height": "80%" });
        $(".cardLogin").css({ "width": "100%", "border-radius": "10px" });
        $(".cardRegister").css({ "width": "100%", "border-radius": "10px" });
    } else if (largura > 720 & largura <= 1024) {
        console.log("mode: tablet");
        /*Fundo*/
        $(".lados").css({ "width": "100%", "height": "50%" });
        /*Cards*/
        $(".cards").css({ "width": "80%", "height": "80%" });
        $(".cardLogin").css({ "width": "100%", "border-radius": "10px" });
        $(".cardRegister").css({ "width": "100%", "border-radius": "10px" });
    } else {
        console.log("mode: pc");
        /*Fundo*/
        $(".lados").css({ "width": "60%", "height": "100%" });
        /*Cards*/
        $(".cards").css({ "width": "600px", "height": "80%" });
        $(".cardLogin").css({ "width": "50%", "border-radius": "10px 0px 0px 10px" });
        $(".cardRegister").css({ "width": "50%", "border-radius": "0px 10px 10px 0px" });
    }
}
/*
Anotacçoes


*/

function startDraw() {
    respansiveAnimation();


    requestAnimationFrame(startDraw);
}
startDraw();

/*
Passando ao login para outra page
*/
/* Pegadno o valor */
function checkSave() {
    save = localStorage.getItem('toogleSve');
    if (save == "true") {
        autoLogin();
    }
}

function autoLogin() {
    requestLogin();
    $('#nickLogin').val(nick);
    $('#senhaLogin').val(senha);
}

$('#loginBTN').focusout(function() {
    saveLogin();
});

function saveLogin() {
    nick = $('#nickLogin').val();
    senha = $('#senhaLogin').val();
    save = $('#manterLogin').is(':checked');

    localStorage.setItem('nick', nick);
    localStorage.setItem('key', senha);
    localStorage.setItem('toogleSve', save);
}

function requestLogin() {
    nick = localStorage.getItem('nick');
    senha = localStorage.getItem('key');
    save = localStorage.getItem('toogleSve');
}

function clearLogin() {
    localStorage.removeItem('nick');
    localStorage.removeItem('key');
    localStorage.removeItem('toogleSve');
    requestLogin();
}

checkSave();
checkSave();