<div id="modalx" class="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" onclick="borarModal()">&times;</button>
        <h4 class="modal-title">Búsqueda de Recursos y Literales</h4>
      </div>
      <div class="modal-body">
         <form role="form">
            <div>
                
                <div class="form-inline">
                  <label>Ingrese valor a buscar</label>
                  <input class="form-control" id="busqueda1" value="" >
                  <button type="button" class="btn btn-primary" onclick="uriabuscar1()">Buscar</button>
                </div>
                <p>La búsqueda utiliza los valores de TRIPLE PATTERN.</p>
            </div>
            <div id="infomodal"></div>
            <div class="table-responsive ">
                <table class="table"  id="tablabusqueda">
                </table>
            </div>
            <div id="dmodal">
                <ul class="pager">
                  <li class="dmodal"><a href="#" id="idsiguiente" onclick="paginasmodal()" style='display:none;' >Mas</a></li>
                </ul>
            </div>
          
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="aceptarModal()">Aceptar</button>
        <button type="button" class="btn btn-default" data-dismiss="modal" onclick="borarModal()">Cerrar</button>

      </div>
    </div>

  </div>
</div>