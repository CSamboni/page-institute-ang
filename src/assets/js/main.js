var api = 'AIzaSyCZY_IHABIbnxO8Gl-229r-Hjj9TFxlTGI';

function initMap() {
   var latLng = {
   lat: 1.857451,
   lng: -76.052589
 };

 var map = new google.maps.Map(document.getElementById('mapa'), {
    'center': latLng,
    'zoom': 18.2,
    'mapTypeId': google.maps.MapTypeId.HYBRID
  });
  var contenido = '<h2>IEM Departamental</h2>'+
  '<p>Visita nuestra comunidad Estudiantil!</p>';
  var informacion = new google.maps.InfoWindow ({
     content: contenido
  });
  
  var marker = new google.maps.Marker ({
    position: latLng,
    map: map,
    title: 'IEM Departamental'
  });

  marker.addListener('click', function() {
    informacion.open(map, marker);
  });
}

$(function() {
    //Programa para Tablero
  $('.programa-tablero .info-tablero:first').show();
  $('.menu-tablero a').on('click', function(){
      $('.ocultar').hide();

    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);
  });
});


$(function() {

  //Programa actividades
  $('.programa-tablero .info-evento-tablero:first').show();
  $('menu-tablero a').removeClass=('activo');

  $('menu-tablero a').on('click', function() {
    $('.menu-tablero a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000)
    return false;
   });

   //Animaciones para los números

   $('.resumen-actividad  li:nth-child(1) p').animateNumber({ number: 130}, 5000);
   $('.resumen-actividad  li:nth-child(2) p').animateNumber({ number: 30}, 2200);
   $('.resumen-actividad  li:nth-child(3) p').animateNumber({ number: 15}, 3000);
   $('.resumen-actividad  li:nth-child(4) p').animateNumber({ number: 80}, 5600);

   // Cuenta regresiva

   $('.cuenta-regresiva').countdown('2018/06/05 10:00:00', function(event){
     $('#dias').html(event.strftime('%D'));
     $('#horas').html(event.strftime('%H'));
     $('#minutos').html(event.strftime('%M'));
     $('#segundos').html(event.strftime('%S'));
   });
});

//Lettering
$('.nombre-sitio').lettering();


// Menú fijado
var windowHeight = $(window).height();
var BarraAltura = $('.barra').innerHeight();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if(scroll > windowHeight) {
      $('.barra').addClass('fixed');
      $('body').css({'margin-top': BarraAltura+'px'}); /*Ajuste para que no brinque en scrolling*/
  } else {
    $('.barra').removeClass('fixed');
    $('body').css({'margin-top':'0px'}) /*Eliminar 2do brinco*/
  }
});

// Menu Responsive

   $('.menu-movil').on('click', function() {
   $('.navegacion-principal').slideToggle();
   });

   // Color bos

   $('.boton_newsletter').colorbox({inline:true, width:"50%"});