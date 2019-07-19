/* Les differents thèmes */


function changerTheme(theme) {
    var l = theme.length;
    for( var i = 0; i < l; i++) {
        document.body.style.setProperty(theme[i][0], theme[i][1]);
    }
}

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
    ["--main-background","white"],
    ["--main-color","black"],
    ["--main-titles","#324009"],
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
