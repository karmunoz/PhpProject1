<!-- Contenido del menu Y -->
<?php 
    $algo =   $_REQUEST['valor'];
?>
<div class="btn-group" id="<?php echo $algo; ?>_Y" style="background-color: #7EA9FE">
    <button type="button" class="close" aria-hidden="true" onclick="borrarPanelfilter2(<?php echo $algo; ?>,'Y')">&times;</button>
    <ul>
        <li><strong> &#38;&#38; </strong>
            <ul>              
                <ul>                
                    <!-- Archivo HTML de boton condition desplegables 1-->
                    <div id= <?php echo ($algo=($algo*2)); ?>> <?php echo $algo;?> >
                        <script>
                            var x ="#"+<?php echo ($algo); ?>;
                            var valor = <?php echo ($algo); ?> ;
                            $(x).load('Condition.php',{valor:valor});
                        </script>
                    </div>
                </ul>            
                    <!-- Archivo HTML de boton condition desplegables 2 -->
                <ul>
                    <div id= <?php echo ($algo=$algo+1); ?>> <?php echo $algo;?>>
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