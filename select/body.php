<?php ?>
<label class="col-sm-2 control-label">SELECT</label>
<!--  DISTINCT -->
<div class="checkbox">
  <label>
    <input type="checkbox" id="disti">
    DISTINCT
  </label>
</div>
<div>
  <label>
    <input type="radio" id="asterisco" name="optradio" checked="checked">
    *(Todo)
  </label>
</div>
<!-- Aqui debe ir las variables  class="col-md-5"-->
<div class="form-inline" >
	<div>
    <div class="form-group" id="selcampo">
      <input type="radio" id="radio1" name="optradio">
        <select class="form-control" id="campo0">
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
		 <!-- <input class="form-control" id="campo0" type="text" placeholder="variable" value="" ondrop="drop(event)" ondragover="allowDrop(event)"> -->
  	</div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" onclick="Agregarcampox()">
        <span class="glyphicon glyphicon-plus"></span> 
      </button>
      <button type="button" class="btn btn-primary" onclick="Eliminarcampox()">
        <span class="glyphicon glyphicon-minus"></span> 
      </button>
    </div>	  
  </div>
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
      <option>SUM</option>

  	</select>
	<label>(</label>
  <select class="form-control" id="valueop">
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
		<label>) AS</label> 
		<input class="form-control" id="valueas" placeholder="variable" type="text" value="" ondrop="drop(event)" ondragover="allowDrop(event)">
</div>
<div class="form-inline">
	<input type="radio" id="radio3" name="optradio">
	<input class="form-control" id="selultima" type="text" placeholder="variable" value="" ondrop="drop(event)" ondragover="allowDrop(event)">
</div>
<!-- Fin Menu opciones-->