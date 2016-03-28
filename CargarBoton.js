/* 
 * Cargar el archivo html de boton dependiendo de lo que se precione
 */
$(document).ready(function() {
//    $("#AND").click(function() {
//        alert("Entre Al AND");
//        var oID ="#"+ $(this).attr("name");
//        var valor = $(this).attr("name");
//        $(oID).load("AND.php",{valor:valor});
//    }); 
/*el datapicker es para el calendario :D
    $("#dp").datepicker({
        changeMonth: true,
        changeYear: true,
        language: 'es'
    });
*/
});
/*
 * 
 * @param {type} i
 * @returns {undefined}
 */
var formulario;
var CamposImput;
var Campos;
var valorNext;//para la paginación
var valorConsulta;//para la consulta de la paginación
var booleanNext=true;//para saber que fue llamado de next
var prefijos =""; 
var prefixArray =  new Array();
var variablesArray = new Array(1);
variablesArray[0] = new Array("?x");
variablesArray[1] = new Array("?z");
variablesArray[2] = new Array("?y");


window.onload = function()
{
    // Obtiene el formulario	
    formulario = document.getElementById("1");
    //Obtiene todos los tags que sean "input"
    CamposImput = formulario.getElementsByTagName("input");	
    //Obtener todos los tags que sean "div"
    Campos = formulario.getElementsByTagName("DIV");
    //esconder boton de las tablas
    var next = document.getElementById("next").style.display = 'none';
    //para manejar la paginación 
    valorNext = 0;
    valorConsulta="";
    property();//cargar la lista del ?y
    clases();//carga las clases
}

// Action on Click

$( ".btn" ).click(function() {
    setTimeout(function(){
       
    },1000);

});




