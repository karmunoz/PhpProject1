<!-- Este es el archivo Triple aaaa -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="col-md-12" id="<?php echo $algo; ?>">
    <div class="thumbnail" id="<?php echo $algo; ?>_TRIPLE" ><strong>TRIPLE PATTERN  V-C-V</strong>
    	<button type="button" class="close" aria-hidden="true" onclick="borrarPanel(<?php echo $algo; ?>)">&times;</button>
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
	        <div class="col-md-12">
                <div class="form-inline">
                    <input class="form-control" ondrop="drop(event)" ondragover="allowDrop(event)" type="text" placeholder="Uri" id="<?php echo $algo; ?>y" value="?y" onchange="cambioTexto()">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalx" onclick="valordex(<?php echo $algo; ?>,'y')">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </div>
	    	</br>
	        <div class="col-md-12">
                <select class="form-control" type="text" id="<?php echo $algo; ?>z">
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
        </div>
    </div>
</div>