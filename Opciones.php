<!-- Este es el archivo Opciones 1 -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    OPCIONES <?php echo $algo;?> <span class="caret"></span>
  </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2" >          
        <li><a href="#" id="<?php echo $algo; ?>" onclick="Optional(id)" >OPTIONAL</a></li>               
        <li><a href="#" id="<?php echo $algo; ?>" onclick="Union(id)">UNION</a></li>
        <li><a href="#" id="<?php echo $algo; ?>" onclick="And(id)">AND</a></li>
        <li><a href="#" id="<?php echo $algo; ?>" onclick="Filter(id)">FILTER</a></li>
        <li class="divider" ></li>
        <li role="presentation" class="dropdown-header">TRIPLE</li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'vcv')">V-C-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'V-C-C')">V-C-C</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id,'C-C-V')">C-C-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-U-V</a></li>
        <li><a href="#" id="<?php echo $algo;?>" onclick="Triple(id)">V-x-V</a></li>

    </ul>
</div>
<script type='text/javascript' src='CargarBoton.js'></script>