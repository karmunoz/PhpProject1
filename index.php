<?php ?>
<!DOCTYPE html>
<html>
    <head>
        <title>IGC</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--  Para el menu -->
        <!-- Latest compiled and minified CSS -->
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous"> -->
        <link rel="stylesheet" href="css/3.3.5booststrap.min.css">
        <link rel="stylesheet" href="css/3.1.1bootstrap.min.css">
        <link rel="stylesheet" href="css/4.1.0font-awesome.min.css">
        <link rel="icon" type="image/png" href="img/icono.png" />
        <!-- Para las tablas -->
    </head>
    <body>
        
        <div class="container">
            <div class="row">
                <div class="panel">
                    <div class="panel-heading" id="0" >
                             <h1 class="text-primary"> <img alt="center" src="img/logoflor.jpg" />Interfaz gráfica para consultas SPARQL </h1>     
                    </div>
                </div>
                <!-- Para hacer los prefijos -->
                <div class="col-md-12"> <!-- para colocar el boton al lado -->
                    <div class="col-md-8">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <i class="fa fa-paperclip"></i>
                                Prefijos
                            </div>
                            <div class="panel-body">
                               <div class="table-responsive">
                                    <div class="form-inline">
                                        <div class="form-group has-feedback">
                                            <label class="control-label" for="search"></label>
                                            <input type="text" class="form-control" id="searchselectPrefijos" value="" onkeyup="busquedaSPrefijos2()" placeholder="buscar..." data-toggle="tooltip" data-placement="right" title="Filtra el contenido de la lista de los prefijos."/>
                                            <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                        </div>
                                    </div>
                                    <br>
                                    <div>
                                        <select class="form-control" type="text" onchange="busquedaSPrefijos()" id="selectPrefijos" data-toggle="tooltip" data-placement="top" title="Filtra el contenido de Class y Property.">
                                            <option value="Todo">Todo &#60; &#62;</option>
                                        </select>
                                    </div>
                                </div>                                     
                            </div><!---->
                        </div> <!-- fin´prefijos -->
                    </div>
                    <div class="col-md-4">
                        <div class="col-md-12">
                            <div class="panel panel-primary">
                                <div class="panel-heading">
                                    <i class="fa fa-gear"></i>
                                        Endpoint
                                </div>
                                <div class="panel-body">
                                    <div class="alert alert-warning" style="overflow-x: scroll;">
                                        <div id="idenpoint" value=""  data-toggle="tooltip" data-placement="bottom" title="Endpoint conectado."></div>
                                        <div id="idgrafo" value=""  data-toggle="tooltip" data-placement="bottom" title="Grafo conectado."></div>
                                    </div>
                                    <button type="button" class="btn btn-primary" onclick="abrirmodal()" data-toggle="modal" data-target="#Modal1"><b data-toggle="tooltip" data-placement="bottom" title="Información de conexión a la base de datos, esta información puede cambiar.">Conexión</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                

                    <div  class="col-lg-4 pull-left">
                        
                        <div class="container-fluid" >
                        <!-- Panel para la configuracio -->
                            <!-- Panel para el diseño -->
                        <div class="panel panel-primary">
                            <div class="panel-heading"  data-toggle="tooltip" data-placement="bottom" title="Información de la base de datos.">
                                <i class="fa fa-paperclip"></i>
                                Esquema 
                            </div>

                            <div class="panel-body" >
                                <div class="col-lg-12"><!---->
                                    <div class="panel-heading">
                                            
                                            <ul class="nav nav-tabs">
                                                <li class="active"><a href="#tab1primary" data-toggle="tab"><p data-toggle="tooltip" data-placement="bottom" title="Lista de Class">Class</p></a></li>
                                                <li><a href="#tab2primary" data-toggle="tab"><p data-toggle="tooltip" data-placement="bottom" title="Lista de property">Property</p></a></li>
                                                
                                            </ul>
                                    </div>
                                    <div class="panel-body">
                                        <div class="tab-content">
                                            <div class="tab-pane fade in active" id="tab1primary">
                                                <div class="table-responsive" style="height:300px; mix-height: 10 ;overflow-y: scroll;">
                                                    <div class="form-group has-feedback" >
                                                        <label class="control-label" for="search"></label>
                                                        <input type="text" class="form-control" id="searchclass" value="" onkeyup="busquedaClass()" placeholder="buscar..."/>
                                                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                    </div>
                                                    <table  id="tablaclases" class="table">
                                                      <!-- Aplicadas en las celdas (<td> o <th>) -->
                                                        <tr>
                                                        </tr>
                                                    </table>
                                                </div>  
                                            </div>
                                            <div class="tab-pane fade" id="tab2primary">
                                                <div class="table-responsive" style="height:300px; max-height: 10 ;overflow-y: scroll;">
                                                    <div class="form-group has-feedback">
                                                        <label class="control-label" for="search1"></label>
                                                        <input type="text" class="form-control" id="sproperty" value="" onkeyup="busquedaProperty()" placeholder="buscar..."/>
                                                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                                    </div>
                                                    <table class="order-table table" id="tablaproperty">
                                                      <!-- Aplicadas en las celdas (<td> o <th>) -->
                                                        <tr>
                                                        </tr>
                                                    </table>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!---->
                        </div>
                        </div>
                        <div class="container">
                            <div class="btn-group" >
                                <div class="from-group">
                                    <button type="button" class="btn btn-primary" id="boton" onclick="GetCampos()" data-toggle="tooltip" data-placement="bottom" title="Ejecuta la consulta creada."><b>Ejecutar SPARQL</b></button>
                                    <button type="button" class="btn btn-primary" id="boton" onclick="Limpiar()" data-toggle="tooltip" data-placement="bottom" title="Limpiar todo."><b>Limpiar</b></button>
                                </div>
                            </div>       
                        </div>
                    </div><!-- Panel general-->
                            <!-- Select en la superficie-->
                    <div  class="col-xs-8 ">
                        <div class="container-fluid"> 
                            <div class="panel panel-primary">
                                <div class="panel-heading" data-toggle="tooltip" data-placement="top" title="Cuerpo del select de la consulta.">
                                    <i class="glyphicon glyphicon-pushpin"></i>
                                    Select 
                                </div>
                                <div class="panel-body" >
                                    <div class="col-lg-12">
                                        <div class="from-group">
                                            <div id="selectbody" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                                    <!-- -->
        <?php 
            $algo = 1;
        ?>
                <div  class="col-xs-8 pull-left right">
                    <div class="container-fluid" style="width:750px;"> 
                        <div class="panel panel-primary" >
                            <div class="panel-heading"  data-toggle="tooltip" data-placement="bottom" title="Para confecionar la consulta.">
                                <i class="glyphicon glyphicon-pushpin"></i>
                                Where 
                            </div>
                            <div class="panel-body" style="overflow-x: scroll">
                                <div class="col-lg-12">
                                    <div class="btn-group" id="<?php echo $algo; ?>" ><!--  -->
                                        <select class="selectpicker" id="<?php echo $algo; ?>s"data-style="btn-primary"  onchange="funcionextra(<?php echo $algo; ?>)">
                                            <option hidden>OPCIONES</option>
                                            <optgroup label="GRAPH PATTERN">
                                            <option value="Optional" >OPTIONAL</option>
                                            <option value="Union" >UNION</option>
                                            <option value="And" >AND</option>
                                            <option value="Filter" >FILTER</option>
                                            </optgroup>
                                            <optgroup label="TRIPLE PATTERN">
                                            <option value="V-C-V">V-C-V</option>
                                            <option value="C-C-V">C-C-V</option>
                                            <option value="V-C-C">V-C-C</option>
                                            <option value="V-V-C">V-V-C</option>
                                            <option value="C-V-V">C-V-V</option>
                                            <option value="C-V-C">C-V-C</option>
                                            <option value="V-V-V">V-V-V</option>
                                            <option value="C-C-C">C-C-C</option>
                                             </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div>Recuerde que V representa una variable y C representa una constante o literal.</div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <!-- Boton modal por el momento -->
                <!-- Modal -->
                  <div class="modal fade" id="myModal" role="dialog" aria-hidden="true" data-keyboard="false" data-backdrop="static">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-toggle="modal" data-target="#Modal1"  data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Bienvenido</h4>
                        </div>
                        <div class="modal-body">
                          <p>Me complace darle la más cordial bienvenida a IGC. <br> Recuerde que <b>V</b> representa una variable y <b>C</b> representa una constante o literal.</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" onclick="cargarConex()"  data-toggle="modal" data-target="#Modal1" data-dismiss="modal">Cerrar</button>
                        </div>
                      </div>
                    </div>
                  </div> <!--  Fin molad de bienvenida -->
                <div class="modal fade bs-example-modal-sm" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"  aria-hidden="true" data-keyboard="false" data-backdrop="static">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <i class="fa fa-gear"></i>
                                    Configuración de conexión
                                <button type="button" class="close" onclick="cancelardatos()" data-dismiss="modal" aria-hidden="true"> &times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="panel-body">
                                    <form role="form">
                                        <!-- <div class="form-group"> 
                                            <label>Ip Server</label>
                                            <input class="form-control" id="ipServer" value="http://dbpedia.org/sparql">
                                        </div>
                                        <div class="form-group">
                                            <label>Grafo</label>
                                            <input class="form-control" id="grafo" value="http://dbpedia.org">
                                        </div> -->
                                        <div class="form-group">
                                            <label>Endpoint</label>
                                            <input class="form-control" id="endPoint" value="http://data.utpl.edu.ec/ambar/sparql">
                                        </div>
                                    </form>
                                    <!-- boton para busqueda de grafo -->
                                    <div class="modal-footer">
                                        <button data-toggle="tooltip" data-placement="top" title="Buscar grafos en la base de datos." type="button" class="btn btn-primary" onclick="buscog()">Buscar Grafo</button>
                                    </div>
                                        <div class="table-responsive" style="max-height:200px; max-height:5;overflow-y:auto;" >
                                            <table class="table table-hover"  id="cargagrafo" >
                                            </table>
                                        </div>
                                        <div id="mensajemodal"></div>
                                    </div>
                            </div> <!-- Fin cuerpo modal -->
                                <p ALIGN=center>.</p>
                            
                            <div class="modal-footer">
                                <button data-toggle="tooltip" data-placement="top" title="Al guardar los datos, se actualizara la información de las Class, Property y Prefijos." type="button" class="btn btn-primary" onclick="cargardatos()" data-dismiss="modal">Cargar</button>
                                <button type="button" class="btn btn-primary" onclick="cancelardatos()" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fin Modal -->
            </div>
        </div>
            <div  class="col-xs-12" >            
                <div class="container-fluid">
                    <div class="row">
                        <div class="panel">
                            <div class="panel-heading">
                                <!-- Mostar la consulta-->
                                <div class="panel panel-primary">
                                    <div class="panel-heading" data-toggle="tooltip" data-placement="top" title="Texto de la consulta." >
                                        <i class="glyphicon glyphicon-pencil"></i>
                                        Texto consulta
                                    </div>
                                    <div class="panel-body">
                                        <div id="Consulta" style="font-family:courier;"></div>
                                    </div>
                                </div>
                                <!-- Mostrar el error-->
                                <div class="panel panel-primary">
                                    <div class="panel-heading" data-toggle="tooltip" data-placement="top" title="Mensajes producidos." >
                                        <i class="glyphicon glyphicon-alert"></i>
                                        Mensajes
                                    </div>
                                    <div class="panel-body">
                                        <div  class="form-group has-error" id="Error"></div>
                                    </div>
                                </div>                                
                                <!-- Cargar la  respuesta  glyphicon glyphicon-list -->
                                <div class="panel panel-primary">
                                    <div class="panel-heading" data-toggle="tooltip" data-placement="top" title="Respuesta de la consulta." >
                                        <i class="glyphicon glyphicon-list"></i>
                                        Respuesta
                                    </div>
                                    <div class="panel-body">
                                        <div id="principal1"></div> 
                                        <div class="container" style="overflow:auto">
                                            <div class="table-responsive ">
                                                <table class="table table-hover"  id="principal">
                                                </table>
                                            </div>
                                            <div id="next">
                                                <ul class="pager">
                                                  <li class="previous"><a href="#" id="idprevious" onclick="previous()">&larr; Anterior</a></li>
                                                  <li class="next"><a href="#" id="isnext" onclick="next()"> Siguiente &rarr;</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modal1">
            </div>
          </div>  <!-- div conteiner -->
        

        


        <!-- Archivos Js -->
        

        <script src="jquery/1.11.1jquery.min.js"></script>
        <script type='text/javascript' src='js/CargarBoton.js'></script>
        <script src="js/jquery-2.1.0.min.js"></script>
        <script src="js/jquery-ui.min.js"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <!-- <script src="js/jquery.justifiedgallery.min.js" type="text/javascript"></script> -->
        <script src="js/tinymce.min.js" type="text/javascript"></script>
        <script src="js/jquery.tinymce.min.js" type="text/javascript"></script>
        <script src="js/devoops.js" type="text/javascript"></script>        
        <script type="text/javascript" src="js/bootbox.js" ></script>
        <script type="text/javascript" src="js/bootbox.min.js" ></script>
        <script src="jquery/1.9.jquery.min.js"></script>

        <script src="jquery/1.7jquery.min.js"></script>
        <script src="jquery/1.8jquery-ui.min.js"></script>
        <link rel="stylesheet" href="css/1.8jquery-ui.css" type="text/css" /> 

        <!-- <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> -->
        <script src="js/1.12.0jquery.min.js"></script>
        <script src="js/3.3.6bootstrap.min.js"></script>
    </body>
</html>