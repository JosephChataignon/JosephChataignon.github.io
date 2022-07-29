/* Les differents thèmes graphiques */
function themeDefaut() {
    if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // if dark mode preferred by user
        changerTheme(themeSombre);
        $("#themeSombre.fa-sun").one().removeClass('fa-sun').addClass('fa-moon');
    } else {
        changerTheme(themeClair);
        $("#themeSombre.fa-moon").one().removeClass('fa-moon').addClass('fa-sun');
    }
}

function basculeTheme() {
    if( $("#themeSombre.fa-moon").length == 1 ){
        changerTheme(themeClair);
        $("#themeSombre.fa-moon").one().removeClass('fa-moon').addClass('fa-sun');
    }else{
        changerTheme(themeSombre);
        $("#themeSombre.fa-sun").one().removeClass('fa-sun').addClass('fa-moon');
    }
}

function changerTheme(theme) {
    var l = theme.length;
    for( var i = 0; i < l; i++) {
        document.body.style.setProperty(theme[i][0], theme[i][1]);
        console.log('property changed');
    }
}

var themeClair = [
    ["--normal-text","#eef"],
    ["--accent-text","#ffb300"],
    ["--main1","#4e51e3"],
    ["--main2","#1a1ff2"],
    ["--main3","#0e1195"],
    ["--main4","#060867"],
    ["--main5","#03042f"],
    ["--secondary-text","#001"],
    ["--secondary1","#ffc439"],
    ["--secondary2","#ffb300"],
];

var themeSombre = [
    ["--normal-text","#eef"],
    ["--accent-text","#ffb300"],
    ["--main1","#112"],
    ["--main2","#223"],
    ["--main3","#334"],
    ["--main4","#234"],
    ["--main5","#324"],
    ["--secondary1","#999"],
    ["--secondary2","#888"],
    ["--secondary3","#aaa"],
    ["--secondary4","#aba"],
    ["--secondary5","#bab"]
];





