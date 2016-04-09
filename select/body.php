<?php
?>
<label class="col-sm-2 control-label"> SELECT</label>
<!--  DISTINCT -->
<div class="checkbox">
  <label>
    <input type="checkbox" id="disti">
     DISTINCT
  </label>
  <label>
    <input type="radio" id="asterisco" name="optradio" checked="checked">
     *(Todo)
  </label>
</div>
<!-- Aqui debe ir las variables-->
<div class="form-inline" >
	<input type="radio" id="radio1" name="optradio">
	<div id="selcampo">
		<input class="form-control" id="campo0" type="text" placeholder="variable" value="">
	</div>
	<button type="button" class="btn btn-primary" onclick="Agregarcampox()">
    	<span class="glyphicon glyphicon-plus"></span> 
    </button>
</div>
<br>
<!-- fin variables-->
<!-- Aqui debe ir el menu opciones-->
<div class="form-inline">
	<input type="radio" id="radio2" name="optradio">
  	<select class="form-control" id="sel1">
  		<option hidden>Operador</option>
    	<option>COUNT</option>
    	<option>MAX</option>
    	<option>MIN</option>
  	</select>
	<label>(</label>
		<input class="form-control" id="valueop" placeholder="variable" type="text" value="">
		<label>) AS</label> 
		<input class="form-control" id="valueas" placeholder="variable" type="text" value="">
</div>
<div class="form-inline">
	<input type="radio" id="radio3" name="optradio">
	<input class="form-control" id="selultima" type="text" placeholder="variable" value="">
</div>
<!-- Fin Menu opciones-->