//funcion para cargar las clases
function clases()
{
    //<i class='icon-spinner icon-spin icon-large'></i>
    var querySparql = "select distinct ?c where{?x rdf:type ?c }";
    console.log(querySparql);
    var ipServer = document.getElementById("ipServer").value;
    var grafo = document.getElementById("grafo").value;
    var endPoint = document.getElementById("endPoint").value;
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint;
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos,
        success:
        function(datos)
        {
            // $('.alert').css('display','none');
           var rtArray = datos.results.bindings;
            var respuesta ="";
                //obtener el  cuerpo de la lista
            for(var i=0; i<rtArray.length; i++)
            {
                var auxCA = rtArray[i];
                //Se extraen los valores
                var lista = Object.keys(auxCA);
                var k ;                             
                for (var objetos in lista)
                {
                    k = JSON.stringify(auxCA[lista[objetos]]);
                    var cortada = k.split('"value":'); 
                    var varr = k.split(",");
                    var res = varr[1].slice(9,varr[1].length-2);
                    //console.log(cortar(res));
                    var valorprefix = uriPrefix2(res);
                    agregarclases(valorprefix);
                    
                }
            }
        }

    });
}
//funcion para cargar las property
function property()
{
    var querySparql = "select distinct ?y where{?x ?y ?z}";
    console.log(querySparql);
    var ipServer = document.getElementById("ipServer").value;
    var grafo = document.getElementById("grafo").value;
    var endPoint = document.getElementById("endPoint").value;
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint;
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos,
        success:
        function(datos)
        {
           var rtArray = datos.results.bindings;
            var respuesta ="";
                //obtener el  cuerpo de la lista
            for(var i=0; i<rtArray.length; i++)
            {
                var auxCA = rtArray[i];
                //Se extraen los valores
                var lista = Object.keys(auxCA);
                var k ;                             
                for (var objetos in lista)
                {
                    k = JSON.stringify(auxCA[lista[objetos]]);
                    var cortada = k.split('"value":'); 
                    var varr = k.split(",");
                    var res = varr[1].slice(9,varr[1].length-2);
                    var valorprefix = uriPrefix2(res);
                    agregarProperty(valorprefix);

                }
            }
        }
    });

}
//funcion cuando sale del campo de la variables
function salio(id,xyz)
{
    console.log("salio del campo "+ id);
    //verificar que no este vacio
    var iddetriple = id+"_TRIPLE";
    var contaa = 0;
    var varvalor="";
    $('input', $('#'+iddetriple)).each(function() 
    {
        var varubicacion = $(this).attr("id")[2];
        if(xyz== varubicacion )
        {
            if(this.value.length<1)
            {
                console.log("campo vacio");
                return;
            }
            console.log("encontre el valor "+ this.value );
            varvalor=this.value;
        }
    });
    //si no existe la variable agregarla
    for (var i = 0; i < variablesArray.length; i++) 
    {
        if(variablesArray[i][0]== varvalor)
        {
            console.log("ya existe la variable");
            return;
        }
    }
    console.log("no existe la variable");
    variablesArray[variablesArray.length] = new Array(varvalor);
}
//funcion para ayuda de variables
// id= identificador, number= 1 x, 2 y, 3 z 
function precionaTeclavariable(id,number)
{
    document.getElementById("Error").innerHTML="";
    //console.log(iddetriple);
    var iddetriple = id+"_TRIPLE";
    var contaa = 0;
    $('input', $('#'+iddetriple)).each(function() 
    {
        var varubicacion = $(this).attr("id")[2];
        if(number== varubicacion )
        {
            console.log("encontre el valor");
            //console.log("valor "+this.value);
            var varvalue = this.value;
            //verificar que empiese con un ?
            if(varvalue[0]=='?')
            {
                console.log("es variable");
                //debo agregar a la lista las variables que hay
                var campoid = number+id;
                var respuesta = "";
                for (var i = 0; i < variablesArray.length; i++) 
                {
                    console.log("variables "+variablesArray[i][0]);
                    respuesta= respuesta + " <option value ="+variablesArray[i][0]+"/> " ;
                }
                $("#"+campoid).html(respuesta);
            }
            else// para decir que debe ser una variable
            {
                console.log("no es variable");
                var mensajeerror = "El valor ingresado no es una variable, debe empesar con '?'";
                $( "#Error" ).append('<label class="control-label" for="inputError">Error: '+mensajeerror+' </label>' );
            }
            return;
        }
        
        console.log("valor "+this.value);
    });
}
//Para cuando77 se preciona un boton en el campo ?z
function precionarTeclaz(id)
{

    //verificar que los campos ?x e ?y no este bacios
    // Si el tipo de campo es una caja de texto
    var iddetriple = id+"_TRIPLE";
    var consulta = " select DISTINCT ?zzzzzz where{ ";
    var idqueva=0;
    var comilla="";
    var comilla2="";
    //console.log(iddetriple);
    $('input', $('#'+iddetriple)).each(function () 
    {
        //verificar que el campo no este vacio
        //verificar que las variables no se repitan
        //console.log(this.value);
        idqueva++;        
        var variabley="";
        if(idqueva==3)
        {
            if(this.value=="" || this.value=="undefined")
            {
                console.log("Campo vacio");
                return;
            }
            variabley=this.value;
            var txtx = variabley.split("\"");
            var txtx2 = variabley.split("'");
            if (txtx.length>1) 
            {
                console.log("Tiene comillas");
                comilla="'";
                comilla2="&quot";
                variabley =  this.value.replace ("\"","");
            }
            if ( txtx2.length>1) 
            {
                console.log("Tiene comillas");
                comilla="\"";
                comilla2="&quot";
                variabley =  variabley.replace ("'","");
            }
            console.log("Texto split "+txtx);

            consulta =consulta+ " ?zzzzzz FILTER regex(?zzzzzz, "+comilla+ variabley+comilla+")";
            //consulta =consulta+ " ?zzzzzz FILTER regex(?zzzzzz, "+"'"+ variabley+"'"+")";
        }
        else if(idqueva==1)
        {
            if(this.value=="" || this.value=="undefined")
            {
               consulta =consulta+ " ?xxxx";
            }
            else
            {
                consulta =consulta+ " "+this.value;
            }
        }
        else if(idqueva==2)
        {
            if(this.value=="" || this.value=="undefined")
            {
               consulta =consulta+ " ?yyyyyy";
            }
            else
            {
                consulta =consulta+ " "+this.value;
            }
        }
    });
    console.log(consulta); 
    consulta = prefixuri(consulta);
    
    var querySparql = consulta +" } LIMIT 5";
    console.log(querySparql);
    var ipServer = document.getElementById("ipServer").value;
    var grafo = document.getElementById("grafo").value;
    var endPoint = document.getElementById("endPoint").value;
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint;
    console.log("aqui");
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos,
        success:
        function(datos)
        {
            var rtArray = datos.results.bindings;
            var respuesta ="";
            console.log("no se que es ");
                //obtener el  cuerpo de la lista
            for(var i=0; i<rtArray.length; i++)
            {
                var auxCA = rtArray[i];
                //Se extraen los valores
                
                var lista = Object.keys(auxCA);
                var k ;
                comilla2="";
                             
                for (var objetos in lista)
                {
                    k = JSON.stringify(auxCA[lista[objetos]]);
                    var cortada = k.split('"value":');
                    console.log(k+"tipo");
                    var varr = k.split(",");
                    var var2 = varr[0].split(":");//obtener el tipo
                    var pr = var2[1];
                    if((var2[1]).length == 5)
                    {
                        var cortadas = cortada[1].slice(1,cortada[1].length-2);
                        var cortadasz = uriPrefix2(cortadas);
                        respuesta = respuesta + " <option value ='"+cortadasz+"'/> " ;
                    }
                    else if((var2[1]).length == 9)
                    {
                        console.log("literal");
                        var var3 = k.split(",");
                        var var4 = var3[1].split(":");
                        var leng = varr[1].split(":");
                        var cortadas = cortada[1].slice(1,cortada[1].length-2);
                        var remplazo = leng[2].replace('\"','');
                        remplazo = remplazo.replace('\"','');
                        respuesta = respuesta + " <option value ='\""+cortadas +"\"@"+remplazo+"'/> " ;
                    }    
                }
            }
            var campoid = "z"+id;
            console.log("RESPUESTA DE LA HACION "+respuesta);     
            $("#"+campoid).html(respuesta);
        }
        ,error: function (obj, error, objError)
        {
            console.log(error+" aaaaaaaaaaaaaa");
            console.log(objError+" eeee");
            console.log(obj+" aaaaaaaaaaaaaa");
        }
    });
    console.log("hhhh"); 
} 

 function precionarTeclax(id)
 {
    for (var i = 0; i < prefixArray.length; i++) {
    console.log(prefixArray[i][0]+"--"+prefixArray[i][1]);
};
    //verificar que los campos ?x e ?y no este bacios
    // Si el tipo de campo es una caja de texto
    var iddetriple = id+"_TRIPLE";
    var consulta = " select DISTINCT ?xxxxxxx where{ ";
    var idqueva=0;
    var comilla="";
    var comilla2="";
    var comilla3="";
     var variabley="";
    //console.log(iddetriple);
    $('input', $('#'+iddetriple)).each(function () {
        //verificar que el campo no este vacio
        //verificar que las variables no se repitan
        console.log(this.value);
        idqueva++;        
       
        if(idqueva==1)
        {
            if(this.value=="" || this.value=="undefined")
            {
                console.log("Campo vacio");
                return;
            }
            variabley=this.value;
            var txtx = variabley.split("\"");
            var txtx2 = variabley.split("'");
            if (txtx.length>1) 
            {
                console.log("Tiene comillas");
                comilla="'";
                comilla2="&quot";
                variabley =  this.value.replace ("\"","");
            }
            if ( txtx2.length>1) 
            {
                console.log("Tiene comillas");
                comilla="\"";
                comilla2="&quot";
                variabley =  variabley.replace ("'","");
            }
            console.log("Texto split"+txtx);

            consulta =consulta+ " ?xxxxxxx ";
        }
        else if(idqueva==3)
        {
            if(this.value=="" || this.value=="undefined")
            {
               consulta =consulta+ " ?zzzz FILTER regex(?xxxxxxx, "+comilla+ variabley+comilla+")";
            }
            else
            {
                consulta =consulta+ " "+this.value+" FILTER regex(?xxxxxxx, "+comilla+ variabley+comilla+")";
            }
        }
        else if(idqueva==2)
        {
            if(this.value=="" || this.value=="undefined")
            {
               consulta =consulta+ " ?yyyyyy";
            }
            else
            {
                consulta =consulta+ " "+this.value;
            }
        }

    });
    console.log("Consulta del x "+consulta); 
    consulta = prefixuri(consulta);
    var querySparql = consulta +" } LIMIT 5";
    var ipServer = document.getElementById("ipServer").value;
    var grafo = document.getElementById("grafo").value;
    var endPoint = document.getElementById("endPoint").value;
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint;
    console.log("Datos: ----"+datos);
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos ,
        success:
        function(datos){
            console.log(datos);
            var rtArray = datos.results.bindings;
            console.log(rtArray);
            var respuesta ="";
                //obtener el  cuerpo de la lista
            for(var i=0; i<rtArray.length; i++){
                var auxCA = rtArray[i];
                //Se extraen los valores
                
                var lista = Object.keys(auxCA);
                var k ;
                             
                for (var objetos in lista){
                    k = JSON.stringify(auxCA[lista[objetos]]);
                    var cortada = k.split('"value":');
                    var cortadas = cortada[1].slice(1,cortada[1].length-2);
                    var cortadas = uriPrefix2(cortadas);
                     respuesta = respuesta + " <option value ='"+cortadas +"'/> " 
                }

            }
            var campoid = "x"+id;
            console.log("RESPUESTA DE LA HACION "+respuesta);     
            $("#"+campoid).html(respuesta);
        }
        ,error: function (obj, error, objError){         
        }
    });
   return;
 }
 //
  function precionarTeclay(id)
 {
     var iddetriple = id+"_TRIPLE";
 }
 //funcion para cargar ?y a la lista
 function cargarlistay(id)
 {
    var respuesta ="";
    var max = 0;
   /*$('#tablaproperty tr').each(function() {
    if (!this.rowIndex) return; // skip first row
    var customerId = this.cells[0].innerHTML;
    //console.log(customerId); 
    if(max < 10)
    {
       //respuesta = respuesta + " <option value ='"+customerId+"'/> " ; 
       respuesta = respuesta + " <option value ='"+"hola"+"'/> " ; 
    }
    max = max+1;
}); */
    var campoid = "y"+id;
    respuesta = " <option value ='nada'/> " ;
    console.log("RESPUESTA DE LA HACION yyyy "+respuesta);     
    $("#"+campoid).html(respuesta);

    //$("#"+campoid).html(respuesta);
    console.log($("#"+campoid));
    return;
 }
