 <!-- Este es el archivo Condition -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    CONDICIÓN<span class="caret"></span>
  </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2" >
        <li role="presentation" class="dropdown-header">Logicos</li>         
        <li><a href="#" id="<?php echo $algo; ?>" onclick="YO(id,'Y')" >&#38;&#38;</a></li>               
        <li><a href="#" id="<?php echo $algo; ?>" onclick="YO(id,'O')">||</a></li>
        <li><a href="#" id="<?php echo $algo; ?>" onclick="YO(id,'N')">!</a><li>
        <li class="divider" ></li>
        <li role="presentation" class="dropdown-header">Comparativos</li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'M')">&#62;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'me')">&#60;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'I')">&#61;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'MI')">&le;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'meI')">&ge;</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Basica(id,'NI')">&#33;&#61;</a></li>
    </ul>
</div>
<script type='text/javascript' src='CargarBoton.js'></script>