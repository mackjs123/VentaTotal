/*CODIGO PRINCIPAL*/

var principal = new Principal();

//$().ready(() => {
//    let URLactual = window.location.pathname;
//    principal.userLink(URLactual);
//    $('.sidenav').sidenav();
//});

$(document).ready(function () {
    let URLactual = window.location.pathname;
   principal.userLink(URLactual);
    $('.sidenav').sidenav();
})

//$(document).ready(function () {
//    // $('.sidenav').sidenav();
//    $('.sidenav li:has(ul)').click(function(e){
//        e.preventDefault();

//        if ($(this).hasClass('activado')) {
//            $(this).removeClass('activado');
//            $(this).children('ul').slideUp();
//        }
//        else {
//            $('.sidenav li ul').slideUp();
//            $('.sidenav li').removeClass('activado');
//            $(this).addClass('activado');
//            $(this).children('ul').slideDown();
//        }
//    });
//});

