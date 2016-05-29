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
    $lista =explode("###", $query);
    //
    $largo = (strlen($lista[4])-2)*-1;
    $nameXML=substr($lista[4], $largo);
    $nameXML = "./log/". $nameXML .".xml";
    $params = $query;
    crearXML($params,$nameXML);
    //
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
    return utf8_encode($salida);
}
function crearXML($data,$nameXML){
    if(!file_exists ($nameXML)){//si no existe el archivo lo creo
        $xml = new SimpleXMLElement('<consultas/>');
        $xml->asXML($nameXML);
    }
    chmod($nameXML, 0777);
    $xml=simplexml_load_file($nameXML);
    $json = json_encode($xml);
    $array = json_decode($json,TRUE);
    $array['consulta'.count($array)]=$data;
    $xml = new SimpleXMLElement('<consultas/>');
    array_to_xml($array,$xml);
    $xml->asXML($nameXML);
}
function array_to_xml( $data, &$xml ) {
    foreach( $data as $key => $value ) {
        if( is_array($value) ) {
            if( is_numeric($key) ){
                $key = 'consulta'.$key; //dealing with <0/>..<n/> issues
            }
            $subnode = $xml->addChild($key);
            array_to_xml($value, $subnode);
        } else {
            $xml->addChild("$key",htmlspecialchars("$value"));
        }
     }
}



?>