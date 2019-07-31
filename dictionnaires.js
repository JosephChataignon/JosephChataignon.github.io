/* Les differents dictionnaires et la fonction de traduction */
/* Attention: les noms de variables ne doivent pas comporter de tiret ("-") */

function langueDefaut(){
    /*Attention: ne renvoie qu'un string et pas un des objets dictionnaires*/
    /*Ecrire traduire(window[langueDefaut()]) pour traduire*/
    languesImplementees = ["fr","en","it"];
    langue = navigator.language.toLowerCase();
    langueCode = langue.substring(0, 2);
    /*chinois: if(langueCode == "zh"){if langue.search("hans"){simplified}else{traditionnal}}*/
    if(languesImplementees.indexOf(langueCode) != -1){
        return langueCode;
    }else{return "en";}
}

function traduire(langue) {
    /*Attention: langue doit être un des objets (fr, en,it...) définis ci-après, pas un string*/
    $("#btnLangue").html("&nbsp;<div style=\"color: white;\" class=\"spinner-grow\"></div>");
    document.getElementById("btnLangue").style.paddingTop = '0px';
    $(".trad:not(#btnLangue)").each(function(){
        try{
            $(this).html( langue[$(this).attr('id')] );
        } catch(e) {console.log("Mot non trouvé dans le dictionnaire.");}
        remplacerAge();
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
    licenseMIT : "sous license MIT.",
    texteInfobulleAge : "né le 24 juin 1997",
    age : "<span id=\"nombreAge\">22</span> ans",
    lienProfilLinkedin : "Aller sur mon profil Linkedin",
    lienProfilGithub : "Aller sur mon profil Github",
    lienProfilGithub : "Aller sur mon profil GitLab",
    titrePageTop : "Haut de page",
    titreAPropos : "A propos de moi",
    titreParcours : "Parcours académique",
    titreCompetences : "Compétences",
    navTitreNCTU : "Université Chiao Tung",
    navTitreTSE : "Télécom Saint-Etienne",
    navTitreISM : "Sainte-Marie d'Antony",
    paragAPropos : "Ce site est encore en construction, merci de votre compréhension<br> This website is still under construction, thank you for you understanding<br>    <br>J'ajoute ici quelques lignes<br>qui ne servent qu'à faire <br>de l'espace<br><br>Lorem ipsum <br> sit dolor amet<br>",
    titreNCTU : "Université Nationale Chiao Tung, Hsinchu, Taïwan",
    paragNCTU : "Désirant depuis longtemps partir étudier à l'étranger, j'ai pu le faire pour une durée d'un an, en enchaînant un semestre d'échange académique à l'Université Chiao Tung puis un stage de recherche de 6 mois dans le laboratoire de Théorie de l'Information de cette même université.<br><br>L'Université Nationale Chiao Tung est une université publique taïwanaise à la pointe de la recherche universitaire, située à Hsinchu, Taïwan. Fondée en 1896 à Shanghai par un édit impérial de l'Empereur Guangxu, elle a été rétablie à Hsinchu par d'anciens élèves et professeurs en 1958. Elle est la troisième université du pays, et se situe dans le top 50 des meilleures universités mondiales pour l'ingénierie et l'informatique d'après le classement de Shanghai.",
    titreTSE : "Télécom Saint-Etienne, Saint-Etienne, France",
    paragTSE : "Ayant passé les concours à l'issue de ma prépa, j'ai intégré l'école d'ingénieurs Télécom Saint-Etienne. C'est à cette occasion que j'ai pu accélérer mon apprentissage de l'informatique sous ses divers aspects. J'y ai aussi eu, par le biais d'un stage et de conversations avec des professeurs, un premier contact avec la recherche universitaire. <br><br> <a href=\"https://www.telecom-st-etienne.fr/\">Télécom Saint-Etienne</a> est une école d'ingénieurs située dans la ville de Saint-Etienne, en France. Créée en 1991 par l'Université Jean Monnet, elle est agréée par la Commission des Titres d'Ingénieurs et est une école affiliée de l'Institut Mines-Télécom. L'environnement qu'elle représente pour ses étudiants les met en contact aussi bien avec le monde de l'entreprenariat qu'avec celui de la recherche ou du design.",
    titreISM : "Institution Sainte-Marie, Antony, France",
    paragISM : "Le bac fraîchement obtenu, voulant me diriger vers les sciences, j'ai intégré les classes préparatoires de Sainte-Marie d'Antony. Ayant suivi une filière MPSI-MP (Maths-Physique), j'y ai appris intensivement les mathématiques, et dans une moindre mesure la physique et l'informatique (dans laquelle j'avais déjà acquis de larges connaissances en autodidacte). <br><br> L'<a href=\"https://www.saintemarieantony.fr/prepas\">Institution Sainte-Marie d'Antony</a>, créée en 1897 par des marianistes, est un établissement privé d'enseignement situé à Antony, en banlieue parisienne. Malgré son petit effectif, sa filière MP est classée 37ème parmi les CPGE de France.",
    paragPrepas : "Les classes préparatoires aux grandes écoles (CPGE) sont des filières d'enseignement supérieur. Hébergées généralement dans des lycées, elles ont pour but de préparer les étudiants aux concours des grandes écoles. </p><p> Considérées comme hautement exigentes et sélectives, la compétitivité des concours auxquels les CPGE emmènent leur étudiants les pousse à exiger de ceux-ci une charge de travail parmi les plus hautes d'Europe.",
    telechCV : "<i class=\"far fa-file-pdf\"></i> Consulter le CV",
    travauxProjets : "Mes travaux et projets",
    lienTravauxProjetsInfobulle : "Voir mes travaux et mes projets",
    retour : "Retour",
    btnRecherche : "Recherche",
    btnProgrammes : "Programmes",
    domainesCompetences : "Mes domaines de compétence",
    compMaths : "Mathématiques",
    compInfo : "Informatique",
    compML : "Machine Learning",
    compImage : "Traitement d'image",
    compWeb : "Développement Web",
    compLogiciel : "Génie Logiciel",
    outilsMaitrises : "Outils et logiciels maîtrisés",
    catOutilsScript : "Langages de scripts",
    catOutilsBasNiv : "Langages de programmation standard",
    catOutilsWeb : "Web",
    catOutilsLogiciel : "Outils de développement logiciel",
    catOutilsAutres : "Autres",
    languesParlees : "Langues",
    langueFR : "Français",
    nivLangFR : "langue maternelle",
    langueEN : "Anglais",
    nivLangEN : "courant",
    langueIT : "Italien",
    nivLangIT : "courant",
    languezht : "Chinois (traditionnel)",
    nivLangZHT : "basique",
    langueZHS : "Chinois (simplifié)",
    nivLangZHS : "basique",
    langueES : "Espagnol",
    nivLangES : "intermédiaire",
    langueJP : "Japonais",
    nivLangJP : "débutant",
    languePL : "Polonais",
    nivLangPL : "débutant",
    btnProgDemo : "Démo",
    btnProgCode : "Code"
};

var en = {
    label : "en",
    btnLangue : "Language",
    btnTheme : "Theme",
    hautDePage : "back to top",
    codeSource : "I created this website by myself, the source code is",
    libreAccesGithub : "freely accessible on Github",
    licenseMIT : "under MIT license.",
    texteInfobulleAge : "born June 24, 1997",
    age : "age <span id=\"nombreAge\">22</span>",
    lienProfilLinkedin : "Go to my Linkedin profile",
    lienProfilGitlab : "Go to my GitLab profile",
    lienProfilGithub : "Go to my Github profile",
    titrePageTop : "Page top",
    titreAPropos : "About me",
    titreParcours : "Academic background",
    titreCompetences : "Skills",
    navTitreNCTU : "Chiao Tung University",
    navTitreTSE : "Télécom Saint-Etienne",
    navTitreISM : "Sainte-Marie d'Antony",
    paragAPropos : "Ce site est encore en construction, merci de votre compréhension<br> This website is still under construction, thank you for you understanding<br>    <br>J'ajoute ici quelques lignes<br>qui ne servent qu'à faire <br>de l'espace<br><br>Lorem ipsum <br> sit dolor amet<br>",
    titreNCTU : "National Chiao Tung University, Hsinchu, Taïwan",
    paragNCTU : "I always wanted to go study abroad, and I had the occasion to do it for one year, with an academic exchange semester at Naational Chiao Tung University followed by a 6 month research internship in the Information Theory laboratory of that same university.<br><br>National Chiao Tung University is a public taiwanese university, located in Hsinchu, Taiwan. Founded in 1896 in Shanghai by an imperial edict of Emperor Guangxu, it was re-established in Hsinchu by former students and teachers in 1958. It is the third best university in the country, and is in the top 50 of the world's best universities for engineering and computer science according to the Shanghai ranking.",
    titreTSE : "Télécom Saint-Etienne, Saint-Etienne, France",
    paragTSE : "After passing the exams at the end of preparatory school, I joined Télécom Saint-Etienne engineering school. There, I could finally learn a lot about Computer Science. It is also there that I had a first contact with research, through an internship and conversations with my professors. <br><br> <a href=\"https://www.telecom-st-etienne.fr/\">Télécom Saint-Etienne</a> is an engineering school located in Saint-Etienne City, France. Created in 1991 by Jean Monnet University, it is officially approved by the Commission des Titres d'Ingénieurs (the commission certifying the ability for engineering schools to deliver engineer diplomas) and is part of the Mines-Télécom Institute. The environment it represents for its students brings them into contact with the world of entrepreneurship as well as research or design.",
    titreISM : "Institution Sainte-Marie, Antony, France",
    paragISM : "Having freshly obtained the baccalaureate, I entered the preparatory classes (\"prépa\") at Sainte-Marie d'Antony. I followed a MPSI-MP track (Maths-Physics), where I studied intensively mathematics, and physics and computer science too (I already had learned a lot about CS by myself). <br><br> <a href=\"https://www.saintemarieantony.fr/prepas\">Sainte-Marie d'Antony</a> Institution, created in 1897 by marianists, is a private educational institution located in Antony, in the suburbs of Paris. Despite its small number of students, its MP track is ranked 37th among the CPGEs in France.",
    paragPrepas : "The <i>classes préparatoires aux grandes écoles</i> (CPGE) are higher education courses. Their purpose is to prepare students for the competitive exams of the <i>grandes écoles</i>. <br> Considered as very selective, the workload is one of the highest in Europe",
    telechCV : "<i class=\"far fa-file-pdf\"></i> See resume",
    travauxProjets : "My works and projects",
    lienTravauxProjetsInfobulle : "See my works and projects",
    retour : "Return",
    btnRecherche : "Research",
    btnProgrammes : "Programs",
    domainesCompetences : "My fields of expertise",
    compMaths : "Mathematics",
    compInfo : "Computer Science",
    compML : "Machine Learning",
    compImage : "Image Processing",
    compWeb : "Web Development",
    compLogiciel : "Software Engineering",
    outilsMaitrises : "Mastered tools and software",
    catOutilsScript : "Scripting languages",
    catOutilsBasNiv : "Standard programming languages",
    catOutilsWeb : "Web",
    catOutilsLogiciel : "Software developing tools",
    catOutilsAutres : "Other",
    languesParlees : "Languages",
    langueFR : "French",
    nivLangFR : "native",
    langueEN : "English",
    nivLangEN : "fluent",
    langueIT : "Italian",
    nivLangIT : "fluent",
    languezht : "Chinese (traditional)",
    nivLangZHT : "basic",
    langueZHS : "Chinese (simplified)",
    nivLangZHS : "basic",
    langueES : "Spanish",
    nivLangES : "intermediate",
    langueJP : "Japanese",
    nivLangJP : "beginner",
    languePL : "Polish",
    nivLangPL : "beginner",
    btnProgDemo : "Demo",
    btnProgCode : "Code"
};

var it = {
    label : "it",
    btnLangue : "Lingua",
    btnTheme : "Tema",
    hautDePage : "torna all'inizio",
    codeSource : "Questo sito è stato sviluppato da io, il codice sorgente è",
    libreAccesGithub : "liberamente accessibile su Github",
    licenseMIT : "sotto licenza MIT.",
    texteInfobulleAge : "nato il 24 giugno 1997",
    age : "<span id=\"nombreAge\">22</span> anni"
};