/**
* Eliminar el panel
*/
function borrarPanel(id)
{
    var alerta = "Elimino panel "+id;
    console.log(alerta);
   
        bootbox.confirm("¿Está seguro que desea eliminar el elemento "+id +"?", function(result) {
        if(result== true)
        {
            var x ="#"+id;
            var valor = id;
            $(x).load('Opciones.php',{valor:valor});
            
        }
        }); 
}
/**
*/
function mi_alerta(){
confirmar=confirm("Pulsa sobre las siguientes opciones.");
if (confirmar)
alert("Seleccionaste aceptar")
else
alert("Seleccionaste cancelar")
}
/**
* Eliminar el panel con un id que no sea numero
*/
function borrarPanel2(id,id2)
{
    var alerta = "Elimino panel "+id;
        console.log(alerta);
        bootbox.confirm("¿Está seguro que desea eliminar el elemento "+id +"?", function(result) {
            if(result== true)
            {
                var x ="#"+id+id2;
                var valor = id;
                $(x).load('Opciones.php',{valor:valor});
            }
        }); 
            
}

function GetCampos()
{
    for(var i=0; i< CamposImput.length; i++) 
    {	
        // Si el tipo de campo es una caja de texto
        if(CamposImput[i].type == "text")
        {            
            if(ValidarCampo(CamposImput[i]) == false)
            {
                bootbox.alert("Debe completar todos los campos", function() {

                });
                return;
            }           
        }
    }
    // debo limpiar el div 
    document.getElementById("principal").innerHTML="";
    document.getElementById("principal1").innerHTML="";
    document.getElementById("Consulta").innerHTML="";
    document.getElementById("Error").innerHTML="";
    //    Debo ver que el formulario este corecto para hacer un string para la consulta
    var lista =new Array();
    for(var i=0; i< Campos.length; i++) {
        var cadena = Campos[i].id;
        var palabrasSeparadas = cadena.split("_");
        var numero= palabrasSeparadas[0];
        var palabra= palabrasSeparadas[1];
        //verificar que sea un div correcto
        if((numero!="") &&( palabra!="" || palabra!="undefined"))
        {
            //verificar que este completo el formulario
            //es decir que no esten las Opciones
            if(palabra=="OPCIONES")
            {
                $("#Modal").modal("show");
                return;
            }
            //en caso contrario creo la lista para hacer la consulta
            lista[numero]=palabra;
        }        
    }
    //todo esta completado ahora hacer el string para la consulta
    //alert("Lista:"+lista);
    //para el primer caso la lista esta vacia
    if(lista.length==0)
    {
        //alert("Lista vacia");
        $("#Modal").modal("show");
        return;
    }
    //confecionar la lista
    var consulta;
    var select = document.getElementById("select").value;
    consulta = " select "+select +" where{"+Funcion(lista,1)+" }";
    var Consulta = "select "+select+ "<br> where{ <br><p>"+Funcion2(lista,1)+"</p><br> }";
    //consulta solo el cuerpo
    //alert("Consulta "+consulta);
    $("#Consulta").append('<h4 class="bg-primary"> Consulta </h4> ');
    $("#Consulta").append('<font face="Comic Sans MS"  size="3">'+Consulta +'</font>');
    iniciarConsulta(consulta);

    return;
}
/**
* cambio Texto para cargar la consulta
*/
 function cambioTexto()
 {
    document.getElementById("Consulta").innerHTML="";
    var lista =new Array();
    for(var i=0; i< Campos.length; i++) {
        var cadena = Campos[i].id;
        var palabrasSeparadas = cadena.split("_");
        //console.log("Esta es la cadena"+cadena);
        var numero= palabrasSeparadas[0];
        var palabra= palabrasSeparadas[1];

        //verificar que sea un div correcto
        if((numero!="") &&( palabra!="" || palabra!="undefined"))
        {
            //en caso contrario creo la lista para hacer la consulta
            lista[numero]=palabra;
        }        
    }
    //todo esta completado ahora hacer el string para la consulta
    //alert("Lista:"+lista);
    //para el primer caso la lista esta vacia
    if(lista.length==0)
    {
        //alert("Lista vacia");
        $("#Modal").modal("show");
        return;
    }
    //confecionar la lista
    var consulta;
    var select = document.getElementById("select").value;
    consulta = " select "+select +" where{"+Funcion(lista,1)+"} ";
    var Consulta = "select "+select+ "<br> where{ <br>"+Funcion2(lista,1)+"<br> }";
    //consulta solo el cuerpo
    //alert("Consulta "+consulta);
    $("#Consulta").append('<h4 class="bg-primary"> Consulta </h4> ');
    $("#Consulta").append('<font face="Comic Sans MS"  size="3">'+Consulta +'</font>');
 }
