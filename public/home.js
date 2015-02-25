// http://api.jquery.com/jQuery.ajax/
// http://api.jquery.com/jquery.ajax/
// http://api.jquery.com/jquery.get/


$(document).ready(function(){

	$( "#formmarea" ).submit(function( event ) {

        console.log("submit");
        /* Stop form from submitting normally */
        event.preventDefault();
        var formData = $(this).serializeArray();

        $.ajax({
           type: "POST",
           url: "/buscarmareas",
           dataType: "json",
           data: formData,
           
           success: function(data){
              console.log(data);
              var mareas = "<p> Dia:"+data[0].dia+"</p><p>Pleamar:<br>"+data[0].pleamar1+"<br>"+data[0].pleamar2+"</p><p>Bajamar:<br>"+data[0].bajamar1+"<br>"+data[0].bajamar2+"</p>"
                $( "#listademareasDiv" ).html(mareas);
           }
        });

        // other options using $.get
        // http://api.jquery.com/jquery.get/

    });


	$( "#formlistamareas" ).submit(function( event ) {

        console.log("submit");
        /* Stop form from submitting normally */
        event.preventDefault();

        $.ajax({
           type: "GET",
           url: "/mareas",
           dataType: "json",
           success: function(data){
              console.log(data);
              for(i=0;i<data.length;i++){
              	var mareas = "<p> Dia:"+data[i].dia+"</p><p>Pleamar:<br>"+data[i].pleamar1+"<br>"+data[i].pleamar2+"</p><p>Bajamar:<br>"+data[i].bajamar1+"<br>"+data[i].bajamar2+"</p>"
              	$( "#listademareasDiv" ).append(mareas);
              }
              
           }
        });

        // other options using $.get
        // http://api.jquery.com/jquery.get/

    });
});