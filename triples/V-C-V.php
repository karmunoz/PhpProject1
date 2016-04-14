<!-- Este es el archivo Triple aaaa -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="col-md-12" id="<?php echo $algo; ?>">
    <div class="thumbnail" id="<?php echo $algo; ?>_TRIPLE" ><strong>TRIPLE PATTERN  V-C-V</strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanel(<?php echo $algo; ?>)">&times;</button>
    	<br> 
    	<div class="row">       
			<div class="col-md-12 "><input class="form-control" type="text"  style="background-color:#D6EEF7" placeholder="Variable" id="<?php echo $algo; ?>x" value="?x" onchange="cambioTexto()"  onblur="salio(<?php echo $algo; ?>,'x')" onkeyup="precionaTeclavariable(<?php echo $algo; ?>,'x')"list="x<?php echo $algo; ?>"></div>
	        </br>
	        <div class="col-md-12">
                <div class="form-inline">
                    <input class="form-control" ondrop="drop(event)" ondragover="allowDrop(event)" type="text" placeholder="Uri" id="<?php echo $algo; ?>y" value="?y" onchange="cambioTexto()"  onkeyup="precionarTeclay(<?php echo $algo; ?>)"list="y<?php echo $algo; ?>">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalx" onclick="valordex(<?php echo $algo; ?>,'y')">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </div>
	    	</br>
	        <div class="col-md-12"><input class="form-control"  type="text" style="background-color:#D6EEF7" placeholder="Variable" id="<?php echo $algo; ?>z" value="?z" onchange="cambioTexto()" onblur="salio(<?php echo $algo; ?>,'z')" onkeyup="precionaTeclavariable(<?php echo $algo; ?>,'z')"list="z<?php echo $algo; ?>"></div>
        </div>
    </div>
</div>
<datalist id="x<?php echo $algo; ?>" >
</datalist>
<datalist id="y<?php echo $algo; ?>">
</datalist>
<datalist id="z<?php echo $algo; ?>">
</datalist>