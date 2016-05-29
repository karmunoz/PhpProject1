
/*
* Para la busqueda en las tabla de prefijo, class and property
*/
$(document).ready(function()
{
    $('[data-toggle="tooltip"]').tooltip();
});
var agregarcampox = 1;//variable para el botom +
var formulario;
var CamposImput;
var Campos;
var valorNext;//para la paginación
var valorConsulta;//para la consulta de la paginación
var booleanNext=true;//para saber que fue llamado de next
var paginaModal=-1;
var iji =0; //para llevar la cuenta de los radio en modal
var num1 =0;
var consultaModal="";
var prefijos ="";
var tipobusqueda ="";
var idbusqueda ="";
var vartipox="";
var vartipoy="";
var vartipoz="";
var completo ;//para los name en prefijos que se repiten
var prefixArray;
var classArray ;
var PropertyArray;
var tablaClases ;
var tablaProperty ;
var ipServer ;
var grafo ;
var endPoint= "http://dbpedia.org/sparql" ;
var identi;
window.onload = function()
{
    identi = Math.random();
    $(window).load(function(){
    $('#myModal').modal('show');});
    
    prefixArray =  new Array();
    classArray = new Array();
    PropertyArray = new Array();
    tablaClases = new Array();
    tablaProperty = new Array();
    completo = 0;
    // Obtiene el formulario    
    formulario = document.getElementById("1");
    //Obtiene todos los tags que sean "input"
    CamposImput = formulario.getElementsByTagName("input"); 
    //obtener todos los tags que sean select
    CamposSelect = formulario.getElementsByTagName("select"); 
    //Obtener todos los tags que sean "div"
    Campos = formulario.getElementsByTagName("DIV");
    //esconder boton de las tablas de consulta
    var next = document.getElementById("next").style.display = 'none';
    //esconder botones de modal 
    cargarphp();//cargar archivos php a la vista
    //para manejar la paginación
    valorNext = 0;
    valorConsulta=""; 
    //para los cargar datos 
    //ipServer = document.getElementById("ipServer").value;
    //grafo = document.getElementById("grafo").value;
    // endPoint = document.getElementById("endPoint").value;
    document.getElementById("idenpoint").innerHTML = endPoint;
    // clases();//carga las clases
    // property();//cargar la lista del ?y  
}
function cargarConex()
{   
    $("#myModal").modal('hide');
    console.log("acepto");
}
function abrirmodal()
{
    $("#cargagrafo tr").remove();
    document.getElementById("mensajemodal").innerHTML="";
}
//funcion para buacar grafo en bd
function reloj1()
{
    var algor =document.getElementById("mensajemodal").innerHTML;
    if(algor ==="Realizando consulta...")
    {
        document.getElementById("mensajemodal").innerHTML="No hubo respuesta, verifique URL.";
    }
}
function buscog()
{
    document.getElementById("mensajemodal").innerHTML="";
    //cargagrafo
    //obtener campos
    $("#cargagrafo tr").remove();
    //ipServer1 = document.getElementById("ipServer").value;
    endPoint1 = document.getElementById("endPoint").value;
    var ubi = (document.getElementById("endPoint").value).lastIndexOf("/");
    var t = endPoint1.substring(0, ubi);
    if(ubi == endPoint1.length-1 )
    {
        console.log("tiene / al final")
        t = endPoint1.substring(0, ubi);
        ubi = t.lastIndexOf("/");
        t = t.substring(0,ubi);
    }    
    ipServer1 = t;
    if(ipServer1!="" || endPoint1 !="" )
    {
        ipServer = ipServer1;
        endPoint = endPoint1;
    document.getElementById("mensajemodal").innerHTML="Realizando consulta...";
    var querySparql = "select distinct ?g where{ GRAPH ?g {?s ?p ?o }}";
    console.log(querySparql+"###"+ipServer1+"###"+"default"+"###"+endPoint1+"###"+identi);
    var datos = "q=" + querySparql +"###"+ipServer1+"###"+"default"+"###"+endPoint1+"###"+identi;
    num1=0;
    setInterval("reloj1()",31000);
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
            //console.log(rtArray+" kk "+rtArray.indexOf("Warning"));
            if(rtArray.length <= 0 )
            {
                document.getElementById("mensajemodal").innerHTML="No hubo respuesta, verifique URL.";
            }
            else{document.getElementById("mensajemodal").innerHTML="";}
            for(var i=0; i<rtArray.length; i++)
            {
                var auxCA = rtArray[i];
                //Se extraen los valores
                var lista = Object.keys(auxCA);
                var k ; 
                //console.log(lista.length);
                for (var objetos in lista)
                {
                    k = JSON.stringify(auxCA[lista[objetos]]);
                    var cortada = k.split('"value":'); 
                    var varr = k.split(",");
                    var res = varr[1].slice(9,varr[1].length-2);
                    //console.log(cortar(res));
                    //var cadena = '<tr><td onclick="toqueesto(this.innerHTML)" id="'+res+'" >'+res+'</td></tr>';
                    var aaa = '<div class="radio"><label><input type="radio" id="'+num1+'" name="deacuerdo1">'+res+'</label></div>'
                    var cadena = '<tr><td>'+aaa+'</td></tr>';
                    num1++; 
                    $('#cargagrafo').append(cadena);
                                     
                }
            }
        }

    });
    }
}
// function toqueesto(res)
// {
//     console.log(res);
//     document.getElementById("grafo").value = res;
// }
//funcion para cargar los paneles
function funcionextra(id)    
{
    //console.log(prefixArray);
    var idd = id+"s";
    var x = document.getElementById(idd).value;
    if(x.charAt(0)=== "V" || x.charAt(0)=="C")
    {
        Triple(id,x);
    }
    else
    {
        switch(x){
            case "And":
                And(id);
                break;
            case "Optional":
                Optional(id);
                break;
            case "Union":
                Union(id);
                break;
            case "Filter":
                Filter(id);
                break;
        }
    }
}
function funcionextra2(id)
{
    var idd = id+"s2";
    var x = document.getElementById(idd).value;
    if(x==="Y" || x==="O" || x==="N")
    {
        YO(id,x);
    }
    else
    {
        Basica(id,x);
    }
}
/*
* Para la busqueda en las tabla de prefijo, class and property
*/
function searchTable(inputVal,id)
{
    var idt = '#'+id;
    var table = $(idt);
    table.find('tr').each(function(index, row)
    {
        var allCells = $(row).find('td');
        if(allCells.length > 0)
        {
            var found = false;
            allCells.each(function(index, td)
            {
                var regExp = new RegExp(inputVal, 'i');
                if(regExp.test($(td).text()))
                {
                    found = true;
                    return false;
                }
            });
            if(found == true)$(row).show();else $(row).hide();
        }
    });
}
function Limpiar()
{
    bootbox.confirm("¿Está seguro que desea limpiar todo?", function(result) {
        if(result== true)
        {
            var x ="#"+1;
            var valor = 1;
            $(x).load('Opciones.php',{valor:valor});
            document.getElementById("principal").innerHTML="";
            document.getElementById("principal1").innerHTML="";
            document.getElementById("Consulta").innerHTML="";//limpio y escondo
            document.getElementById("Error").innerHTML="";
            $('#selectbody').load('./select/body.php');//limpiio el select
            document.getElementById("next").style.display = 'none';//escondo boton 
        }
    });
}
/**
*   funcion cuando cancela la carga de datos
*/
function cancelardatos()
{
    //document.getElementById("ipServer").value = ipServer;
    //document.getElementById("grafo").value  = grafo;
    document.getElementById("endPoint").value =endPoint; 
}
function cargardatos()
{   
    var resultadom=""; 
    var porNombre=document.getElementsByName("deacuerdo1");
    // Recorremos todos los valores del radio button para encontrar el
    // seleccionado
    var selwect = true;
    for(var i=0;i<porNombre.length;i++)
    {
        if(porNombre[i].checked)
        {
            resultadom=porNombre[i].id;
            selwect = false;
        }
    }
    var lotengo="";
    if (selwect == false)
    {
        console.log("resultado: "+ resultadom );
        var t=document.getElementById('cargagrafo'); 
        var f=t.getElementsByTagName('td');
        lotengo = f[resultadom].childNodes[0].innerText;
        console.log(lotengo);
    }
    $("#cargagrafo tr").remove();
    //ipServer1 = document.getElementById("ipServer").value;
    endPoint1 = document.getElementById("endPoint").value;
    var ubi = (document.getElementById("endPoint").value).lastIndexOf("/");
    var t = endPoint1.substring(0, ubi);
    if(ubi == endPoint1.length-1 )
    {
        console.log("tiene / al final")
        t = endPoint1.substring(0, ubi);
        ubi = t.lastIndexOf("/");
        t = t.substring(0,ubi);
    }    
    ipServer1 = t;
    var nt = document.getElementById("endPoint").value;
    if( lotengo !="")
    {
        endPoint = document.getElementById("endPoint").value;
        ipServer =ipServer1;
        grafo = lotengo;
        document.getElementById("idenpoint").innerHTML = endPoint;
        document.getElementById("idgrafo").innerHTML = grafo;
        document.getElementById("principal").innerHTML="";
        document.getElementById("principal1").innerHTML="";
        document.getElementById("Consulta").innerHTML="";
        document.getElementById("Error").innerHTML="";
        prefixArray =new Array();
        document.getElementById("selectPrefijos").innerHTML = "";
        $("#tablaproperty tr").remove();
        $("#tablaclases tr").remove();
        $("#tablaprefix tr").remove();
        classArray = [];
        PropertyArray = [];
        tablaProperty= [];
        tablaClases = [];
        andPrefix("Todo","");
        completo = 0;
        clases();
        property();
        console.log("prefixArray " +prefixArray);
    }
    //
    // var er = document.getElementById("ipServer").value;
    // var fo = document.getElementById("grafo").value;
    // var nt = document.getElementById("endPoint").value;
    // if( er =! ipServer || fo != grafo || nt !=endPoint)
    // {
    //     console.log("hay cambio");
    //     ipServer = document.getElementById("ipServer").value;
    //     grafo = document.getElementById("grafo").value;
    //     endPoint = document.getElementById("endPoint").value;
    //     document.getElementById("idenpoint").innerHTML = endPoint;
    //     document.getElementById("principal").innerHTML="";
    //     document.getElementById("principal1").innerHTML="";
    //     document.getElementById("Consulta").innerHTML="";
    //     document.getElementById("Error").innerHTML="";
    //     //elimiarc ontenido y listas
    //     prefixArray =new Array();
    //     console.log("elimino los Array");
    //     document.getElementById("selectPrefijos").innerHTML = "";
    //     $("#tablaproperty tr").remove();
    //     $("#tablaclases tr").remove();
    //     $("#tablaprefix tr").remove();
    //     //console.log("debo eliminar");
    //     classArray = [];
    //     PropertyArray = [];
    //     tablaProperty= [];
    //     tablaClases = [];
    //     andPrefix("Todo","");
    //     completo = 0;
    //     //cargar los datos de nuevo
    //     clases();
    //     property();
    //     console.log("prefixArray " +prefixArray);
    // }    
}
/**
*   funcion para agregar una prefijo al select de prefijo
**/
function andPrefix(prefixname,prefixuria)
{
    var x = document.getElementById("selectPrefijos");
    var option = document.createElement("option");
    option.setAttribute("value",prefixname);
    option.text = ""+prefixname+" <"+ prefixuria+">";
    x.add(option);
}
/**
* funcion que captura el evento del select prefijo y filtra las tablas de class property
*/
function busquedaSPrefijos()
{
    tablaProperty= [];
    tablaClases = [];
    var valors = document.getElementById("selectPrefijos").value;
    if(valors === "Todo")
    {
        document.getElementById('searchclass').value ="";
        document.getElementById('sproperty').value ="";
        busquedaClass2("");
        busquedaProperty2("");
    }
    else
    {
        document.getElementById('searchclass').value ="";
        document.getElementById('sproperty').value ="";
        busquedaClass2(valors);
        busquedaProperty2(valors);
    }
}
/**
*   Funcion para filtrar los prefijos
*/
function busquedaSPrefijos2()
{    
    var textoa = document.getElementById("searchselectPrefijos").value;
    document.getElementById("selectPrefijos").innerHTML = "";
    andPrefix("Todo","");
    for (var i = 0;  i < prefixArray.length; i++)
     {
        if(prefixArray[i][0].search(textoa) != -1 || prefixArray[i][1].search(textoa) != -1)
        {
            andPrefix(prefixArray[i][0],prefixArray[i][1]);
        }
    };
}
/**
* Funcion para buscar en tabla class
*/
function busquedaClass()
{
    var textoclass = document.getElementById('searchclass').value;
    $("#tablaclases tr").remove();
    for (var i = 0; i < tablaClases.length; i++) {
        if(tablaClases[i].search(textoclass) != -1)
        {
            agregarclases(tablaClases[i]);
        }
    };
}
function busquedaClass2(textoclass)
{
    $("#tablaclases tr").remove();
    for (var i = 0; i < classArray.length; i++) {
        if(classArray[i].search(textoclass) != -1)
        {
            agregarclases(classArray[i]);
            tablaClases.push(classArray[i]);
        }
    };
}
/**
* Funcion para buscar en la tabla de property
*/
function busquedaProperty()
{
    var textoclass = document.getElementById('sproperty').value;
    $("#tablaproperty tr").remove();
    for (var i = 0; i < tablaProperty.length; i++) {
        if(tablaProperty[i].search(textoclass) != -1)
        {
            agregarProperty(tablaProperty[i]);
        }
    };
}
function busquedaProperty2(textoclass)
{
    $("#tablaproperty tr").remove();
    for (var i = 0; i < PropertyArray.length; i++) {
        if(PropertyArray[i].search(textoclass) != -1)
        {
            agregarProperty(PropertyArray[i]);
            tablaProperty.push(PropertyArray[i]);
        }
    };
}