/** Encargada de llamaar a peticionHTTP
 * Nesecito el String de la consulta para mostar la respuesta
 * @param {type} String
 */

function iniciarConsulta(consulta)
{
   // alert("ENTRE");
   if(booleanNext==true)
   {
        valorConsulta = consulta;
        booleanNext=false;
   }
    
    // debo limpiar el div 
    document.getElementById("principal").innerHTML="";
    document.getElementById("principal1").innerHTML="";
    console.log("consulta sin tranformar "+consulta);
    consulta =prefixuri(consulta);
    console.log("consulta tranformada  "+consulta);
    var querySparql = consulta +" LIMIT "+10+" OFFSET "+(valorNext*10);
    var ipServer = document.getElementById("ipServer").value;
    var grafo = document.getElementById("grafo").value;
    var endPoint = document.getElementById("endPoint").value;
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint;
    console.log("----------------------"+datos);
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos ,
        success:
        function(datos){

            var rtArray = datos.results.bindings;
            //resultados
            //obtener el titulo de la tabla
            $("#principal1").append('<h4 class="bg-primary"> Respuesta </h4>');
            //$( "#principal" ).append('<tr>'); 
            if(rtArray.length> 0)
            {
                var cabeza = rtArray[0];
                var listaCabeza = Object.keys(cabeza);
                var mostrar = '<thead> <tr> <th class="text-center">#</th> ';
                for (var i =0; i<listaCabeza.length; i++) {
                  mostrar =mostrar +  '<th class="text-center">'+listaCabeza[i]+'</th>';  
                }
                mostrar = mostrar +"</tr></thead>"
                 $( "#principal" ).append(mostrar); 
            }
            //$( "#principal" ).append('</tr>');
                //obtener el  cuerpo de la lista
            for(var i=0; i<rtArray.length; i++){
                var auxCA = rtArray[i];
                //Se extraen los valores
                //auxCA = auxCA.toString();
                var respuesta ="";
                var lista = Object.keys(auxCA);
                var k ;
                respuesta = respuesta+"<tr><td>"+(i+1)+"</td>" ;
                
                for (var objetos in lista){
                    k = JSON.stringify(auxCA[lista[objetos]]);
                    var cortada = k.split('"value":');
                    var cortadas = cortada[1].slice(1,cortada[1].length-2);
                    //console.log("Es esto"+cortadas);
                    respuesta = respuesta + "<td>"+uriPrefix2(cortadas) + "</td>" ;
                }
                //por el momento doy el x y z manual
                    // respuesta =respuesta+"<tr><td> "+auxCA.x.value + "</td><td> " 
                    // +auxCA.y.value+ "</td><td> " +auxCA.z.value+"</td></tr>";
                respuesta = respuesta +"</tr>";            
                $( "#principal" ).append(respuesta);
                document.getElementById("next").style.display = 'block';
                //console.log(respuesta);
            }
            // alert(respuesta);
            // $( "#principal" ).append('</table>'); 
            // // $( "#principal" ).append('</tbody></table>');
            // $( "#principal" ).append('</div>'); 
        }
        ,
        error: function (obj, error, objError){
            alert('No fue posible extraer la información.'+obj.responseText);
            var errores = obj.responseText.search("file_get_contents");
            if(errores != -1)
            {
                $( "#Error" ).append('<label class="control-label" for="inputError">Error: Sisntaxis o conexion</label>' );
            }
            var errore2 = obj.responseText.search("Maximum execution time");
            if(errore2 != -1)
            {
                $( "#Error" ).append('<label class="control-label" for="inputError">Error: Maximo de tiempo</label> ');
            }
            //$( "#Error" ).append("<div> Error: "+obj.responseText+"</div>");
            //document.write("Error: "+obj.responseText);
           // 
        }
    });
}

