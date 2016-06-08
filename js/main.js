$(document).ready(function() {

  var jobCount = $("#list > .scroll > li > media > .media-body > .name").length;
    
  
  $("#search-text").keyup(function () {
     //$(this).addClass('hidden');
  
    var searchTerm = $("#search-text").val();
    var listItem = $('.media-body').children('.name');
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
     
    $(".sub-menu").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('.sub-menu');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $(".sub-menu:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('.sub-menu');
      setTimeout(function() {
          $('.sub-menu').removeClass('hiding');
        }, 1);
    });
    
  
      var jobCount = $("#list > .scroll > li > media > .media-body > .name").length;

    //shows empty state text when no jobs found
    if( searchTerm === ' ') {
      	$('.sub-menu').addClass('empty');
    }
    else {
      $('.sub-menu').removeClass('empty');
    }
    
  });  
                    
});
$('.sub-menu').click(function() {
	var data = $(this).attr('data')
	$('.fondo-whatsapp').css({height: '435px',});
	$('#message').css({display: 'block',});
	var fotos = ["gian", "jose", "katy", "andrea", "aldo", "mariapaula", "raymi", "rodulfo", "anamaria"];
	var nombres = ["Gian", "Jose", "Katy", "Andrea", "Aldo", "Maria Paula", "Raymi", "Rodulfo", "Ana Maria"];
	$('#foto').html('<img class="media-object avatar" src="image/' +fotos[data]+ '.jpg" alt="...">');
	$('#nombres').html('<p class= "nombre">' +nombres[data]+ '</p>');
	$('#box-message').html('');
});

function textarea() {
	var llamarID = document.getElementById("inputBox");
	return llamarID.value;
}
$('body').keyup(function enter(e) {
	var agregar = textarea();
    if (agregar !== '') {
    	if(e.keyCode == 13) {      	
	    	actual();
	    	ObtenerLista(agregar);
			clean();
	      	$('#inputBox').submit();
   		}
    }
});


function actual() {
	    var fecha=new Date(); //Actualizar fecha.
	    var hora=fecha.getHours(); //hora actual
	    var minuto=fecha.getMinutes(); //minuto actual
	     if (hora<10) { //dos cifras para la hora
            hora="0"+hora;
            }
        if (minuto<10) { //dos cifras para el minuto
            minuto="0"+minuto;
            }
         //ver en el recuadro del reloj:	
		var time = hora+ ":" + minuto;
		return time	
	}
function ObtenerLista(text) {
	var llamarDiv = document.getElementById("box-message");
	
	// Crear Elemento
	var crearElemento = document.createElement("div");
	crearElemento.id  = "box-green";

	var parrafo = document.createElement("div");
	parrafo.id = "texto";
	parrafo.innerHTML = text;

	var reloj = document.createElement("div");
	reloj.id = "datatime"
	var times = actual();
	reloj.innerHTML = times;


	llamarDiv.appendChild(crearElemento);
	crearElemento.appendChild(parrafo);
	crearElemento.appendChild(reloj);

}

function clean() {
	var llamarID =document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}
