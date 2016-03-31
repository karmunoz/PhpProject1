<!-- Este es el archivo Triple V 1.0 -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
    <div class="thumbnail" id="<?php echo $algo; ?>_TRIPLE" ><strong>TRIPLE </strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanel(<?php echo $algo; ?>)">&times;</button>
    	<br> 
    	<div class="row">       
			<div class="col-md-10"><input class="form-control" class="glyphicon glyphicon-search" type="text" placeholder="?x" id="<?php echo $algo; ?>x" value="?x" onchange="cambioTexto()"  onkeyup="precionarTeclax(<?php echo $algo; ?>)"list="x<?php echo $algo; ?>"></div>
	        </br>
	        <div class="col-md-10"><input class="form-control"  type="text" placeholder="?y" id="<?php echo $algo; ?>y" value="?y" onchange="cambioTexto()" onkeyup="precionarTeclay(<?php echo $algo; ?>)"list="y<?php echo $algo; ?>"></div>
	    	</br>
	        <div class="col-md-10"><input class="form-control"  type="text" placeholder="?z" id="<?php echo $algo; ?>z" value="?z" onchange="cambioTexto()"  onkeyup="precionarTeclaz(<?php echo $algo; ?>)"list="z<?php echo $algo; ?>"></div>
        </div>
    </div>
</div>
<datalist id="x<?php echo $algo; ?>" >
</datalist>
<datalist id="y<?php echo $algo; ?>">
</datalist>
<datalist id="z<?php echo $algo; ?>">
</datalist>
