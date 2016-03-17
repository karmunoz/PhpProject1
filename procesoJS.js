function iniciarConsulta(consulta){
    var querySparql = consulta;
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data: "q=" + querySparql ,
        success:
        function(datos){

            var rtArray = datos.results.bindings;
            //resultados
            //alert(rtArray.toString());

            for(var i=0; i<rtArray.length; i++){
                var auxCA = rtArray[i];
                //Se extraen los valores
                var x =auxCA.X.value;
                var y =auxCA.Y.value;
                var z = auxCA.Z.value;
                                               
                $( "#principal" ).append("<div>"+i+" "+ x +" "+ y +" "+ z +"<br/></div>");
            }  
        }
        ,
        error: function (obj, error, objError){
            alert('No fue posible extraer la información.'+obj.responseText);
            //document.write("Error: "+obj.responseText);
            $( "#principal" ).append("<div> Error: "+obj.responseText+"</div>");
            alert('No fue posible extraer la información.'+obj.responseText);
        }
    });
}