var imgPerfil = [
    "assets/charter/Portraits2_01.png",
    "assets/charter/Portraits2_01.png",
    "assets/charter/Portraits2_02.png",
    "assets/charter/Portraits2_03.png",
    "assets/charter/Portraits2_04.png",
    "assets/charter/Portraits2_05.png",
    "assets/charter/Portraits2_06.png",
    "assets/charter/Portraits2_07.png",
    "assets/charter/Portraits2_08.png",
    "assets/charter/Portraits2_09.png",
    "assets/charter/Portraits2_10.png",
    "assets/charter/Portraits2_11.png",
    "assets/charter/Portraits2_12.png",
    "assets/charter/Portraits2_13.png",
    "assets/charter/Portraits2_14.png",
    "assets/charter/Portraits2_15.png",
    "assets/charter/Portraits2_16.png",
    "assets/charter/Portraits2_17.png",
    "assets/charter/Portraits2_18.png",
    "assets/charter/Portraits2_19.png",
    "assets/charter/Portraits2_20.png",
    "assets/charter/Portraits2_21.png",
    "assets/charter/Portraits2_22.png",
    "assets/charter/Portraits2_23.png",
    "assets/charter/Portraits2_24.png",
    "assets/charter/Portraits2_25.png",
    "assets/charter/Portraits2_26.png",
    "assets/charter/Portraits2_27.png",
    "assets/charter/Portraits2_28.png",
    "assets/charter/Portraits2_29.png",
    "assets/charter/Portraits2_30.png"
];
var fundoPerfil = [
    "dell",
];

var bordasPerfil = [
    "assets/bordas/Border_01.svg",
    "assets/bordas/Border_01.svg",
    "assets/bordas/Border_02.svg",
    "assets/bordas/Border_03.svg",
    "assets/bordas/Border_04.png"
];

function writeImgs() {
    var nBg = 40;
    var nBo = 30;
    var nPe = 4;

    for (let contBg = 1; contBg <= nBg; contBg++) { fundoPerfil.push("assets/backgrounds/fundoPerfil/mb-bg-fb-" + ("00" + contBg).slice(-2) + ".png") }

}

var colorsPerfil = [
    "#0d0d0d", //base
    /* >> 01 << */
    "#FFFFFF", //bacground
    "#AEAEAE", //border 
    "#E64C66", //contraste 02
    "#2D3E50", //contraste 01
    "#1BBC9B", //color

    /* >> 02 << */
    "#121926", //bacground
    "#324759", //border 
    "#63BBF2", //contraste 02
    "#5A98BF", //contraste 01
    "#72E5F2", //color

    /* >> 03 << */
    "#BF3459", //bacground
    "#04BFBF", //border 
    "#038C4C", //contraste 02
    "#F2C438", //contraste 01
    "#403923", //color

    /* >> 04 << */
    "#0540F2", //bacground
    "#275AF2", //border 
    "#578BF2", //contraste 02
    "#F2F2F2", //contraste 01
    "#0D0D0D", //color

    /* >> 05 << */
    "#F2F2F2", //bacground
    "#D9D9D9", //border 
    "#8C8C8C", //contraste 02
    "#595959", //contraste 01
    "#0D0D0D", //color

    /* >> 06 << */
    "#BF8756", //bacground
    "#8C0303", //border 
    "#400101", //contraste 02
    "#260101", //contraste 01
    "#D90D0D", //color

    /* >> 07 << */
    "#D91E50", //bacground
    "#BF215B", //border 
    "#032059", //contraste 02
    "#021740", //contraste 01
    "#021D40", //color

    /* >> 08 << */
    "#021740", //bacground
    "#021D40", //border 
    "#032059", //contraste 02
    "#BF215B", //contraste 01
    "#D91E50" //color

    /*
    New Colors
#D91E50
#BF215B
#032059
#021740
#021D40




    */
];


function perfis() {
    for (let i = 1; i <= (imgPerfil.length) - 1; i++) {
        $('.boxPerfis').prepend("<div onclick='alterImgPerfil(" + i + ")' class='perfisBox'><img src='" + imgPerfil[i] + "' alt=''></div>");
    }
}

