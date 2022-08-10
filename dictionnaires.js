

languesImplementees = ["fr","en","it"];

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

function traduire(langue) {
    
    $(".trad:not(#btnLangue)").each(function(){
        try{
            $(this).html( dictionnaires[langue][ $(this)[0]['id'] ] );
        } catch(e) { console.log(e); console.log("Mot non trouvé dans le dictionnaire") };
    });
    try{
        remplacerAge();
    }catch(e) { console.log("div age non trouvée."); }
    // Changer l'attribut lang pour les lecteurs d'écran et google trad
    $('html').attr('lang', langue);
    // retourner le numéro parmi la liste de langues pour l'UI
    return languesImplementees.indexOf(langue) + 1;
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






