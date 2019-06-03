function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function traduire(langue) {
    $(".trad").each(function(){
        $(this).html( langue[$(this).attr('id')] );
    });
}
