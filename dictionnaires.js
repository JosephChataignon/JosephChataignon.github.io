/* La fonction de traduction */
/* Attention: les noms de variables ne doivent pas comporter de tiret ("-") */

function langueDefaut(){
    /*Attention: ne renvoie qu'un string et pas un des objets dictionnaires*/
    /*Ecrire traduire(window[langueDefaut()]) pour traduire*/
    languesImplementees = ["fr","en","it"];
    langue = navigator.language.toLowerCase();
    langueCode = langue.substring(0, 2);
    /*chinois: if(langueCode == "zh"){if langue.search("hans"){simplified}else{traditionnal}}*/
    if(Object.keys(dictionnaires).indexOf(langueCode) != -1){
        return langueCode;
    }else{return "en";}
}

function traduire(langue, spinner) {
    
    /* start spinner */
    if(spinner==null){
        try{
            $("#btnLangue").html("&nbsp;<div style=\"color: white;\" class=\"spinner-grow\"></div>");
            document.getElementById("btnLangue").style.paddingTop = '0px';
        }catch(error){console.log('pas de div #btnLangue')}
    }
    $(".trad:not(#btnLangue)").each(function(){
        try{
            $(this).html( dictionnaires[langue][$(this)[0]['id']] );
        } catch(e) {console.log(e); console.log("Mot non trouvé dans le dictionnaire")};
    });
    try{
        remplacerAge();
    }catch(e) {console.log("div age non trouvée.");}
    setTimeout(function () {
        try{
            l = dictionnaires[langue][$("#btnLangue").attr('id')];
            l = l.concat("&nbsp;");
            l = l.concat("<img id=\"drapeauLangue\" src=\"Ressources/IconesDrapeaux/");
            l = l.concat(dictionnaires[langue]["label"]);
            l = l.concat(".png\"></img>");
            $("#btnLangue").html( l );
            document.getElementById("btnLangue").style.paddingTop = '';
        }catch(error){console.log('div #btnLangue non trouvée')}
    }, 1000);
}



function chargerDictionnaires(){
    
    for (var i = 0; i < Object.keys(dictionnaires).length; i++) {
        langue = Object.keys(dictionnaires)[i]
        $.getJSON("dictionnaires/"+langue+".json")
        .done( (function(langue){
                return function(response) {dictionnaires[langue] = response;};
            })(langue) )
        .fail(function(msg) {
            console.log( "error loading dictionnaire" );
        });
    }
}


// langues implementees
var dictionnaires = {"fr":{},"en":{},"it":{}};
chargerDictionnaires();






