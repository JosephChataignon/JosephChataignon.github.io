

// Script pour la navigation entre tuiles
stateMosaique = true; // variable indiquant si on est en mode mosaique ou tuile

// ouvrir une section
function ouvrir(ligne,col){
    //todo: remplacer ouvrir() et tileClickHandling par une fonction repartissant
    //automatiquement les colonnes quelles que soient les dimensions de la grille.
    console.log('ouvrir() exécutée: ',ligne,',',col);
    strCols = "";
    for(var c = 1; c <= 12; c++) {
        if (c == col){
            strCols += "1fr ";
        }else{
            strCols += "0fr ";
        }
    }
    strLines = "";
    for(var l = 1; l <= 12; l++) {
        if (l == ligne){
            strLines += "1fr ";
        }else{
            strLines += "0fr ";
        }
    }
    document.getElementById('container').style.gridTemplateColumns = strCols;
    document.getElementById('container').style.gridTemplateRows = strLines;
    stateMosaique = false;
    $('.closebtn').css('cursor','pointer');
}
// retourner en configuration mosaïque
function mosaique(){
    //todo: faire une grille responsive
    console.log('mosaique executée');
    stateMosaique = true;
    // this is a virtual 12*12 grid
    document.getElementById('container').style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    document.getElementById('container').style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    $('.hide-on-mosaic').css('opacity', 0);
    $('.show-on-mosaic').css('opacity', 1);
    $('.tile').css('overflow-y', 'hidden');
    $('.closebtn').css('cursor','default');
    timelineSizeIncrease(false);
}
function tileEventListeners(){
    // ajout eventListener aux tuiles
    var tiles = document.getElementsByClassName("tile");
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', function(e){
            if(stateMosaique){
                if(e.target.id && e.target.id[0]=='e' && e.target.id[1]>0 && e.target.id[1]<9){
                    tileClickHandling(e.target.id);
                }else if ( detectTile(e) ) {
                    tileClickHandling( detectTile(e) );
                }
            } else if(e.target.classList.contains('closebtn')){
                mosaique();
            }
        }, false);
    }
}
z=0;
function detectTile(e){ //détecter la tuile d'où vient e
    var node = e.target.parentNode;
    while (node != null) {
        if (node.classList.contains('tile')) {//si node est une tuile
            return node.id;
        }
        node = node.parentNode;
    }
}
function tileClickHandling(tileId){
    console.log('tileid ',tileId);
    $('#'+tileId+' .hide-on-mosaic').css('opacity', 1);
    $('#'+tileId+' .show-on-mosaic').css('opacity', 0);
    if ( [1,3,4,5,6].includes(parseInt(tileId[1])) ) {
        $('#'+tileId).css('overflow-y', 'scroll');
    }
    switch(tileId) {
        case 'e1':
            ouvrir(1,1); break;
        //case 'e2':
        //    ouvrir(1,12); break;
        case 'e3':
            ouvrir(6,1); break;
        case 'e4':
            ouvrir(6,6); break;
        case 'e5':
            timelineSizeIncrease(true);
            ouvrir(6,12); break;
        case 'e6':
            ouvrir(12,1); break;
        //case 'e7':
        //    ouvrir(12,6); break;
        //case 'e8':
        //    ouvrir(12,12); break;
    }
}


// Script pour les tuiles de langue et communication
function commsClick(n){
    $(".commMessage").css('left','-'+n+'00%');
}
function langClick(n){
    $(".langLabel").css('flex','0'); 
    if( currentlang == n ){
        $(".langLabel:nth-child("+(2*n+1)+")").css('flex','0'); currentlang = 0;
    }else{
        $(".langLabel:nth-child("+(2*n+1)+")").css('flex','1'); currentlang = n;
    }
}
// change the size of timeline elements, argument b is a boolean for increase or decrease
function timelineSizeIncrease(b){
    if(b){
        $('#timeline-container')[0].style.cssText = "--line-width:.4rem; --big-img-size:6rem; --small-img-size:3rem;";
    }else{
        $('#timeline-container')[0].style.cssText = "--line-width:.2rem; --big-img-size:2rem; --small-img-size:1rem;";
    }
}



// Au chargement
window.onload = function(){
    mosaique(); // mettre en mosaïque au début
    tileEventListeners(); // ajouter les eventListeners aux tuiles
    //$('.closebtn').click( function(){mosaique();}); // .closebtn ferme les tuiles
    $(document).keyup(function(e) {
        if (e.keyCode === 27) mosaique();   // échap aussi
    });
    changerTheme(themeClair);
    traduire(langueDefaut(), "pas de spinner");
};
currentlang = 1; // pour le bouton






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
