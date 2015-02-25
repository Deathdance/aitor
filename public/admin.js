/*$(document).ready(function(){
	$( "#formulario" ).submit(function( event ) {
		console.log("submit");
		event.preventDefault();

		function validarFormatoFecha(campo) { 
			var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/; 
			if ((campo.match(RegExPattern)) && (campo!='')) { 
				return true; 
			} else { 
				return false; 
			} 
		}

		function validarHora(campo) { 
			var RegExPattern = /^\d{2,2}\:\d{2,2}$/; 
			if ((campo.match(RegExPattern)) && (campo!='')) { 
				return true; 
			} else { 
				return false; 
			} 
		}


		function validaForm() {
			alert("BOOM");
			var err=0;
			var dia= formulario.inputDia.value;
			var pleamar1= formulario.inputPleamar1.value;
			var pleamar2= formulario.inputPleamar2.value;
			var bajamar1= formulario.inputPleamar1.value;
			var bajamar2= formulario.inputPleamar1.value;

			var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
			var RegExPattern2 = /^\d{2,2}\:\d{2,2}$/; 

			if(dia.match(RegExPattern)){
					alert("bien");
				}else{
					alert("mal");
					err=1;
				}
			if(formulario.inputPleamar1.value==true){
					alert("plea1");
				}else{
					alert("mal plea1");
					err=1;
				}
			if(validarHora(formulario.inputPleamar2.value)==true){
					alert("plea2");
				}else{
					alert("mal plea2");
					err=1;
				}
			if(validarHora(formulario.inputBajamar1.value)==true){
					alert("baja1");
				}else{
					alert("mal baja1");
					err=1;
				}
			if(validarHora(formulario.inputBajamar2.value)==true){
					alert("baja2");
				}else{
					alert("mal baja2");
					err=1;
				}

			if(err==0){

			/* Stop form from submitting normally*/ 
			/*alert("BOOM");
			console.log("submit");
	        event.preventDefault();
	        var formData = $(this).serializeArray();

	        $.ajax({
	           type: "POST",
	           url: "/insertarmareas",
	           dataType: "json",
	           data: formData,
	           success: function(data){
	           		console.log("ok");
	           	}
	       	});

	        // other options using $.get
	        // http://api.jquery.com/jquery.get/

			}else{
					Alert("BOOOM Mal introducido");
			}

		} 

	});

});*/

function validarFormatoFecha(campo) { 
			var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/; 
			if ((campo.match(RegExPattern)) && (campo!='')) { 
				return true; 
			} else { 
				return false; 
			} 
}
function validarHora(campo) { 
			var RegExPattern = /^\d{2,2}\:\d{2,2}$/; 
			if ((campo.match(RegExPattern)) && (campo!='')) { 
				return true; 
			} else { 
				return false; 
			} 
}
function validaForm() {
			alert("BOOM");
			var err=0;

			var dia= formulario.inputDia.value;
			var pleamar1= formulario.inputPleamar1.value;
			var pleamar2= formulario.inputPleamar2.value;
			var bajamar1= formulario.inputPleamar1.value;
			var bajamar2= formulario.inputPleamar1.value;

			/*var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
			var RegExPattern2 = /^\d{2,2}\:\d{2,2}$/; */

			if(validarFormatoFecha(formulario.inputDia.value)==true){
					/*alert("bien");*/
				}else{
					/*alert("mal");*/
					err=1;
					formulario.dia.value="";
				}
			if(validarHora(formulario.inputPleamar1.value)==true){
					/*alert("plea1");*/
				}else{
					/*alert("mal plea1");*/
					err=1;
					formulario.pleamar1.value="";
				}
			if(validarHora(formulario.inputPleamar2.value)==true){
					/*alert("plea2");*/
				}else{
					/*alert("mal plea2");*/
					err=1;
					formulario.pleamar2.value="";
				}
			if(validarHora(formulario.inputBajamar1.value)==true){
					/*alert("baja1");*/
				}else{
					/*alert("mal baja1");*/
					err=1;
					formulario.bajamar1.value="";
				}
			if(validarHora(formulario.inputBajamar2.value)==true){
					/*alert("baja2");*/
				}else{
					/*alert("mal baja2");*/
					err=1;
					formulario.bajamar2.value="";
				}

			if(err==0){

				/****************************/
			}
}