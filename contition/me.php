<!-- Este es el archivo > == m -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
    <div class="thumbnail" id="<?php echo $algo; ?>_me" ><strong>&#60;</strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanelfilter(<?php echo $algo; ?>)">&times;</button>
    	<br> 
    	<div class="row">       
			<div class="col-md-12"><input class="form-control" type="text"  style="background-color:#D6EEF7" placeholder="?x" id="<?php echo $algo; ?>x" value="?x" onchange="cambioTexto()"  onblur="salio(<?php echo $algo; ?>,'x')" onkeyup="precionaTeclavariable(<?php echo $algo; ?>,'x')"list="x<?php echo $algo; ?>"></div>
	        </br>
	        <div class="col-md-12"><input class="form-control"  type="text" placeholder="?y" id="<?php echo $algo; ?>y" value="?y" onchange="cambioTexto()" ></div>
        </div>
    </div>
</div>
<datalist id="x<?php echo $algo; ?>" >
</datalist>