/**
*   Caragar el panel de select y modal
*/
function cargarphp()
{
    $('#selectbody').load('./select/body.php');
    $('#modal1').load('./modal/modalx.php');    
}
//funcion para cargar las clases
function clases()
{
    document.getElementById("Error").innerHTML="";
    $( "#Error" ).append('<label class="control-label" for="inputError">Buscando Class...</label> ');
    var querySparql = "select distinct ?c where{?x rdf:type ?c }";
    console.log(querySparql);
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint +"###"+identi;
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos,
        success:
        function(datos)
        {
            document.getElementById("Error").innerHTML="";
            var rtArray = datos.results.bindings;
            var respuesta ="";
            //console.log("Respuesta tamaño "+rtArray.length);
                //obtener el  cuerpo de la lista
            for(var i=0; i<rtArray.length; i++)
            {
                var auxCA = rtArray[i];
                //Se extraen los valores
                var lista = Object.keys(auxCA);
                var k ; 
                //console.log(lista.length);
                for (var objetos in lista)
                {
                    k = JSON.stringify(auxCA[lista[objetos]]);
                    var cortada = k.split('"value":'); 
                    var varr = k.split(",");
                    var res = varr[1].slice(9,varr[1].length-2);
                    //console.log(cortar(res));
                    var valorprefix = uriPrefix2(res);
                    classArray.push(valorprefix);
                    tablaClases.push(valorprefix);
                    agregarclases(valorprefix);
                    
                }
            }
        }

    });
}
//funcion para cargar las property
function property()
{
    document.getElementById("Error").innerHTML="";
    $( "#Error" ).append('<label class="control-label" for="inputError">Buscando Property...</label> ');
    var querySparql = "select distinct ?y where{?x ?y ?z}";
    console.log(querySparql);
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint +"###"+identi;
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos,
        success:
        function(datos)
        {
           document.getElementById("Error").innerHTML="";
           var rtArray = datos.results.bindings;
           //console.log("Datos: "+rtArray);
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
                    PropertyArray.push(valorprefix);
                    tablaProperty.push(valorprefix);
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
        var varubicacion = $(this).attr("id")[1];
        if(xyz== varubicacion )
        {
            if(this.value.length<1)
            {
                console.log("campo vacio");
                return;
            }
            if(this.value == "variable")
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
/**
* Eliminar el panel
*/
function borrarPanel(id)
{
    var alerta = "Elimino panel "+id;
    console.log(alerta);
    //console.log(prefixArray);
        bootbox.confirm("¿Está seguro que desea eliminar el elemento ?", function(result) {
        if(result== true)
        {
            var x ="#"+id;
            var valor = id;
            $(x).load('Opciones.php',{valor:valor});            
        }
        });
}
/**
* Eliminar el panel con un id que no sea numero
*/
function borrarPanel2(id,id2)
{
    var alerta = "Elimino panel "+id;
    console.log(alerta);
    bootbox.confirm("¿Está seguro que desea eliminar el elemento ?", function(result) {
        if(result== true)
        {
            var x ="#"+id+id2;
            var valor = id;
            $(x).load('Opciones.php',{valor:valor});
        }
    });             
}
/*
*   borrar panel de filter
*/
function borrarPanelfilter(id)
{
    var alerta = "Elimino panel "+id;
    console.log(alerta);
   
        bootbox.confirm("¿Está seguro que desea eliminar el elemento ?", function(result) {
        if(result== true)
        {
            var x ="#"+id;
            var valor = id;
            $(x).load('Condition.php',{valor:valor});
            
        }
        });              
}
function borrarPanelfilter2(id,id2)
{
    var alerta = "Elimino panel "+id;
    console.log(alerta);
    bootbox.confirm("¿Está seguro que desea eliminar el elemento ?", function(result) {
        if(result== true)
        {
            var x ="#"+id+"_"+id2;
            var valor = id;
            $(x).load('Condition.php',{valor:valor});
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
                bootbox.alert("Debe completar todos los campos", function() {});
                return;
            }         
        }
    }
    
    // console.log("largo campo "+ CamposImput.length);
    // if(CamposImput.length == 0)
    // {
    //     return;
    // }
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
                bootbox.alert("Debe completar todos los campos", function() {});
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
        bootbox.alert("Debe completar todos los campos", function() {});
        return;
    }
    //confecionar la lista

    var consulta;
    var select = stringSelect();
    consulta = select +" where { "+Funcion(lista,1)+" }";
    var Consulta = select+ "<br> where { <br><p>"+Funcion2(lista,1)+"</p>}";
    //consulta solo el cuerpo
    //alert("Consulta "+consulta);
    //$("#Consulta").append('<h4 class="bg-primary"> Consulta </h4> ');
    $("#Consulta").append('<font size="3">'+Consulta +'</font>');
    //verificar que no este la palabra variable en la consulta
    //Variable
    var bbb = consulta.indexOf(" Variable ");
    console.log(bbb);
    if( bbb == -1 )
    {
        console.log("no esta Variable");
    }
    else
    {
        console.log("esta la palabra Variable en la consulta" );
        bootbox.alert("Debe seleccionar una variable en  todos los campos", function() {});
        return;
    }
    var bba = consulta.indexOf(" undefined ");
    console.log(bba);
    if( bba == -1 )
    {
        console.log("no esta  undefined");
    }
    else
    {
        console.log("esta la palabra  undefined en la consulta" );
        bootbox.alert("Debe completar todos los campos", function() {});
        return;
    }
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
    var select = stringSelect();
    consulta = select +" where { "+Funcion(lista,1)+"} ";
    var Consulta = select+ "<br> where { <br>"+Funcion2(lista,1)+"}";
    //consulta solo el cuerpo
    //alert("Consulta "+consulta);
    //$("#Consulta").append('<h4 class="bg-primary"> Consulta </h4> ');
    $("#Consulta").append('<font face=" size="3">'+Consulta +'</font>');
 }
function stringSelect()
{
    var select ="select  ";
    var valordis = document.getElementById("disti").checked;
    if(valordis==true)
    {
        select = select+"DISTINCT ";
    }
    var vartodo = document.getElementById("asterisco").checked;
    if(vartodo == true)
    {
        select = select +"* "
        return select;
    }
    var varvariable = document.getElementById("radio1").checked;
    if(varvariable== true)
    {
        var varcount=0;
        for (var i = 0; i < agregarcampox; i++) {
            var varnombre ="campo"+ i;
            var varx = document.getElementById(varnombre).value;
            select = select +varx+" ";
            if(varx=="" || varx=="undefined")
            {
                varcount=varcount+1;
            }
        }
        console.log(varcount+" "+(agregarcampox));
        if(varcount == (agregarcampox))
        {
            return "select * ";
        }
        return select;
    }
    var radio2 = document.getElementById("radio2").checked;
    if (radio2==true)
    {
        var oper = document.getElementById("sel1").value;
        var varop= document.getElementById("valueop").value;
        var varas = document.getElementById("valueas").value;
        if(oper =="Operador")
        {
            bootbox.alert("Debe selecionar un operador", function() {});
        return "select * ";
        }
        if(varop=="")
        {
            bootbox.alert("Debe agregar una variable", function() {});
            return "select * ";
        }
        select = select + oper+" ( "+varop+" ) ";
        if(varas=="" || varas=="undefined")
        {}
        else{
            select = select + "AS "+ varas+" ";
        }
        return select;
    }
    var varlibre =document.getElementById("radio3").checked; 
    if(varlibre==true)
    {
        var varas = document.getElementById("selultima").value;
        if(varas=="" || varas=="undefined")
        {
            bootbox.alert("Debe agregar una variable", function() {});
            return "select * ";
        }
        return select+" "+ varas+" ";

    }
    return "select * ";
}

/** Encargada de llamaar a peticionHTTP
 * Nesecito el String de la consulta para mostar la respuesta
 * @param {type} String
 */

function iniciarConsulta(consulta)
{
   if(booleanNext==true)
   {
        valorConsulta = consulta;
        booleanNext=false;
   }
    
    // debo limpiar el div 
    document.getElementById("principal").innerHTML="";
    document.getElementById("principal1").innerHTML="";
    console.log("consulta sin tranformar "+consulta);
    //console.log(prefixArray);
    consulta =prefixuri(consulta);    
    console.log("consulta tranformada  "+consulta);
    consulta = consulta.replace(/%/g, "#####");
    consulta = consulta.replace(/\+/g, "####");
    consulta = consulta.replace(/&/g, "*****");
    var querySparql = consulta +" LIMIT "+10+" OFFSET "+(valorNext*10);
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint+"###"+identi;
    console.log("----------------------"+datos);
    document.getElementById("Error").innerHTML="";
    $( "#Error" ).append('<label class="control-label" for="inputError">Realizando consulta...</label> ');
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos ,
        success:
        function(datos){

            var rtArray = datos.results.bindings;
            //resultados
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
                if(rtArray.length ===0)
                {
                    document.getElementById("Error").innerHTML="";
                    $( "#Error" ).append('<label class="control-label" for="inputError">Su consulta no obtuvo resultado</label> ');
                }
                else{ document.getElementById("Error").innerHTML="";}
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
                        //console.log(k+"tipo");
                        var varr = k.split(",");
                        var var2 = varr[0].split(":");//obtener el tipo
                        var pr = var2[1];
                        
                        
                        if((var2[1]).length == 5)
                        {
                            var cortadas = cortada[1].slice(1,cortada[1].length-2);
                            var cortadasz = uriPrefix2(cortadas);
                            respuesta = respuesta +  "<td>"+cortadasz+  "</td>" ;
                        }
                        else if((var2[1])== '"literal"')
                        {
                            console.log(k);
                            var var3 = k.split(",");
                            var var3largo = k.split(":")
                            console.log(" Largo "+ var3largo.length);
                            if(var3largo.length === 5)
                            {
                                var var4 = var3[1].split(":");
                                var leng = varr[1].split(":");
                                var cortadas = cortada[1].slice(0,cortada[1].length-2);
                                var remplazo = leng[2].replace('\"','');
                                remplazo = remplazo.replace('\"','');
                                respuesta = respuesta +   "<td>" +cortadas +"\"@"+remplazo+ "</td>" ;
                            }
                            else
                            {
                                var var4 = var3[1].split(":");
                                var cortadas = cortada[1].slice(0,cortada[1].length-1);
                                
                                var datapir = k.split('datatype');
                                if(datapir[1] !== undefined)
                                {
                                    var atapir = datapir[1].split('"');
                                    console.log("Es la url ...."+atapir[1]);
                                    cortadas = cortadas+"^^$#60;"+atapir[1]+"$#62;"
                                }
                                respuesta = respuesta +   "<td>" +cortadas +"</td>" ;
                            }
                            
                        }
                        else
                        {
                            var cortadas = cortada[1].slice(0,cortada[1].length-1);
                            var cortadasz = uriPrefix2(cortadas);
                            var datapir = k.split('"datatype":');
                            //console.log(datapir);
                            if(datapir[1] !== undefined)
                            {
                                var atapir = datapir[1].split('"');
                                //console.log("Es la url ...."+atapir[1]);
                                cortadasz = cortadasz+"^^&#60;"+atapir[1]+"&#62;";
                            }
                            respuesta = respuesta +  "<td>"+cortadasz+  "</td>" ;
                        }
            }
                //por el momento doy el x y z manual
                    // respuesta =respuesta+"<tr><td> "+auxCA.x.value + "</td><td> " 
                    // +auxCA.y.value+ "</td><td> " +auxCA.z.value+"</td></tr>";
                respuesta = respuesta +"</tr>";
                $( "#principal" ).append(respuesta);
                document.getElementById("next").style.display = 'block';
                //console.log(respuesta);
            }
        } ,
        error: function (obj, error, objError){
            //alert('No fue posible extraer la información.'+obj.responseText);
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
    //console.log(lista+"-"+i+" funcion2");
    if(lista[i]== "TRIPLE")
    {
        var valor = i+"x" 
        var retorno = document.getElementById(valor).value;
        var n = retorno.search("http");
        if(n == 0)
        {
            retorno = '"&#139'+retorno+'&rsaquo"';
        }
        valor = i+"y" 
        var ret = document.getElementById(valor).value;
        var n = ret.search("http");
        if(n == 0)
        {
            ret = '"&#139'+retorno+'&rsaquo"';
        }
        retorno = retorno+" "+ret;
        valor = i+"z" 
        var ret = document.getElementById(valor).value;
        var n = ret.search("http");
        if(n == 0)
        {
            ret = "<"+ret+">";
        }
        var mayorq = ret.search('<');
        var menorq = ret.search('>');
        if(mayorq>0 && menorq>0)
        {
            ret = ret.replace('<','&#60;');
            ret = ret.replace('>','&#62;');
        }
        retorno = retorno+" "+ret;
        //console.log(retorno);
        return retorno;
    }
    if (lista[i]=="NI")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " != "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="meI")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " <= "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="MI")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " >= "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="I")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " = "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="me")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " < "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="M")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " > "+document.getElementById(valor).value;
        return retorno;
    }
    if(lista[i]=="N")
    {
        var valor = i +"x";
        var retorno = " ! "+ document.getElementById(valor).value;
        return retorno;
    }
    if(lista[i]=="Y")
    {
        return  Funcion2(lista,i*2)+ " && " + Funcion2(lista,(i*2)+1)+" ";
    }
    if(lista[i]=="O")
    {
        return  Funcion2(lista,i*2)+ " || " + Funcion2(lista,(i*2)+1)+" ";
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
    //console.log(lista+"-"+i+" funcion");
    if(lista[i]== "TRIPLE")
    {
        var valor = i+"x" 
        var retorno = document.getElementById(valor).value;
        valor = i+"y" 
        retorno = retorno+" "+document.getElementById(valor).value;
        valor = i+"z" 
        retorno = retorno +" "+ document.getElementById(valor).value;
        return retorno;
    }
    if(lista[i]=="NI")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " != "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="meI")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " <= "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="MI")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " >= "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="I")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " = "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="me")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " < "+document.getElementById(valor).value;
        return retorno;
    }
    if (lista[i]=="M")
    {
        var valor = i +"x";
        var retorno = document.getElementById(valor).value;
        valor = i+"y";
        var retorno = retorno + " > "+document.getElementById(valor).value;
        return retorno;
    }
    if(lista[i]=="N")
    {
        var valor = i +"x";
        //console.log(valor);
        var retorno = " ! "+ document.getElementById(valor).value;
        return retorno;
    }
    if(lista[i]== "CONDITION")
    {
        var valor = i+" v" 
        return document.getElementById(valor).value;
    }
    if(lista[i]=="Y")
    {
        return  Funcion(lista,i*2)+ " *** " + Funcion(lista,(i*2)+1)+ " ";
    }
    if(lista[i]=="O")
    {
        return  Funcion(lista,i*2)+ " || " + Funcion(lista,(i*2)+1)+ " ";
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
function ValidarCampo(a)
{
    console.log(" valor de a: "+a.value);
    if( a.value== "Variable")
    {
        return false;
    }
    if (a.value != "" || a.value =="undefined" )
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
    //console.log(tipo);
    var ubicacion = "./triples/"+tipo+".php";
    $(oID).load(ubicacion,{valor:valor});
    //console.log(prefixArray);
    
}
/* 
*   Pasar a la siguiente tabla
*/
function next()
{
    //console.log("valor del next: "+valorConsulta);
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

            //console.log(corta2+"//////"+list1[0]+"///////"+valora);
            if (corta2==(list1[0]+":"))
            {
                //console.log("Encontr el prefijo "+ corta2);
                var res  =listac[j].replace(corta2,valora);
                listac[j] = "<"+res+">";
                //console.log(listac[j]);
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
    var cadena = '<tr id="'+name+'" draggable="true" ondragstart="drag(event)"><td>'+name+'</td><td>'+uris+'</td></tr>';
    $('#tablaprefix').append(cadena);
    andPrefix(name,uris);
}
//funcion que agrega fila a tablaproperty
function agregarProperty(uris ){
    var cadena = '<tr id="'+uris+'" draggable="true" ondragstart="drag(event)"><td>'+uris+'</td></tr>';
    $('#tablaproperty').append(cadena);
}
//funcion que agrega fila a tablaclase
function agregarclases(uris ){
    var cadena = '<tr id="'+uris+'" draggable="true" ondragstart="drag(event)"><td>'+uris+'</td></tr>';
    $('#tablaclases').append(cadena);
}
//funciones para hacer el draque lo que sea
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var idinput = document.getElementById(data).id;
    var idcosa = ev.target.id;
    var letrs = idcosa.replace(/\d/g,"");
    //console.log(letrs+ " id "+ idcosa);
    if(letrs =="x" || letrs =="y" || letrs =="z")
    {
       document.getElementById(idcosa).value = idinput; 
    }
}
//para hacer crear el prefix
function eliminarcaracteres(stringToReplace){
    var specialChars = "!@$^&%*()+=-[]{}|<>?,.";
    for (var i = 0; i < specialChars.length; i++) {
        stringToReplace = stringToReplace.replace(new RegExp("\\" + specialChars[i], 'g'), '');
    }

 stringToReplace=stringToReplace.replace(new RegExp("[0-9]", "g"), "");

    return stringToReplace;
}
function verificar(uri,caracteresIn,caraterFin,carater)
{
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
    //console.log("aaaaaaaaaaaaaaaa  "+elemento[1]+" "+nameprefix);
    //ver si esta en el arreglo
    for (var i = 0; i < prefixArray.length; i++) {


        if(prefixArray[i][1].toString() === elemento[1].toString())
        {
            var namee = elemento[0].split(':');
            var namee2 =namee[1];
            for (var iiii = 2; iiii < namee.length; iiii++) {
                namee2 = namee2 +":"+ namee[iiii];
            }
            //console.log(namee2 +"aaaaaaa");
            return prefixArray[i][0].toString()+namee2;     
        }
    };
    //verificar el nombre
    for (var i = 0; i < prefixArray.length; i++) {
        if(prefixArray[i][0]== (nameprefix+":"))
        {
            var nameprefixv = nameprefix;
            nameprefix=nameprefix+completo;
            completo =completo+1;
            elemento[0] = elemento[0].replace(nameprefixv,nameprefix);
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
// funcion para agregar otro campo en el select
function Agregarcampox()
{
    //console.log("agrego otro cuadrito"+ agregarcampox);
    var idcam = "campo"+agregarcampox;
    var capa = document.getElementById("selcampo");
    var s = document.createElement("select");
    s.setAttribute("class", "form-control");
    s.setAttribute("id",idcam);
    capa.appendChild(s);
    var array = ["?s","?p","?o","?x","?y","?z","?a","?b","?c","?d"];
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        s.appendChild(option);
    }
    agregarcampox=agregarcampox+1;
}
// funcion para eliminar un campo en el select
function Eliminarcampox()
{
    var idcampos = "#campo"+(agregarcampox-1);
    if(idcampos !="#campo0")
    {
        $(idcampos).remove();
        agregarcampox=agregarcampox-1;
    }
    
}
function valordex(idx, tipot)
{
    $("#tablabusqueda tr").remove();//tabla
    $( "#infomodal" ).html('');//mensaje informacion
    document.getElementById("busqueda1").value ="";//vaciar cuabro
    tipobusqueda = tipot+ tipot;
    idbusqueda = idx+tipot;
    document.getElementById("busqueda1").value = document.getElementById(idbusqueda).value;
    //console.log("Tipo a buscar "+ tipobusqueda+" idx "+idx);
    if(tipobusqueda =="xx")
    {
        vartipox ="?xx";
        vartipoy = document.getElementById((idx+"y")).value;
        vartipoz = document.getElementById((idx+"z")).value;
        
    }
    else if(tipobusqueda =="yy")
    {
        vartipoy ="?yy";
        vartipox = document.getElementById((idx+"x")).value;
        vartipoz = document.getElementById((idx+"z")).value;
    }
    else if(tipobusqueda =="zz")
    {
        vartipoz ="?zz";
        vartipoy = document.getElementById((idx+"y")).value;
        vartipox = document.getElementById((idx+"x")).value;
    }
    //console.log(vartipox+" "+vartipoy+" "+vartipoz);
    if( vartipox=="undefined" || vartipox === "Variable" || vartipox === "" )
    {
       vartipox="?xxx"; 
    }
    else
    {
        vartipox = prefixuri(vartipox);
    }
    if(vartipoy === "" || vartipoy === "Variable" || vartipoy=="undefined")
    {
       vartipoy="?yyy"; 
    }
    else
    {
        vartipoy = prefixuri(vartipoy);
    }
    if(vartipoz === "" || vartipoz === "Variable" || vartipoz=="undefined")
    {
       vartipoz="?zzz"; 
    }
    else
    {
        vartipoz = prefixuri(vartipoz);
    }       
    //console.log("valor de id "+idx+"-"+tipot);
    //console.log(vartipox+" "+vartipoy+" "+vartipoz);
}
function uriabuscar1()
{
    consultaModal ="";
    $("#tablabusqueda tr").remove();//tabla
    uriabuscar();
}
function uriabuscar()
{
    $( "#infomodal" ).html('');//mensaje informacion
    if(consultaModal=="")
    {
        paginaModal=0;
        consultaModal="";
        var buscaera = document.getElementById("busqueda1").value;
        buscaera = buscaera.replace(/"/g, "");
        buscaera = buscaera.replace(/'/g, "");
        if(buscaera=="")
        {
          return;  
        }
        console.log(buscaera);
        var consulltaa = "select DISTINCT ?"+tipobusqueda+" where {"+vartipox+" "+vartipoy+" "+vartipoz+"  FILTER regex(?"+tipobusqueda+" ,'"+buscaera+"')}";
        //enviar la consulta
        console.log("Consulta busqueda "+consulltaa);
        consultaModal = consulltaa +" LIMIT 10 OFFSET ";
        var querySparql = consulltaa +"  LIMIT 10";
        iji =0;
    }
    else
    {
        var querySparql = consultaModal + (10*paginaModal);        
    } 
    setInterval("reloj()",31000);
    $( "#infomodal" ).append('<div class="alert alert-success" id="reloj">Realizando consulta... </div>');
    var datos = "q=" + querySparql +"###"+ipServer+"###"+grafo+"###"+endPoint+"###"+identi;
    //console.log("Datos: "+datos);
    $.ajax({
        type: "POST",
        url:"peticionHTTP.php",
        async: true,
        data:datos ,
        success:
        function(datos){
            //console.log(datos);
            var rtArray = datos.results.bindings;
            //console.log(rtArray);
            var respuesta ="";
            $( "#infomodal" ).html("");//
            if(rtArray.length===0 )
            {
                $( "#infomodal" ).append('<div class="alert alert-danger" id="reloj">Base de datos no retorno valor. </div>');
            }
                //obtener el  cuerpo de la lista
            for(var i=0; i<rtArray.length; i++){
                var auxCA = rtArray[i];
                //Se extraen los valores
                var lista = Object.keys(auxCA);
                var k ;
                            
                for (var objetos in lista){
                    //
                    k = JSON.stringify(auxCA[lista[objetos]]);
                    var cortada = k.split('"value":');
                    //console.log(k+"tipo");
                    var varr = k.split(",");
                    var var2 = varr[0].split(":");//obtener el tipo
                    var pr = var2[1];
                    if((var2[1]).length == 5)
                    {
                        console.log("esto es 5aaa ");
                        var cortadas = cortada[1].slice(1,cortada[1].length-2);
                        //console.log(cortadas);
                        var cortadasz = uriPrefix2(cortadas);
                        //console.log(cortadasz);
                        agregarFilabusqueda(cortadasz,iji);
                        iji=iji+1;
                    }
                    else if((var2[1])== '"literal"')
                    {
                        console.log("esto es literal ");
                        console.log(k);
                        var var3 = k.split(",");
                        var var3largo = k.split(":")
                        console.log(" Largo "+ var3largo.length);
                        if(var3largo.length === 5)
                        {
                            console.log("literal con @");
                            var var4 = var3[1].split(":");
                            var leng = varr[1].split(":");
                            console.log(leng);
                            var cortadas = cortada[1].slice(0,cortada[1].length-2);
                            var remplazo = leng[2].replace('\"','');
                            remplazo = remplazo.replace('\"','');
                            cortadasz = cortadas +"\"@"+remplazo ;
                            agregarFilabusqueda(cortadasz,iji);
                            iji=iji+1;
                        }
                        else
                        {
                            console.log("literal sin @");
                            var var4 = var3[1].split(":");
                            var cortadas = cortada[1].slice(0,cortada[1].length-1);
                            var datapir = k.split('datatype');
                            if(datapir[1] !== undefined)
                            {
                                var atapir = datapir[1].split('"');
                                console.log("Es la url ...."+atapir[1]);
                                cortadas = cortadas+"^^$#60;"+atapir[1]+"$#62;";
                            }
                            agregarFilabusqueda(cortadas,iji);
                            iji=iji+1;
                        }
                        
                    }
                    else
                    {
                        console.log("No se que es esto");
                        var cortadas = cortada[1].slice(0,cortada[1].length-1);
                        var cortadasz = uriPrefix2(cortadas);
                        var datapir = k.split('"datatype":');
                        console.log(datapir);
                            if(datapir[1] !== undefined)
                            {
                                var atapir = datapir[1].split('"');
                                console.log("Es la url ...."+atapir[1]);
                                cortadasz = cortadasz+"^^&#60;"+atapir[1]+"&#62;";
                            }
                        agregarFilabusqueda(cortadasz,iji);
                        iji=iji+1;
                    }
                }
                document.getElementById("idsiguiente").style.display="block";
            }
             
        }
        ,error: function (obj, error, objError){         
        }

    });

}
//funcion para ver que paso el tiempo que corresponde
function reloj()
{
    if(document.getElementById('reloj'))
    {
        $( "#infomodal" ).html('');
        $( "#infomodal" ).append('<div class="alert alert-danger" id="reloj">Base de datos no respondio ... </div>');

    }

}
//funcion para agregar una fila a la tabla de busqueda
function agregarFilabusqueda(name,iji){
    var aaa = '<div class="radio"><label><input type="radio" id="'+iji+'" name="deacuerdo">'+name+'</label></div>'
    var cadena = '<tr><td>'+aaa+'</td></tr>';
    $('#tablabusqueda').append(cadena);
}
//borrar contenido de modal
function borarModal()
{
    $("#tablabusqueda tr").remove();//tabla
    document.getElementById("busqueda1").value ="";//imput
    document.getElementById("idsiguiente").style.display="none";//boton
}
//cuando se tiene selecionado una dusqueda en el modal
function aceptarModal()
{
    var resultadom=""; 
    var porNombre=document.getElementsByName("deacuerdo");
    // Recorremos todos los valores del radio button para encontrar el
    // seleccionado
    var selwect = true;
    for(var i=0;i<porNombre.length;i++)
    {
        if(porNombre[i].checked)
        {
            resultadom=porNombre[i].id;
            selwect = false;
        }
    }
    if (selwect == false)
    {
        console.log("resultado: "+ resultadom );
        var t=document.getElementById('tablabusqueda'); 
        var f=t.getElementsByTagName('td');
        var lotengo = f[resultadom].childNodes[0].innerText;
        document.getElementById(idbusqueda).value = lotengo;
    }
    borarModal();
}
function paginasmodal()
{
    if(paginaModal >= 0)
    {
        paginaModal = paginaModal + 1;
        uriabuscar();
    }
    console.log(paginaModal);
}