/**
 * Funcion que confeciona el string para la consulta en html
 * no tiene select, form, where, prefijos -- informacion faltante --
 * @param {type} lista
 * @param {type} i
 * @returns {Element.value|undefined|String}
 */
function Funcion2(lista,i)
{
    if(lista[i]== "TRIPLE")
    {
        var valor = i+" x" 
        var retorno = document.getElementById(valor).value;
        var n = retorno.search("http");
        if(n == 0)
        {
            retorno = '"&#139'+retorno+'&rsaquo"';
        }
        valor = i+" y" 
        var ret = document.getElementById(valor).value;
        var n = ret.search("http");
        if(n == 0)
        {
            ret = '"&#139'+retorno+'&rsaquo"';
        }
        retorno = retorno+" "+ret;
        valor = i+" z" 
        var ret = document.getElementById(valor).value;
        var n = ret.search("http");
        if(n == 0)
        {
            ret = "<"+ret+">";
        }
        retorno = retorno+" "+ret;
        console.log(retorno);
        return retorno;
    }
    if(lista[i]== "CONDITION")
    {
        var valor = i+" v" 
        return document.getElementById(valor).value;
    }
    if(lista[i]== "AND")
    {
        return "{ "+Funcion2(lista,i*2)+" . <br>"+Funcion2(lista,(i*2)+1)+" }";
    }
    if(lista[i]== "UNION")
    { 
        return "{{ "+Funcion2(lista,i*2)+" } <br>UNION <br>{ "+Funcion2(lista,(i*2)+1)+" }}";
    }
    if(lista[i]== "OPTIONAL")
    {
        return "{{ "+Funcion2(lista,i*2)+" } <br>OPTIONAL<br> { "+Funcion2(lista,(i*2)+1)+" }}";
    }
    if(lista[i]== "FILTER")
    {
        return "{{ "+Funcion2(lista,i*2)+" } <br>FILTER ( "+Funcion2(lista,(i*2)+1)+" )}";
    }
    return ;
}
/**
 * Funcion que confeciona el string para la consulta
 * no tiene select, form, where, prefijos -- informacion faltante --
 * @param {type} lista
 * @param {type} i
 * @returns {Element.value|undefined|String}
 */
