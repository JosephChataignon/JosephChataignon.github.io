//Charger le theme par defaut
$(document).ready(function(){
    console.log("document prêt");
    changerTheme(themeVert);
    if( window.innerWidth <= 600 ){
        document.getElementById("main").style.marginLeft = "0";
        document.getElementsById("footer").style.marginLeft = "0";
    }
});

// Ouvrir ou fermer le panneau lateral de navigation
function toggleNav() {
    if(document.getElementById("sidenav").style.width == "250px"){
        closeNav();
    }else{
        openNav();
    }
}

// Ouvrir le panneau lateral de navigation
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementsById("footer").style.marginLeft = "250px";
}

// Fermer le panneau lateral de navigation
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
