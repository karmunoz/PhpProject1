<!-- Este es el archivo Triple C-C-C -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
    <div class="thumbnail" id="<?php echo $algo; ?>_TRIPLE" ><strong>TRIPLE C-C-C</strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanel(<?php echo $algo; ?>)">&times;</button>
    	<br> 
    	<div class="row">
            <div class="col-md-12">
                <div class="form-inline">
                    <input class="form-control" type="text" placeholder="Uri" id="<?php echo $algo; ?>x" value="?x" onchange="cambioTexto()"  ondrop="drop(event)" ondragover="allowDrop(event)" onkeyup="precionarTeclax(<?php echo $algo; ?>)"list="x<?php echo $algo; ?>">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalx" onclick="valordex(<?php echo $algo; ?>,'x')">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </div>
	        </br>
	        <div class="col-md-12">
                <div class="form-inline">
                    <input class="form-control" type="text" placeholder="Uri" id="<?php echo $algo; ?>y" value="?y" onchange="cambioTexto()" ondrop="drop(event)" ondragover="allowDrop(event)"  onkeyup="precionarTeclay(<?php echo $algo; ?>)"list="y<?php echo $algo; ?>">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalx" onclick="valordex(<?php echo $algo; ?>,'y')">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </div>
	    	</br>
	        <div class="col-md-12">
                <div class="form-inline">
                    <input class="form-control"  type="text" placeholder="Uri o literal" id="<?php echo $algo; ?>z" value="?z" onchange="cambioTexto()" ondrop="drop(event)" ondragover="allowDrop(event)" onkeyup="precionarTeclaz(<?php echo $algo; ?>)"list="z<?php echo $algo; ?>">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalx" onclick="valordex(<?php echo $algo; ?>,'z')">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<datalist id="x<?php echo $algo; ?>" >
</datalist>
<datalist id="y<?php echo $algo; ?>">
</datalist>
<datalist id="z<?php echo $algo; ?>">
</datalist>
