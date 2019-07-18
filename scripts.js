// Charger le thème par defaut
$(document).ready(function(){
    console.log("document prêt");
    changerTheme(themeVert);
    if( window.innerWidth <= 600 ){
        document.getElementById("main").style.marginLeft = "0";
        document.getElementsById("footer").style.marginLeft = "0";
    }
});

// Afficher le panneau des Recherches
function montrerPanneauRecherche(){
    document.getElementById('panneau-recherche').style.display = "block";
    document.getElementById('panneau-choix-projets').style.display = "none";
    document.getElementById('panneau-programmes').style.display = "none";
}

// Afficher le panneau des Programmes
function montrerPanneauProgrammes(){
    document.getElementById('panneau-recherche').style.display = "none";
    document.getElementById('panneau-choix-projets').style.display = "none";
    document.getElementById('panneau-programmes').style.display = "block";
}

// Ouvrir ou fermer le panneau latéral de navigation
function toggleNav() {
    if(document.getElementById("sidenav").style.width == "250px"){
        closeNav();
    }else{
        openNav();
    }
}

// Ouvrir le panneau latéral de navigation
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementsById("footer").style.marginLeft = "250px";
}

// Fermer le panneau latéral de navigation
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("footer").style.marginLeft = "0";
}


// Retour en haut de page
function hautDePage() {
  document.body.scrollTop = 0;              // For Safari
  document.documentElement.scrollTop = 0;   // For Chrome, Firefox, IE and Opera
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
