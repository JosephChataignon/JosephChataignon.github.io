

// Script pour la navigation entre tuiles
stateMosaique = true; // variable indiquant si on est en mode mosaique ou tuile

// ouvrir une section
function ouvrir(ligne,col){
    //todo: remplacer ouvrir() et tileClickHandling par une fonction repartissant
    //automatiquement les colonnes quelles que soient les dimensions de la grille.
    console.log('ouvrir() exécutée: ',ligne,',',col);
    // desktop
    if ( screen.width >= 800 ) {
        for(var c = 1; c <= 4; c++) {
            //strCols += "--hspace"+c
            if (c == col){
                strCols = "100%";
            }else{
                strCols = "0%";
            }
            $('body')[0].style.setProperty("--hspace"+c,strCols);
        }
        //strLines = "";
        for(var l = 1; l <= 5; l++) {
            //strLines += "--vspace"+l
            if (l == ligne){
                strLines = "100%";
            }else{
                strLines = "0%";
            }
            $('body')[0].style.setProperty("--vspace"+l,strLines);
        }
    } else {
    // mobile
        for(var l = 1; l <= 8; l++) {
            //strLines += "--vspace"+l
            if (l == ligne){
                strLines = "100vh";
            }else{
                strLines = "0vh";
            }
            $('body')[0].style.setProperty("--vspace"+l,strLines);
        }
    }
    
    stateMosaique = false;
    $('.hide-on-mosaic').css('display', '');
    $('.closebtn').css('cursor','pointer');
}
// retourner en configuration mosaïque
function mosaique(){
    console.log('mosaique executée');
    stateMosaique = true;
    if ( screen.width >= 800 ) {
        // desktop dimensions
        $('body')[0].style.setProperty("--vspace1","3rem");
        $('body')[0].style.setProperty("--vspace2","30vh");
        $('body')[0].style.setProperty("--vspace3","calc(55vh - 11rem)");
        $('body')[0].style.setProperty("--vspace4","15vh");
        $('body')[0].style.setProperty("--vspace5","8rem");
        $('body')[0].style.setProperty("--hspace1","30vw");
        $('body')[0].style.setProperty("--hspace2","30vw");
        $('body')[0].style.setProperty("--hspace3","10vw");
        $('body')[0].style.setProperty("--hspace4","30vw");
    } else {
        // mobile dimensions
        $('body')[0].style.setProperty("--vspace1","3rem");
        $('body')[0].style.setProperty("--vspace2","50vh");
        $('body')[0].style.setProperty("--vspace3","8rem");
        $('body')[0].style.setProperty("--vspace4","11rem");
        $('body')[0].style.setProperty("--vspace5","11rem");
        $('body')[0].style.setProperty("--vspace6","11rem");
        $('body')[0].style.setProperty("--vspace7","11rem");
        $('body')[0].style.setProperty("--vspace8","8rem");
        $('body')[0].style.setProperty("--hspace1","100vw");
    }
    $('.hide-on-mosaic').css('opacity', 0);
    $('.hide-on-mosaic').css('display', 'none');
    $('.show-on-mosaic').css('opacity', 1);
    $('.show-on-mosaic').css('z-index', 1);
    $('.tile').css('overflow-y', 'hidden');
    $('#e5').css('overflow-y', 'scroll');
    $('#e5').css('scrollbar-width', 'none');
    $('.closebtn').css('cursor','default');
    timelineSizeIncrease(false);
    aProposOuvert(false);
}
// ajout eventListener aux tuiles
function tileEventListeners(){
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
function detectTile(e){ //détecter la tuile d'où vient un évènement e
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
    $('#'+tileId+' .show-on-mosaic').css('z-index', -1);
    if ( [1,3,4,5,6].includes(parseInt(tileId[1])) ) {
        $('#'+tileId).css('overflow-y', 'scroll');
    }
    // desktop
    if ( screen.width >= 800 ) {
        switch(tileId) {
            case 'e1':
                aProposOuvert(true);
                ouvrir(1,1); break;
            //case 'e2':
            //    ouvrir(1,12); break;
            case 'e3':
                ouvrir(3,1); break;
            case 'e4':
                ouvrir(3,2); break;
            case 'e5':
                timelineSizeIncrease(true);
                ouvrir(3,4); break;
            case 'e6':
                ouvrir(4,1); break;
            //case 'e7':
            //    ouvrir(12,6); break;
            //case 'e8':
            //    ouvrir(12,12); break;
        }
    }else{
    // mobile
        switch(tileId) {
            case 'e1':
                aProposOuvert(true);
                ouvrir(2,1); break;
            case 'e3':
                ouvrir(4,1); break;
            case 'e4':
                ouvrir(5,1); break;
            case 'e5':
                timelineSizeIncrease(true);
                ouvrir(6,1); break;
            case 'e6':
                ouvrir(7,1); break;
        }
    }
}


// Script pour les tuiles de langue et communication
function commsClick(n){
    $(".commMessage").css('left','-'+n+'00%');
}
function langClick(lang){
    $(".langLabel").css('flex','0'); 
    $("#langLabel-"+lang).css('flex','1');
}
// change the size of timeline elements, argument b is a boolean for increase or decrease
function timelineSizeIncrease(b){
    if(b){
        $('#timeline-container')[0].style.cssText = "--line-width:.4rem; --big-img-size:6rem; --small-img-size:3rem;";
        $('.sectionParcoursAcademique p, .sectionParcoursAcademique h5').css("height",'auto');
    }else{
        $('#timeline-container')[0].style.cssText = "--line-width:.2rem; --big-img-size:4rem; --small-img-size:2rem;";
        $('.sectionParcoursAcademique p, .sectionParcoursAcademique h5').css("height",'0px');
    }
}
function aProposOuvert(b){
    if(b){
        $('#photoPortrait')[0].className = "photoOuvert";
        $('#presentation')[0].className = "presentationOuvert";
    }else{
        $('#photoPortrait')[0].className = "photoMosaique";
        $('#presentation')[0].className = "presentationMosaique";
    }
}



// Au chargement
window.onload = function(){
    themeDefaut();
    mosaique(); // mettre en mosaïque au début
    tileEventListeners(); // ajouter les eventListeners aux tuiles
    //$('.closebtn').click( function(){mosaique();}); // .closebtn ferme les tuiles
    $(document).keyup(function(e) {
        if (e.keyCode === 27) mosaique();   // échap aussi
    });
    lang = langueDefaut()
    traduire(lang);
    langClick(lang);
};






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
