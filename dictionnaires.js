/* Les differents dictionnaires et la fonction de traduction */
/* Attention: les noms de variables ne doivent pas comporter de tiret ("-") */


function traduire(langue) {
    $("#btnLangue").html("&nbsp;<div style=\"color: white;\" class=\"spinner-grow\"></div>");
    document.getElementById("btnLangue").style.paddingTop = '0px';
    $(".trad:not(#btnLangue)").each(function(){
        $(this).html( langue[$(this).attr('id')] );
    });
    setTimeout(function () {
        $("#btnLangue").html( langue[$("#btnLangue").attr('id')] );
        document.getElementById("btnLangue").style.paddingTop = '';
    }, 1000);
}


var fr = {
    elmt1 : "un premier élément",
    elmt2 : "un second élément",
    btnLangue : "Langue",
    btnTheme : "Thème",
    hautDePage : "haut de page",
    codeSource : "Ce site a été développé par moi-même, le code source est",
    libreAccesGithub : "en libre accès sur Github"
};

var en = {
    elmt1 : "a first element",
    elmt2 : "a second element",
    btnLangue : "Language",
    btnTheme : "Theme",
    hautDePage : "back to top",
    codeSource : "I created this website by myself, the source code is",
    libreAccesGithub : "freely accessible on Github"
};

var it = {
    elmt1 : "un primo elemento",
    elmt2 : "un secundo elemento",
    btnLangue : "Lingua",
    btnTheme : "Tema",
    hautDePage : "torna all'inizio",
    codeSource : "Questo sito è stato sviluppato da io, il codice sorgente è",
    libreAccesGithub : "liberamente accessibile su Github"
};
