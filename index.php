<?php ?>
<!DOCTYPE html>
<html>
    <head>
        <title>Interfaz (^_^)</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--  Para el menu -->
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <link rel="icon" type="image/png" href="icono.png" />
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="panel">
                    <div class="panel-heading" id="0" >
                        <h1 class="bg-primary"> Interfaz para consultas SPARQL </h1>
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
                                                    <li class="active"><a href="#tab1primary" data-toggle="tab">Property</a></li>
                                                    <li><a href="#tab2primary" data-toggle="tab">Class</a></li>
                                                    <li><a href="#tab3primary" data-toggle="tab">tab3</a></li>
                                                    
                                                </ul>
                                        </div>
                                        <div class="panel-body">
                                            <div class="tab-content">
                                                <div class="tab-pane fade in active" id="tab1primary">
                                                    <div class="table-responsive" style="height:300px; max-height: 10 ;overflow-y: scroll;">
                                                        <table class="table" id="tablaproperty">                                                         
                                                          <!-- Aplicadas en las celdas (<td> o <th>) -->
                                                            <tr>
                                                            </tr>
                                                        </table>
                                                    </div>  
                                                </div>
                                                <div class="tab-pane fade" id="tab2primary">
                                                    <div class="table-responsive" style="height:300px; max-height: 10 ;overflow-y: scroll;">
                                                        <table class="table" id="tablaclases">                                                         
                                                          <!-- Aplicadas en las celdas (<td> o <th>) -->
                                                            <tr>
                                                            </tr>
                                                        </table>
                                                    </div> 
                                                </div>
                                                <div class="tab-pane fade" id="tab3primary">Primary 3</div>
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
                                        <table class="table" id="tablaprefix">  

                                          <!-- Aplicadas en las filas -->
                                          <tr> 
                                            <td> Prefix </td>
                                            <td> Uri </td>
                                          </tr>
                                         
                                          <!-- Aplicadas en las celdas (<td> o <th>) -->
                                            <tr>
                                                <td> rdf: </td>
                                                <td> http://www.w3.org/1999/02/22-rdf-syntax-ns#</td>
                                            </tr>
                                            <tr>
                                                <td> rdfs: </td>
                                                <td> http://www.w3.org/2000/01/rdf-schema#/</td>
                                            </tr>
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
                                <button type="button" class="btn btn-primary" onclick="window.location.reload()" >Recargar página</button> 
                                <hr>
                                <label class="col-sm-1 control-label"> SELECT</label>
                                <div class="col-sm-4 ">                                
                                    <input class="form-control" id="select" value="*">
                                </div> 
                                <br> 
                            </div>
                            <hr>
                        </div>
                    </div>
                                    <!-- boton desplegable -->
        <?php 
            set_time_limit(50);
            $algo = 1;
        ?>

                  
                                                                
            <div class="container-fluid"  >
                <div class="btn-group" id="<?php echo $algo; ?>">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        OPCIONES <?php echo $algo;?> <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
                        <li><a href="#" id="<?php echo $algo; ?>" onclick="Optional(id)">OPTIONAL</a></li>
                        <li><a href="#" id="<?php echo $algo; ?>" onclick="Union(id)">UNION</a></li>
                        <li><a href="#" id="<?php echo $algo; ?>" onclick="And(id)">AND</a></li>
                        <li><a href="#" id="<?php echo $algo; ?>" onclick="Filter(id)">FILTER</a></li>
                        <li class="divider" ></li>
                        <li role="presentation" class="dropdown-header">TRIPLE</li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'vcv')">V-C-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'V-C-C')">V-C-C</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'C-C-V')">C-C-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
                        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-x-V</a></li>
                    </ul>
                </div>
                
                <!-- Boton modal por el momento -->
                <div class="modal fade bs-example-modal-sm" id="Modal3" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"  aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> &times;</button>
                            </div>
                            <div class="modal-body">
                                <img src="img/x.png" align="left">
                                <p ALIGN=center>Debe completar todo los campos.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                            </div>
                                <p ALIGN=center>.</p>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
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
          </div>  
        
        


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
        <script type="text/javascript" src="bootbox.min.js" ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

    </body>
</html>