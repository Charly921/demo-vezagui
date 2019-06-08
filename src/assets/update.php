<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"update datos set 
	nombre='$params->nombre',
        rfc='$params->rfc',
        direccion='$params->direccion',
        tel='$params->tel',
        ciudad='$params->ciudad',
	email='$params->email',
        tarjeta='$params->tarjeta',
        manual='$params->manual',
        poliza='$params->poliza',
        marca='$params->marca',
        modelo='$params->modelo',
        color='$params->color',
        placas='$params->placas',
        km='$params->km',
        observaciones='$params->observaciones',
        falla='$params->falla',
        img1d='$params->img1d',
        img2d='$params->img2d',
        img3d='$params->img3d',
        img4d='$params->img4d'
        where orden=$params->orden");

  mysqli_query($con,"update interior set 
        sensor='$params->sensor',
        sensord='$params->sensord',
        velocimetro='$params->velocimetro',
        velocimetrod='$params->velocimetrod',
        indicadort='$params->indicadort',
        indicadortd='$params->indicadortd',
        indicadorg='$params->indicadorg',
        indicadorgd='$params->indicadorgd',
        radio='$params->radio',
        radiod='$params->radiod',
        bocinas='$params->bocinas',
        bocinasd='$params->bocinasd',
        espejoi='$params->espejoi',
        espejoid='$params->espejoid',
        aire='$params->aire',
        aired='$params->aired',
        luces='$params->luces',
        lucesd='$params->lucesd',
        extintor='$params->extintor',
        extintord='$params->extintord',
        reflejante='$params->reflejante',
        reflejanted='$params->reflejanted',
        gato='$params->gato',
        gatod='$params->gatod',
        condiciones='$params->condiciones',
        condicionesd='$params->condicionesd'
        where orden=$params->orden");
    
  mysqli_query($con,"update exterior set 
        llantas='$params->llantas',
        llantasd='$params->llantasd',
        toldo='$params->toldo',
        toldod='$params->toldod',
        antena='$params->antena',
        antenad='$params->antenad',
        faciad='$params->faciad',
        faciadd='$params->faciadd',
        faciat='$params->faciat',
        faciatd='$params->faciatd',
        cristales='$params->cristales',
        cristalesd='$params->cristalesd',
        limpiadores='$params->limpiadores',
        limpiadoresd='$params->limpiadoresd',
        espejose='$params->espejose',
        espejosed='$params->espejosed',
        taponc='$params->taponc',
        taponcd='$params->taponcd',
        taponr='$params->taponr',
        taponrd='$params->taponrd',
        llantar='$params->llantar',
        llantard='$params->llantard',
        aceite='$params->aceite',
        aceited='$params->aceited',
        anticongelante='$params->anticongelante',
        anticongelanted='$params->anticongelanted',
        liquido='$params->liquido',
        liquidod='$params->liquidod',
        aceiteh='$params->aceiteh',
        aceitehd='$params->aceitehd',
        bateria='$params->bateria',
        bateriad='$params->bateriad',
        bandas='$params->bandas',
        bandasd='$params->bandasd'
        where orden=$params->orden");  

  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Registro Modificado';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>