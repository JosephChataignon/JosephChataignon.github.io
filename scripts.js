
/*$(document).ready(function(){

});*/

function toggleNav() {
    if(document.getElementById("sidenav").style.width == "250px"){
        closeNav();
    }else{
        openNav();
    }
}

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function traduire(langue) {
    $("#btnLangue").html("&nbsp;<div style=\"color: white;\" class=\"spinner-grow\"></div>");
    document.getElementById("btnLangue").style.paddingTop = '0px';
    $(".trad:not(#btnLangue)").each(function(){
        $(this).html( langue[$(this).attr('id')] );
    });
    setTimeout(function () {
        $("#btnLangue").html( langue[$("#btnLangue").attr('id')] );
        document.getElementById("btnLangue").style.paddingTop = '';
    }, 1000);
}
