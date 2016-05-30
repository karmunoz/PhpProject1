<!-- Este es el archivo Opciones 1 -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
    <select class="selectpicker" id="<?php echo $algo; ?>s"data-style="btn-primary"  onchange="funcionextra(<?php echo $algo; ?>)">
        <option hidden>OPCIONES</option>
        <optgroup label="GRAPH PATTERN">
        <option value="Optional" >OPTIONAL</option>
        <option value="Union" >UNION</option>
        <option value="And" >AND</option>
        <option value="Filter" >FILTER</option>
        </optgroup>
        <optgroup label="TRIPLE PATTERN">
        <option value="V-C-V">V-C-V</option>
        <option value="C-C-V">C-C-V</option>
        <option value="V-C-C">V-C-C</option>
        <option value="V-V-C">V-V-C</option>
        <option value="C-V-V">C-V-V</option>
        <option value="C-V-C">C-V-C</option>
        <option value="V-V-V">V-V-V</option>
        <option value="C-C-C">C-C-C</option>
         </optgroup>
    </select> 
</div>