function Funcion(lista,i)
{
    if(lista[i]== "TRIPLE")
    {
        var valor = i+" x" 
        var retorno = document.getElementById(valor).value;
        valor = i+" y" 
        retorno = retorno+" "+document.getElementById(valor).value;
        valor = i+" z" 
        retorno = retorno +" "+ document.getElementById(valor).value;
        return retorno;
    }
    if(lista[i]== "CONDITION")
    {
        var valor = i+" v" 
        return document.getElementById(valor).value;
    }
    if(lista[i]== "AND")
    {
        return "{ "+Funcion(lista,i*2)+" . "+Funcion(lista,(i*2)+1)+" }";
    }
    if(lista[i]== "UNION")
    {
        return "{{ "+Funcion(lista,i*2)+" } UNION { "+Funcion(lista,(i*2)+1)+" }}";
    }
    if(lista[i]== "OPTIONAL")
    {
        return "{{ "+Funcion(lista,i*2)+" } OPTIONAL { "+Funcion(lista,(i*2)+1)+" }}";
    }
    if(lista[i]== "FILTER")
    {
        return "{{ "+Funcion(lista,i*2)+" } FILTER ( "+Funcion(lista,(i*2)+1)+" )}";
    }
    return ;
}

/**
 * Validar campo vacio
 * @param {type} i
 * @returns {undefined}
 */
function ValidarCampo( a)
{
    if (a.value != "")
    {
        return true;
    }    
    return false;
}

