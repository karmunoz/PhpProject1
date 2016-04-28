<!-- Contenido del menu Filter -->
<?php 
    $algo =   $_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>_FILTER" style="background-color: #FFF5BA" >
    <button type="button" class="close" aria-hidden="true" onclick="borrarPanel2(<?php echo $algo; ?>,'_FILTER')">&times;</button>
    <ul>
        <li><strong> FILTER </strong>
            <ul>
                <ul>
                    <!-- Archivo HTML de boton opciones desplegables 1-->
                    <div id= <?php echo ($algo=($algo*2)); ?>> <?php echo $algo;?>
                        <script>
                            var x ="#"+<?php echo ($algo); ?>;
                            var valor = <?php echo ($algo); ?> ;
                            $(x).load('Opciones.php',{valor:valor});
                        </script>
                    </div>
                </ul>
                    <!-- Archivo HTML de boton opciones desplegables 2 -->
                <ul>
                    <div id="<?php echo ($algo=$algo+1); ?>"> <?php echo $algo;?>
                        <script>
                            var x ="#"+<?php echo ($algo); ?>;
                            var valor = <?php echo ($algo); ?>;
                            $(x).load('Condition.php',{valor:valor});
                        </script>
                    </div>
                </ul>
            </ul>
        </li>
    </ul>
</div>
