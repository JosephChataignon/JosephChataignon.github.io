
/*$(document).ready(function(){
    $('#main').scrollspy({target: ".sidenav", offset: 50});
});*/



function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function traduire(langue) {
    $(".trad").each(function(){
        $(this).html( langue[$(this).attr('id')] );
    });
}
