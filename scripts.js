
$(document).ready(function(){
    console.log("document prêt");
    $("#topbar-container").css('display', 'none'); closePanel(); //régler tailles tuiles
    changerTheme(themeClair);
    //remplacerAge();
    traduire(langueDefaut(), "pas de spinner");
    
    $(".tile").css('font-size', $(".tile").height()+'px');//taille polices
});


// gestion tiles
function expandTile(param){
    setTimeout(function(){
        $("#topbar-container").css('display', 'none');
        $(".panel--".concat(param)).css('display', 'block');
        $(".tile-container").css('height',0);
    }, 200);
    $("#topbar-container").css('height', '0');
    $("#topbar-container a").css('display', 'none');
    $(".tile").css('height', '0');
    $("#tile-".concat(param)).css('height', window.innerHeight);
    $("#tile-".concat(param)).css('width', window.innerWidth);
}
function closePanel(param){
    $("#topbar-container").css('height', '3em');
    $("#topbar-container a").css('display', '');
    if(window.innerWidth < 432){$("#topbar-container").css('height', '5.5em');}
    $("#topbar-container").css('display', 'block');
    $(".tile-container").css('height','auto');
    if(param){
        $("#tile-".concat(param)).css('height', '');
        $("#tile-".concat(param)).css('width', '');
        $(".panel--".concat(param)).css('display', 'none');
    }
    $('.tile').css( 'height', (window.innerHeight - parseInt($('#topbar-container').css('height'),10)) /4 );
}


// Retour en haut de page
function hautDePage() {
  document.body.scrollTop = 0;              // For Safari
  document.documentElement.scrollTop = 0;   // For Chrome, Firefox, IE and Opera
}

// Remplace le texte de l'âge
function remplacerAge() {
    document.getElementById("nombreAge").innerHTML = getAge();
}
// Donne l'âge (issu de stackoverflow.com/questions/10008050)
function getAge() {
    var today = new Date();
    var birthDate = new Date('1997/06/24');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
