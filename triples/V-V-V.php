<!-- Este es el archivo Triple V-V-V -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="col-md-12" id="<?php echo $algo; ?>">
    <div class="thumbnail" id="<?php echo $algo; ?>_TRIPLE" ><strong>TRIPLE PATTERN  V-V-V</strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanel(<?php echo $algo; ?>)">&times;</button>
    	<br> 
    	<div class="row">
            <div class="col-md-12"><input class="form-control" type="text"  style="background-color:#D6EEF7" placeholder="Variable" id="<?php echo $algo; ?>x" value="?x" onchange="cambioTexto()" onblur="salio(<?php echo $algo; ?>,'x')" onkeyup="precionaTeclavariable(<?php echo $algo; ?>,'x')" list="x<?php echo $algo; ?>"></div>
	        </br>
	        <div class="col-md-12"><input class="form-control"  type="text" style="background-color:#D6EEF7" placeholder="Variable" id="<?php echo $algo; ?>y" value="?y" onchange="cambioTexto()" onblur="salio(<?php echo $algo; ?>,'y')" onkeyup="precionaTeclavariable(<?php echo $algo; ?>,'y')" list="y<?php echo $algo; ?>"></div>
	    	</br>
	        <div class="col-md-12"><input class="form-control"  type="text" style="background-color:#D6EEF7" placeholder="Variable" id="<?php echo $algo; ?>z" value="?z" onchange="cambioTexto()" onblur="salio(<?php echo $algo; ?>,'z')" onkeyup="precionaTeclavariable(<?php echo $algo; ?>,'z')" list="z<?php echo $algo; ?>"></div>
        </div>
    </div>
</div>
<datalist id="x<?php echo $algo; ?>" >
</datalist>
<datalist id="y<?php echo $algo; ?>">
</datalist>
<datalist id="z<?php echo $algo; ?>">
</datalist>