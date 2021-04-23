/* Les differents thèmes */
function basculeTheme() {
    if( $("#themeSombre.fa-moon").length == 1 ){
        changerTheme(themeClair); console.log('111');
        $("#themeSombre.fa-moon").one().removeClass('fa-moon').addClass('fa-sun');
    }else{
        changerTheme(themeSombre); console.log('222');
        $("#themeSombre.fa-sun").one().removeClass('fa-sun').addClass('fa-moon');
    }
}

function changerTheme(theme) {
    var l = theme.length;
    for( var i = 0; i < l; i++) {
        document.body.style.setProperty(theme[i][0], theme[i][1]);
    }
}

var themeClair = [
    ["--main1","#4e51e3"],
    ["--main2","#1a1ff2"],
    ["--main3","#0e1195"],
    ["--main4","#060867"],
    ["--main5","#03042f"],
    ["--secondary1","#ffc439"],
    ["--secondary2","#ffb300"],
    ["--secondary3","#d69600"],
    ["--secondary4","#fbd300"],
    ["--secondary5","#c29d3d"]
];

var themeSombre = [
    ["--main1","#111"],
    ["--main2","#222"],
    ["--main3","#333"],
    ["--main4","#232"],
    ["--main5","#323"],
    ["--secondary1","#999"],
    ["--secondary2","#888"],
    ["--secondary3","#aaa"],
    ["--secondary4","#aba"],
    ["--secondary5","#bab"]
];

var themeVert = [
    ["--topbar-background","green"],
    ["--topbar-color","rgba(255,255,255,.75)"],
    ["--topbar-hover","white"],
    ["--sidenav-background","#9c0"],
    ["--sidenav-color","#470"],
    ["--sidenav-hover","#cffc80"],
    ["--sidenav-active","white"],
    ["--footer-background","#1E3B06"],
    ["--footer-color","#749E26"],
    ["--footer-hover","#84AE36"],
    ["--main-background","#eeffc0"],
    ["--main-background-light","whitesmoke"],
    ["--main-color","black"],
    ["--main-titles","#324009"],
    ["--main-important","#356530"],
    ["--main-secondary","gray"],
    ["--main-introduction","lightyellow"],
    ["--buttons-color","white"],
    ["--buttons-background","#7b5"]
];

var themeNoirEtBlanc = [
    ["--topbar-background","#343a40"],
    ["--topbar-color","rgba(255,255,255,.75)"],
    ["--topbar-hover","white"],
    ["--sidenav-background","#333"],
    ["--sidenav-color","gray"],
    ["--sidenav-hover","#aaa"],
    ["--sidenav-active","white"],
    ["--footer-background","black"],
    ["--footer-color","darkgray"],
    ["--footer-hover","gray"],
    ["--main-background","white"],
    ["--main-color","black"],
    ["--main-titles","black"],
    ["--main-secondary","gray"]
];


var themeAutomne = [
    ["--topbar-background","#ff5905"],
    ["--topbar-color","rgba(255,255,255,.75)"],
    ["--topbar-hover","white"],
    ["--sidenav-background","#ffb405"],
    ["--sidenav-color","#e03a0e"],
    ["--sidenav-hover","white"],
    ["--sidenav-active","#e61a00"],
    ["--footer-background","#ffde1e"],
    ["--footer-color","#e59103"],
    ["--footer-hover","#f78700"],
    ["--main-background","white"],
    ["--main-color","black"],
    ["--main-titles","#ff5905"],
    ["--main-secondary","#d36a18"]
];