/* Cargar archivo PHP
 * Carag archivo php de la opcion(operador) and
 * @param {type} i identificador del div
 * @returns archivo php
 */
function And(i)
{
    var oID ="#"+ i;
    var valor = i;
    $(oID).load("AND.php",{valor:valor}); 
}
/* Cargar archivo PHP
 * Carag archivo php de la opcion(operador) Union
 * @param {type} i identificador del div
 * @returns archivo php
 */
function Union(i)
{
    var oID ="#"+ i;
    var valor = i;
    $(oID).load("Union.php",{valor:valor}); 
}
/* Cargar archivo PHP
 * Carag archivo php de la opcion(operador) Optional
 * @param {type} i identificador del div
 * @returns archivo php
 */
function Optional(i)
{
    var oID ="#"+ i;
    var valor = i;
    $(oID).load("Optional.php",{valor:valor}); 
}
/* Cargar archivo PHP
 * Carag archivo php de la opcion(operador) Filter
 * @param {type} i identificador del div
 * @returns archivo php
 */
function Filter(i)
{
    var oID ="#"+ i;
    var valor = i;
    $(oID).load("filter.php",{valor:valor}); 
}
/* Cargar archivo PHP
 * Carag archivo php de la opcion(operador y index) Condicion
 * @param {type} i identificador del div
 * @returns archivo php
 */
function Triple(i,tipo)
{
    var oID ="#"+ i;
    var valor = i;
    console.log(tipo);
    var ubicacion = "./triples/"+tipo+".php";
    $(oID).load(ubicacion,{valor:valor});
    
}
/* Pasar a la siguiente tabla
*   
*/
function next()
{
    valorNext = valorNext +1;
    iniciarConsulta(valorConsulta);
    booleanNext=true;
}
function previous()
{
    if(valorNext !=0)
    {
        valorNext = valorNext-1
        iniciarConsulta(valorConsulta);
        booleanNext=true;
    }
}
// funcion para destranformar los prefijos a uri, intento 1
function prefixuri(consulta)
{
    console.log("+++++++++++++++++"+consulta);
    var listac = consulta.split(" ");
    consulta="";
    for (var j = 0; j < listac.length; j++) 
    {

        for (var i = 0; i < prefixArray.length; i++) 
        {
            var corta = prefixArray[i][0];//georss:point
            var corta1 = corta.split(":");
            var corta2 = corta1[0]+":";// georss:
            var list1 = listac[j].split(":");//georss:point
            var valora = prefixArray[i][1];

            //console.log(corta2+"-"+list1[0]+":"+valora);
            if (corta2==(list1[0]+":"))
            {
                console.log("Encontr el prefijo "+ corta2);
                var res  =listac[j].replace(corta2,valora);
                listac[j] = "<"+res+">";
                console.log(listac[j]);
            }    
        }
    }
    for (var i = 0; i < listac.length; i++) 
    {
        consulta =consulta + listac[i]+" ";
    }
    return consulta;
}

//funcion para agregar una fila a la tabla de prefijos
function agregarFila(name, uris ){
    var cadena = '<tr><td>'+name+'</td><td>'+uris+'</td></tr>';
    $('#tablaprefix').append(cadena);
}
//funcion que agrega fila a tablaproperty
function agregarProperty(uris ){
    var cadena = '<tr><td>'+uris+'</td></tr>';
    $('#tablaproperty').append(cadena);
}
//funcion que agrega fila a tablaclase
function agregarclases(uris ){
    var cadena = '<tr><td>'+uris+'</td></tr>';
    $('#tablaclases').append(cadena);
}


