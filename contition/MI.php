<!-- Este es el archivo > == MI -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
    <div class="thumbnail" id="<?php echo $algo; ?>_MI" ><strong>&le;</strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanelfilter(<?php echo $algo; ?>)">&times;</button>
    	<br> 
    	<div class="row">       
			<div class="col-md-12">
                <select class="form-control" type="text" id="<?php echo $algo; ?>x">
                    <option hidden value="Variable">Variable</option>
                    <option value="?s">?s</option>
                    <option value="?p">?p</option>
                    <option value="?o">?o</option>
                    <option value="?x">?x</option>
                    <option value="?y">?y</option>
                    <option value="?z">?z</option>
                    <option value="?a">?a</option>
                    <option value="?b">?b</option>
                    <option value="?c">?c</option>
                    <option value="?d">?d</option>
                </select>
            </div>
	        </br>
	        <div class="col-md-12"><input class="form-control"  type="text" placeholder="10" id="<?php echo $algo; ?>y" value="" onchange="cambioTexto()" ></div>
        </div>
    </div>
</div>