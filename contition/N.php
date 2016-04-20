<!-- Este es el archivo > N ! negacion-->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>" >
    <div class="thumbnail" id="<?php echo $algo; ?>_N" ><strong> NOT </strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanelfilter(<?php echo $algo; ?>)">&times;</button>
    	<br> 
    	<div class="row">       
			<div class="col-md-12">          
                <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label class="control-label col-sm-1">!</label>
                    <div class="col-sm-10">
                        <input class="form-control" type="text"  placeholder="bound(?z)" id="<?php echo $algo; ?>x" value="" onchange="cambioTexto()">
                    </div>
                  </div>
                </form>
	        </div>
        </div>
    </div>
</div>