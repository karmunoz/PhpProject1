<?php
    header('Content-type: application/json');
    extract($_POST);
    echo hacerPeticionHTTP($q); 
function hacerPeticionHTTP($query) {
    //para manejar los caracteres en las url
    $query = str_replace("*****", "&", $query);
    $query = str_replace('#####', '%', $query);
    $query = str_replace('####', '+', $query);
    $query = str_replace("***", " && ", $query);
    // 
    // 
    $lista =explode("###", $query); 
    $dirIpServer = $lista[1];  //"192.168.254.6";
    $grafo = $lista[2];//"http://localhost:8890/pdb";
    $format = "application/json";
    $endPoint = $lista[3];//"http://192.168.254.6:8890/sparql/";
    $params = array(
        "default-graph-uri" => $grafo,
        "query" => $lista[0],
        "debug" => "on",
        "timeout" => "",
        "format" => $format
    );
    $querypart = "?";
    foreach ($params as $name => $value) {
        $querypart .= $name . '=' . urlencode($value) . "&";
    }
    //concatena la dir endpoint 'mas' los parametros 
    $sparqlURL = $endPoint . $querypart;   
    //devuelve el contenido
    $salida = file_get_contents($sparqlURL);
    // try {
    // $myfile = fopen("texto.txt", "a") or die("Unable to open file!");
    // $txt = $query;
    // fwrite($myfile, $txt. PHP_EOL);
    // fclose($myfile);
    // }

    //catch exception
    // catch(Exception $e) {
    //   echo 'Message: ' .$e->getMessage();
    // }
    return utf8_encode($salida);
} 
?>