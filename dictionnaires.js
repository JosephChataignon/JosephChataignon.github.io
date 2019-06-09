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
    btnTheme : "Thème"
};

var en = {
    elmt1 : "a first element",
    elmt2 : "a second element",
    btnLangue : "Langage",
    btnTheme : "Theme"
};

var it = {
    elmt1 : "un primo elemento",
    elmt2 : "un secundo elemento",
    btnLangue : "Lingua",
    btnTheme : "Tema"
};
