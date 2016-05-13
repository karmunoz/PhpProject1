<!-- Este es el archivo Triple C-C-C -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>" style="width:255px; height: 130px;" >
    <div class="thumbnail" id="<?php echo $algo; ?>_TRIPLE" ><strong>TRIPLE PATTERN  C-C-C</strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanel(<?php echo $algo; ?>)">&times;</button>
    	<br> 
    	<div class="row">
            <div class="col-md-12">
                <div class="form-inline">
                    <input class="form-control" type="text" placeholder="Uri" id="<?php echo $algo; ?>x" value="" onchange="cambioTexto()"  ondrop="drop(event)" ondragover="allowDrop(event)">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalx" onclick="valordex(<?php echo $algo; ?>,'x')">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </div>
	        </br>
	        <div class="col-md-12">
                <div class="form-inline">
                    <input class="form-control" type="text" placeholder="Uri" id="<?php echo $algo; ?>y" value="" onchange="cambioTexto()" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalx" onclick="valordex(<?php echo $algo; ?>,'y')">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </div>
	    	</br>
	        <div class="col-md-12">
                <div class="form-inline">
                    <input class="form-control"  type="text" placeholder="Uri o literal" id="<?php echo $algo; ?>z" value="" onchange="cambioTexto()" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalx" onclick="valordex(<?php echo $algo; ?>,'z')">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>