function eliminarcaracteres(stringToReplace){
    var specialChars = "!@$^&%*()+=-[]{}|:<>?,.";
    for (var i = 0; i < specialChars.length; i++) {
        stringToReplace = stringToReplace.replace(new RegExp("\\" + specialChars[i], 'g'), '');
    }
    //specialChars = "jhjh008767n870";

 stringToReplace=stringToReplace.replace(new RegExp("[0-9]", "g"), "");

    return stringToReplace;
}
function verificar(uri,caracteresIn,caraterFin,carater){
var original=uri;
    var pos1=uri.indexOf(caracteresIn);
    var posx=uri.indexOf(carater);
    var pos2=uri.indexOf(caraterFin);
    var n=0;
    var cont=0;
    n=uri.indexOf(carater);
    var dividir=false;
    var indices = [];
    var indices1 = [];
    var indices2 = [];
    for(var i=0; i<uri.length;i++) {
        if (uri[i] === carater)
            indices.push(i);
        if (uri[i] === caracteresIn) 
            indices1.push(i);
        if (uri[i] === caraterFin)
            indices2.push(i);
    }
    pos1=indices1[indices1.length-1];
    pos2=indices2[indices2.length-1];
    if(indices[indices.length-1]>pos2){
        return false;
    }
    while(cont<uri.length){
        
        if(pos1<uri.indexOf(carater,n)&&uri.indexOf(carater,n)<pos2){

                dividir=true;
            break;
        }else{
            n=uri.indexOf(carater,n);
            n++;
        }
         cont++;
    }
    if(dividir){
        uri=uri.slice(0,pos1);
        var indices = [];
        var data = [];
        for(var i=0; i<uri.length;i++) {
            if (uri[i] === carater) indices.push(i);
        }
        uri=uri.slice(0,indices[indices.length-1]);

        original=original.split(uri+"/");

        data.push(uri);
        data.push(original[1]);
        return data;
    }
    return false;
}
/* 
*   funcion escargada de tranformar 
*   las uri a valor con prefijo
*/
function uriPrefix2(uri){
    if(uri.indexOf('http') == -1)
    {
        return uri;
    }
    var nameprefix = "";
    //console.log(uri);
    var elemento=new Array();
    var array=uri.split('#');
    var texto="";
    if(array.length>1){
        //console.log("1");
        var array2=[]
        var aux=verificar(array[0],"(",")","/");
        if( aux!=false){
            array2=aux[0].split('/');
            array2.push(aux[1]);
        }else
            array2=array[0].split('/');

        for(var x=array2.length-1;x>=0;x-- ){
            //console.log("12");
            var cadena=eliminarcaracteres(array2[x]);
            //console.log(cadena);
            nameprefix = cadena;
            if(cadena!=""){
                elemento.push(cadena+":"+array[array.length-1]);
                for(var x=0;x<array2.length-1;x++ ){
                    texto=texto+array2[x]+"/"
                }
                elemento.push(array[0]+"#");
                break;
            }
        }
    }else{
        var aux=verificar(uri,"(",")","/");
        if( aux!=false){
            array=aux[0].split('/');
            array.push(aux[1]);
        }else
            array=uri.split('/');
        //console.log(array);
        for(var x=array.length-2;x>=0;x-- ){
            var cadena=eliminarcaracteres(array[x]);
            nameprefix = cadena;
            if(cadena!=""){
                elemento.push(cadena+":"+array[array.length-1]);
                for(var x=0;x<array.length-1;x++ ){
                    texto=texto+array[x]+"/"
                }
                elemento.push(texto);
                break;
            }
        }
    }
    //ver si esta en el arreglo
    for (var i = 0; i < prefixArray.length; i++) {
        if(prefixArray[i][1]== elemento[1])
        {
            if((nameprefix+':') == prefixArray[i][0])
            {
                //console.log("elemento ya agregado "+ elemento[1]);
                return elemento[0]; 
            }
            else // debo cambiar el nameprefix
            {
                elemento[0] = prefixArray[i][0]+elemento[0].split(':')[1];
            }
            
        }
    };
    //verificar el nombre
    for (var i = 0; i < prefixArray.length; i++) {
        if(prefixArray[i][0]== (nameprefix+":"))
        {
           nameprefix=nameprefix+"a"; 
        }
    };
    //no esta debo agregar
    //console.log("Agrege "+ elemento[1]);
     var cadenab=nameprefix.replace(/ /g,'&nbsp');
    if(elemento[1]== 'undefined' || elemento[1] =='<>' || cadenab == ":")
    {
        return elemento[0];
    }
    prefixArray[prefixArray.length]= new Array(nameprefix+':',elemento[1]) ;
    //debo agregar el prefijo
    //console.log("Este fue agregado "+nameprefix);
    prefijos = prefijos+ " prefix "+prefixArray[prefixArray.length-1][0]+" <"+ prefixArray[prefixArray.length-1][1]+">";
    agregarFila(prefixArray[prefixArray.length-1][0],prefixArray[prefixArray.length-1][1]);

    //console.log("elemento: "+elemento);

    return elemento[0];
}
function YO(id,tipo)
{
    var oID ="#"+ id;
    var valor = id;
    $(oID).load("./contition/"+tipo+".php",{valor:valor}); 
}
function Basica(id,tipo)
{
    var oID ="#"+ id;
    var valor = id;
    $(oID).load("./contition/"+tipo+".php",{valor:valor}); 
}