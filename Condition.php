<!-- Este es el archivo Condition -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<!-- V 1.0
<div class="btn-group">
    <div class="thumbnail" id="<?php echo $algo; ?> CONDITION"> <strong>Condition <?php echo $algo;?></strong>
        <input class="form-control" type="text" placeholder="?x = 'A'" id="<?php echo $algo; ?> v" value="?z = 'A'">
    </div>
</div> --> 
<!-- V 2.0 
<div class="btn-group">
    <div class="thumbnail" id="<?php echo $algo; ?>" >Condition <?php echo $algo;?>
        <input class="form-control" type="text" placeholder="?x = 'A'" id="x">
        <br>
        <div class="form-group">
            <select class="form-control"  data-style="btn-info">
                <option>&&</option>
                <option>!=</option>
                <option>||</option>
            </select>
        </div>
        <input class="form-control" type="text" placeholder="?x = 'A'" id="x">
    </div>
</div>
<script type='text/javascript' src='CargarBoton.js'></script>
--> 
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Condition <?php echo $algo;?> <span class="caret"></span>
  </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2" >          
        <li><a href="#" id="<?php echo $algo; ?>" onclick="YO(id,'Y')" >&#38;&#38;</a></li>               
        <li><a href="#" id="<?php echo $algo; ?>" onclick="YO(id,'O')">||</a></li>
        <li class="divider" ></li>
        <li role="presentation" class="dropdown-header">?????</li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'M')">&#62;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'me')">&#60;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'I')">&#61;&#61;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'MI')">&le;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'mI')">&ge;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'NI')">&#33;&#61;</a></li>
    </ul>
</div>
<script type='text/javascript' src='CargarBoton.js'></script>