$(document).ready(function(){

	$( "#formu" ).submit(function( event ) {

        console.log("submit formu");
        /* Stop form from submitting normally */
        event.preventDefault();
        var formData = $(this).serializeArray();
        console.log(formData);

        $.ajax({
           type: "POST",
           url: "/insertarmareas",
           dataType: "json",
           data: formData,
           
           success: function(data){
              console.log(data);
              console.log('BOOM');
           }
        });

        // other options using $.get
        // http://api.jquery.com/jquery.get/

    });

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
              var mareas = "<input type='hidden' id='AinputDia' name='AinputDia' value='"+data[0].dia+"' />"+"Pleamar1:<input type='text' placeholder='pleamar1' required='' id='AinputPleamar1' name='AinputPleamar1' value='"+data[0].pleamar1+"' />"+
              "<br>Pleamar2:<input type='text' placeholder='pleamar2' required='' id='AinputPleamar2' name='AinputPleamar2' value='"+data[0].pleamar2+"' />"+
              "<br>Bajamar1:<input type='text' placeholder='bajamar1' required='' id='AinputBajamar1' name='AinputBajamar1' value='"+data[0].bajamar1+"' />"+
              "<br>Bajamar2:<input type='text' placeholder='bajamar2' required='' id='AinputBajamar2' name='AinputBajamar2' value='"+data[0].bajamar2+"' />"+
        "<br><input type='submit' value='Modificar'>"
                $( "#actumareaDiv" ).html(mareas);
           }
        });

        // other options using $.get
        // http://api.jquery.com/jquery.get/

    });



  $( "#actumareaDiv" ).submit(function( event ) {

        console.log("submit formu");
        /* Stop form from submitting normally */
        event.preventDefault();
        var formData = $(this).serializeArray();
        console.log(formData);

        $.ajax({
           type: "POST",
           url: "/actumareas",
           dataType: "json",
           data: formData,
           
           success: function(data){
              console.log(data);
              console.log('BOOM');
           }
        });

        // other options using $.get
        // http://api.jquery.com/jquery.get/

    });
});