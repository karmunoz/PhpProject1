<!-- Contenido del menu And -->
<?php 
    $algo =   $_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo ($algo); ?>_AND" style="background-color: #C5A3FF" >
    <button type="button" class="close" aria-hidden="true" onclick="borrarPanel2(<?php echo $algo; ?>,'_AND')">&times;</button>
    <ul>
        <li><strong> AND </strong>
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
                    <div id= <?php echo ($algo=$algo+1); ?>> <?php echo $algo;?>
                        <script>
                            var x ="#"+<?php echo ($algo); ?>;
                            var valor = <?php echo ($algo); ?>;
                            $(x).load('Opciones.php',{valor:valor});
                        </script>
                    </div>
                </ul>
            </ul>
        </li>
    </ul>
</div>