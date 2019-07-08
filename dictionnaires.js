/* Les differents dictionnaires et la fonction de traduction */
/* Attention: les noms de variables ne doivent pas comporter de tiret ("-") */


function traduire(langue) {
    $("#btnLangue").html("&nbsp;<div style=\"color: white;\" class=\"spinner-grow\"></div>");
    document.getElementById("btnLangue").style.paddingTop = '0px';
    $(".trad:not(#btnLangue)").each(function(){
        try{
            $(this).html( langue[$(this).attr('id')] );
        } catch(e) {console.log("Mot non trouvé dans le dictionnaire.");}
    });
    setTimeout(function () {
        l = langue[$("#btnLangue").attr('id')];
        l = l.concat("&nbsp;");
        l = l.concat("<img id=\"drapeauLangue\" src=\"Ressources/IconesDrapeaux/");
        l = l.concat(langue["label"]);
        l = l.concat(".png\"></img>");
        $("#btnLangue").html( l );
        document.getElementById("btnLangue").style.paddingTop = '';
    }, 1000);
}


var fr = {
    label : "fr",
    btnLangue : "Langue",
    btnTheme : "Thème",
    hautDePage : "haut de page",
    codeSource : "Ce site a été développé par moi-même, le code source est",
    libreAccesGithub : "en libre accès sur Github",
    texteInfobulleAge : "né le 24 juin 1997",
    age : "21 ans",
    lienProfilLinkedin : "Aller sur mon profil Linkedin",
    lienProfilGithub : "Aller sur mon profil Github",
    titrePageTop : "Haut de page",
    titreAPropos : "A propos de moi",
    titreParcours : "Parcours académique",
    titreCompetences : "Compétences",
    navTitreNCTU : "Université Chiao Tung",
    navTitreTSE : "Télécom Saint-Etienne",
    navTitreISM : "Sainte-Marie d'Antony",
    paragAPropos : "Je parle de moi, lorem ipsum etc...",
    titreNCTU : "Université Nationale Chiao Tung, Hsinchu, Taïwan",
    paragNCTU : "l'universite Chiao Tung...",
    titreTSE : "Télécom Saint-Etienne, Saint-Etienne, France",
    paragTSE : "Télécom Saint-Etienne est une ecole...",
    titreISM : "Institution Sainte-Marie, Antony, France",
    paragISM : "L'ISM...",
    paragPrepas : "Les classes préparatoires aux grandes écoles (CPGE) sont des filières d'enseignement supérieur. Hébergées généralement dans des lycées, elles ont pour but de préparer les étudiants aux concours des grandes écoles. </p><p> Considérées comme hautement exigentes et sélectives, la compétitivité des concours auxquels les CPGE emmènent leur étudiants les pousse à exiger de ceux-ci une charge de travail parmi les plus hautes d'Europe.",
    telechCV : "<i class=\"far fa-file-pdf\"></i> Consulter le CV",
    lienTravauxProjetsInfobulle : "Voir mes travaux et mes projets",
    retour : "Retour"
};

var en = {
    label : "en",
    btnLangue : "Language",
    btnTheme : "Theme",
    hautDePage : "back to top",
    codeSource : "I created this website by myself, the source code is",
    libreAccesGithub : "freely accessible on Github",
    texteInfobulleAge : "born June 24, 1997",
    age : "age 21",
    lienProfilLinkedin : "Go to my Linkedin profile",
    lienProfilGithub : "Go to my Github profile",
    titrePageTop : "Page top",
    titreAPropos : "About me",
    titreParcours : "Academic background",
    titreCompetences : "Skills",
    navTitreNCTU : "Chiao Tung University",
    navTitreTSE : "Télécom Saint-Etienne",
    navTitreISM : "Sainte-Marie d'Antony",
    paragAPropos : "lorem ipsum etc...",
    titreNCTU : "National Chiao Tung University, Hsinchu, Taïwan",
    paragNCTU : "Chiao Tung University...",
    titreTSE : "Télécom Saint-Etienne, Saint-Etienne, France",
    paragTSE : "Télécom Saint-Etienne is a school...",
    titreISM : "Institution Sainte-Marie, Antony, France",
    paragISM : "The ISM...",
    paragPrepas : "Les classes préparatoires aux grandes écoles (CPGE) sont des filières d'enseignement supérieur. Hébergées généralement dans des lycées, elles ont pour but de préparer les étudiants aux concours des grandes écoles. <br> Considérées comme hautement exigentes et sélectives, la compétitivité des concours auxquels les CPGE emmènent leur étudiants les pousse à exiger de ceux-ci une charge de travail parmi les plus hautes d'Europe.",
    telechCV : "<i class=\"far fa-file-pdf\"></i> See resume"
};

var it = {
    label : "it",
    btnLangue : "Lingua",
    btnTheme : "Tema",
    hautDePage : "torna all'inizio",
    codeSource : "Questo sito è stato sviluppato da io, il codice sorgente è",
    libreAccesGithub : "liberamente accessibile su Github",
    texteInfobulleAge : "nato il 24 giugno 1997",
    age : "21 anni"
};
