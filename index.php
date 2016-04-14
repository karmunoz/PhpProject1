<?php ?>
<!DOCTYPE html>
<html>
    <head>
        <title>IGC</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--  Para el menu -->
        <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <link rel="icon" type="image/png" href="icono.png" />
        <!-- Para las tablas -->
        


        
    </head>
    <body>
        
        <div class="container">
            <div class="row">
                <div class="panel">
                    <div class="panel-heading" id="0" >
                             <h1 class="text-primary"> <img alt="center" src="logoflor.jpg" />Interfaz gráfica para consultas SPARQL </h1>     
                    </div>
                </div>

                    <div  class="col-lg-4 pull-left">
                        
                        <div class="container-fluid" >
                        <!-- Panel para la configuracio -->
                            <!-- Panel para el diseño -->
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <i class="fa fa-paperclip"></i>
                                Esquema
                            </div>

                            <div class="panel-body" >
                                <div class="col-lg-15"><!---->
                                        <div class="panel-heading">
                                                
                                                <ul class="nav nav-tabs">
                                                    <li class="active"><a href="#tab1primary" data-toggle="tab">Class</a></li>
                                                    <li><a href="#tab2primary" data-toggle="tab">Property</a></li>
                                                    
                                                </ul>
                                        </div>
                                        <div class="panel-body">
                                            <div class="tab-content">
                                                <div class="tab-pane fade in active" id="tab1primary">
                                                    <div class="table-responsive" style="height:300px; max-height: 10 ;overflow-y: scroll;">
                                                        <div class="form-group has-feedback">
                                                            <label class="control-label" for="search"></label>
                                                            <input type="text" class="form-control" id="search" data-type="search" placeholder="buscar..."/>
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
                                                            <input type="text" class="form-control" id="search1" data-type="search" placeholder="buscar..."/>
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
                        
                        <!-- Panel para los prefijos -->
                           
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <i class="fa fa-paperclip"></i>
                                        Prefijos
                                    </div>
                                    <div class="panel-body">

                                       <div class="table-responsive" style="height:300px; max-height: 10 ;overflow-y: scroll;">
                                        <div class="form-group has-feedback">
                                            <label class="control-label" for="search2"></label>
                                            <input type="text" class="form-control" id="search2" data-type="search" placeholder="buscar..."/>
                                            <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                        </div>

                                        <table class="table" id="tablaprefix">  

                                          <!-- Aplicadas en las filas -->
                                          
                                        </table>
                                    </div>                                     
                                </div><!---->
                            </div>
                            </div>
                    </div><!-- Panel general-->
                           
                            <!-- Botones en la superficie-->
                    <div  class="col-xs-8 ">
                        <div class="container-fluid"  >
                            <div class="from-group">
                                <button type="button" class="btn btn-primary" id="boton" onclick="GetCampos()">Revisar</button>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal1">Conexión</button>
                                <!-- <button type="button" class="btn btn-primary" onclick="window.location.reload()" >Recargar página</button>  -->
                                <hr>                                
                            </div>
                            <div class="from-group">

                                <div id="selectbody"></div>
                            </div>
                            <br>
                            <hr>
                        </div>
                    </div>
                    <br>
                                    <!-- boton desplegable -->
        <?php 
            $algo = 1;
        ?>

                  
            <b> WHERE</b>
            <b>{</b>
            <div class="container-fluid"  >
                <div class="btn-group" id="<?php echo $algo; ?>">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        OPCIONES <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
                        <li><a href="#" id="<?php echo $algo; ?>" onclick="Optional(id)">OPTIONAL</a></li>
                        <li><a href="#" id="<?php echo $algo; ?>" onclick="Union(id)">UNION</a></li>
                        <li><a href="#" id="<?php echo $algo; ?>" onclick="And(id)">AND</a></li>
                        <li><a href="#" id="<?php echo $algo; ?>" onclick="Filter(id)">FILTER</a></li>
                        <li class="divider" ></li>
                        <li role="presentation" class="dropdown-header">TRIPLE</li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'V-C-V')">V-C-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'C-C-V')">C-C-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'V-C-C')">V-C-C</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'V-V-C')">V-V-C</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'C-V-V')">C-V-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'C-V-C')">C-V-C</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'V-V-V')">V-V-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'C-C-C')">C-C-C</a></li>
                    </ul>
                </div>
                <p></p>
                <b>}</b>
                
                <!-- Boton modal por el momento -->
                
                <div class="modal fade bs-example-modal-sm" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"  aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <i class="fa fa-gear"></i>
                                    Configuración de conexión
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> &times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="panel-heading ">
                                    
                                </div>
                                <div class="panel-body">
                                    <form role="form">
                                        <div class="form-group">
                                            <label>Ip Server</label>
                                            <input class="form-control" id="ipServer" value="http://dbpedia.org/sparql">
                                        </div>
                                        <div class="form-group">
                                            <label>Grafo</label>
                                            <input class="form-control" id="grafo" value="http://dbpedia.org">
                                        </div>
                                        <div class="form-group">
                                            <label>End Point</label>
                                            <input class="form-control" id="endPoint" value="http://dbpedia.org/sparql">
                                        </div>
                                    </form> 
                                </div>
                            </div> <!-- Fin cuerpo modal -->
                                <p ALIGN=center>.</p>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
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
                                <div id="Consulta" ></div>
                                <!-- Mostrar el error--> 
                                <div  class="form-group has-error" id="Error"></div>
                                <!-- Cargar la  respuesta-->
                                <div id="principal1"></div> 
                                <div class="container" style="overflow:auto">
                                    <div class="table-responsive ">
                                        <table class="table table-hover"  id="principal">
                                        </table>
                                    </div>
                                    <div id="next">
                                        <ul class="pager">
                                          <li class="previous"><a href="#" id="idprevious" onclick="previous()">&larr; Older</a></li>
                                          <li class="next"><a href="#" id="isnext" onclick="next()">Newer &rarr;</a></li>
                                        </ul>
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
        

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script type='text/javascript' src='CargarBoton.js'></script>
        <script src="plugins/jquery/jquery-2.1.0.min.js"></script>
        <script src="plugins/jquery-ui/jquery-ui.min.js"></script>
        <script src="plugins/bootstrap/bootstrap.min.js" type="text/javascript"></script>
        <script src="plugins/justified-gallery/jquery.justifiedgallery.min.js" type="text/javascript"></script>
        <script src="plugins/tinymce/tinymce.min.js" type="text/javascript"></script>
        <script src="plugins/tinymce/jquery.tinymce.min.js" type="text/javascript"></script>
        <script src="js/devoops.js" type="text/javascript"></script>        
        <script type="text/javascript" src="bootbox.js" ></script>
        <script type="text/javascript" src="bootbox.min.js" ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" type="text/css" /> 
    

    </body>
</html>