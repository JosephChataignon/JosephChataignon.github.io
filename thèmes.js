/* Les differents thèmes */


function changerTheme(theme) {
    var l = theme.length;
    for( var i = 0; i < l; i++) {
        document.body.style.setProperty(theme[i][0], theme[i][1]);
    }
}


var themeDefaut = [
    ["--topbar-background","#343a40"],
    ["--topbar-color","rgba(255,255,255,.75)"],
    ["--topbar-hover","white"],
    ["--sidenav-background","green"],
    ["--sidenav-color","gray"],
    ["--sidenav-hover","#f1f1f1"],
    ["--sidenav-active","white"],
    ["--footer-background","black"],
    ["--footer-color","darkgray"],
    ["--footer-hover","gray"],
    ["--main-background","white"],
    ["--main-color","black"],
    ["--main-titles","black"],
    ["--main-secondary","gray"]
];


var testtheme = [
    ["--topbar-background","red"],
    ["--topbar-color","yellow"],
    ["--topbar-hover","white"],
    ["--sidenav-background","orange"],
    ["--sidenav-color","yellow"],
    ["--sidenav-hover","#f1f1f1"],
    ["--sidenav-active","white"],
    ["--footer-background","green"],
    ["--footer-color","lightgreen"],
    ["--main-background","yellow"],
    ["--main-color","black"],
    ["--main-titles","black"],
    ["--main-secondary","gray"]
];
