<!-- Este es el archivo Condition -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<!-- V 1.0--> 
<div class="btn-group">
    <div class="thumbnail" id="<?php echo $algo; ?> CONDITION"> <strong>Condition <?php echo $algo;?></strong>
        <input class="form-control" type="text" placeholder="?x = 'A'" id="<?php echo $algo; ?> v" value="?z = 'A'">
    </div>
</div>
<!-- V 2.0 --> 
<!--<div class="btn-group">
    <div class="thumbnail" id="<?php echo $algo; ?>" >Condition <?php echo $algo;?>
        <input class="form-control" type="text" placeholder="?x = 'A'" id="x">
        <br>
        <div class="form-group">
            <select class="form-control"  data-style="btn-info">
                <option></option>
                <option>||</option>
                <option>!=</option>
                <option>&&</option>
            </select>
        </div>
        <input class="form-control" type="text" placeholder="?x = 'A'" id="x">
    </div>
</div>-->
<script type='text/javascript' src='CargarBoton.js'></script>