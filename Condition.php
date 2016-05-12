 <!-- Este es el archivo Condition -->
<?php 
    $algo =$_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>">
   <select class="selectpicker" id="<?php echo $algo; ?>s2"data-style="btn-primary"  onchange="funcionextra2(<?php echo $algo; ?>)">
        <option hidden>CONDICIÓN</option>
        <optgroup label="Logicos">
            <option value="Y" >&#38;&#38;</option>
            <option value="O" >||</option>
            <option value="N" >!</option>
        </optgroup>
         <optgroup  label ="Comparativos">
            <option value="M" >&#62;</option>
            <option value="me" >&#60;</option>
            <option value="I" >&#61;</option>
            <option value="MI" >&le;</option>
            <option value="meI" >&ge;</option>
            <option value="NI" >&#33;&#61;</option>
        </optgroup>
    </select> 
</div>