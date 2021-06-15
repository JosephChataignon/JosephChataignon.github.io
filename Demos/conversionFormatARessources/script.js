
function longueurA(n) {
    return Math.pow( 2 , (1-2*n)/4 )
}

function plus_proche_format(x) {
    // trouve le format A le plus proche de la longueur x (en mètres)
    n = 0;
    boucle = true;
    if ( x > longueurA(0) )   { increment = -1 }else{ increment = 1 }
    while (boucle) {
        n = n + increment;
        Aformat = longueurA(n);
        if ( ((n<0)&&(Aformat > x)) || ((n>0)&&(Aformat < x)) ) { 
            boucle = false;
        }
    }
    return [ n-increment , n ]
}

function conversion() {
    entree = document.getElementById("entreeTexte").value;
    sortie = plus_proche_format(entree);
    sortieTexte = "entre A"+sortie[0]+" ("+longueurA(sortie[0])+"m) et A"+sortie[1]+" ("+longueurA(sortie[1])+"m)" ;
    document.getElementById("result").textContent = sortieTexte;
}