function fundos() {
    for (let f = 1; f <= (fundoPerfil.length) - 1; f++) {
        $('.boxBgs').prepend("<div onclick='alterFundo(" + f + ")' class='bgBox'><img src='" + fundoPerfil[f] + "' alt=''></div>");
    }
}

function bordas() {
    for (let b = 1; b <= (bordasPerfil.length) - 1; b++) {
        $('.boxBorders').prepend("<div onclick='alterBorder(" + b + ")' class='borderBox'><img src='" + bordasPerfil[b] + "' alt=''></div>");
    }
}

function colors() {
    for (let c = 1; c <= ((colorsPerfil.length) - 1) / 5; c++) {
        $('.boxColors').prepend("<div onclick='alterColor(" + c + ")' class='colorBox col" + c + "'><div></div><div></div><div></div><div></div><div></div></div>");
        let col = 5 * c;
        for (let ordem = 1; ordem <= 5; ordem++) {
            $(".col" + c + " div:nth-child(" + ordem + ")").css({ "background-color": colorsPerfil[col] });
            col--;
        }
    }
}

function alterImgPerfil(perfil) {
    $('.perfilView').css({ "background-image": "url(" + imgPerfil[perfil] + ")" })
}

function alterFundo(fundo) {
    $('.backgroundPerfil').css({ "background-image": "url(" + fundoPerfil[fundo] + ")" })
}

function alterBorder(borda) {
    $('.bordaPerfil').css({ "background-image": "url(" + bordasPerfil[borda] + ")" })
}

function alterColor(color) {
    let col = 5 * color;
    for (let ordem = 1; ordem <= 5; ordem++) {

        let colNuber = "--bg-col-0" + ordem;
        console.log(colNuber + ":" + colorsPerfil[col]);
        $(':root').css(colNuber, colorsPerfil[col]);
        col--;
    }
}

function toastFavorite(game) {
    var toastHTML = "";
    switch (game) {
        case 1:
            toastHTML = '<div class="tostFavorite tf01" ><span> OlyCube </span> favoritado <i class="material-icons">favorite</i></div>';
            break;
        case 2:
            toastHTML = '<div class="tostFavorite tf02" ><span> Neon </span> favoritado <i class="material-icons">favorite</i></div>';
            break;
        case 3:
            toastHTML = '<div class="tostFavorite tf03" ><span> RuStick </span> favoritado <i class="material-icons">favorite</i></div>';
            break;
        case 4:
            toastHTML = '<div class="tostFavorite tf04" ><span> Plane </span> favoritado <i class="material-icons">favorite</i></div>';
            break;
        case 5:
            toastHTML = '<div class="tostFavorite tf05" ><span> Fearlessly </span> favoritado <i class="material-icons">favorite</i></div>';
            break;
    }
    M.toast({ html: toastHTML, classes: 'rounded' });
}

$(".buttonFavorite i").click(function() {
    $(this).css({ "color": "E61007" });
});

function playGame(game) {
    window.location.href = game;
}

function movePage(page) {
    console.log(page);
    setTimeout(function() { $(".animationTransition").css({ "transition": "all 0s", "transform": "translateY(-100%)" }); }, 5);
    setTimeout(function() { $(".animationTransition").css({ "transition": "all 2s", "transform": "translateY(100%)" }); }, 10);
    setTimeout(function() { window.location.href = page; }, 600);
    setTimeout(function() { $(".animationTransition").css({ "transition": "all 0s", "transform": "translateY(-100%)" }); }, 2500);
}

function start() {
    requestLogin();
    writeImgs();
    perfis();
    fundos();
    bordas();
    colors();

}

function savePerfil() {
    var perfil = localStorage.setItem('', imgPerfil[0]);
}

function requestLogin() {
    var nick = localStorage.getItem('nick');
    var senha = localStorage.getItem('key');
    var save = localStorage.getItem('toogleSve');
    var status = "Ovo Jogar"
    $('#nickName').text(nick);
    $('#nickNameEdit').text(nick);
    $('#statusPlayer').text(status);
    $('#statusPlayerEdit').text(status);
}

start();