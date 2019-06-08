<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  $con1=retornarConexion();
  $con2=retornarConexion();
  define('UPLOAD_DIR', 'images/');

  if($params->firma){
    $image_parts = explode(";base64,", $params->firma);
    $image_type_aux = explode("image/", $image_parts[0]);
    $image_type = $image_type_aux[1];
    $image_base64 = base64_decode($image_parts[1]);
    $file = UPLOAD_DIR . uniqid() . '.png';
    file_put_contents($file, $image_base64);
  }else{
    $file = '';
  }

  if($params->img1){
    $image_parts1 = explode(";base64,", $params->img1);
    $image_type_aux1 = explode("image/", $image_parts1[0]);
    $image_type1 = $image_type_aux1[1];
    $image_base641 = base64_decode($image_parts1[1]);
    $file1 = UPLOAD_DIR . uniqid() . '.png';
    file_put_contents($file1, $image_base641);
  }else{
    $file1 = '';
  }
 
  if($params->img2){
    $image_parts2 = explode(";base64,", $params->img2);
    $image_type_aux2 = explode("image/", $image_parts2[0]);
    $image_type2 = $image_type_aux2[1];
    $image_base642 = base64_decode($image_parts2[1]);
    $file2 = UPLOAD_DIR . uniqid() . '.png';
    file_put_contents($file2, $image_base642);
  }else{
    $file2 = '';
  }

  if($params->img3){
    $image_parts3 = explode(";base64,", $params->img3);
    $image_type_aux3 = explode("image/", $image_parts3[0]);
    $image_type3 = $image_type_aux3[1];
    $image_base643 = base64_decode($image_parts3[1]);
    $file3 = UPLOAD_DIR . uniqid() . '.png';
    file_put_contents($file3, $image_base643);
  }else{
    $file3 = '';
  }

  if($params->img4){
    $image_parts4 = explode(";base64,", $params->img4);
    $image_type_aux4 = explode("image/", $image_parts4[0]);
    $image_type4 = $image_type_aux4[1];
    $image_base644 = base64_decode($image_parts4[1]);
    $file4 = UPLOAD_DIR . uniqid() . '.png';
    file_put_contents($file4, $image_base644);
  }else{
    $file4 = '';
  }
  

  mysqli_query($con,"insert into datos(orden,nombre,rfc,direccion,tel,ciudad,email,tarjeta,manual,poliza,marca,modelo,color,placas,km,observaciones,falla,fecha,combustible,firma,img1,img1d,img2,img2d,img3,img3d,img4,img4d) values
    ($params->orden,'$params->nombre','$params->rfc','$params->direccion','$params->tel','$params->ciudad','$params->email','$params->tarjeta','$params->manual','$params->poliza','$params->marca','$params->modelo','$params->color','$params->placas','$params->km','$params->observ','$params->falla','$params->fecha',$params->combust,'$file','$file1','$params->img1d','$file2','$params->img2d','$file3','$params->img3d','$file4','$params->img4d')");
    
  mysqli_query($con,"insert into interior(orden,sensor,sensord,velocimetro,velocimetrod,indicadort,indicadortd,indicadorg,indicadorgd,radio,radiod,bocinas,bocinasd,espejoi,espejoid,aire,aired,luces,lucesd,extintor,extintord,reflejante,reflejanted,gato,gatod,condiciones,condicionesd) values 
    ($params->orden,'$params->sensor','$params->sensord','$params->veloci','$params->velocid','$params->indict','$params->indictd','$params->indicg','$params->indicgd','$params->radio','$params->radiod','$params->bocinas','$params->bocinasd','$params->espejoi','$params->espejoid','$params->aire','$params->aired','$params->luces','$params->lucesd','$params->extint','$params->extintd','$params->reflej','$params->reflejd','$params->gato','$params->gatod','$params->condic','$params->condicd')");
    
  mysqli_query($con,"insert into exterior(orden,llantas,llantasd,toldo,toldod,antena,antenad,faciad,faciadd,faciat,faciatd,cristales,cristalesd,limpiadores,limpiadoresd,espejose,espejosed,taponc,taponcd,taponr,taponrd,llantar,llantard,aceite,aceited,anticongelante,anticongelanted,liquido,liquidod,aceiteh,aceitehd,bateria,bateriad,bandas,bandasd) values 
    ($params->orden,'$params->llantas','$params->llantasd','$params->toldo','$params->toldod','$params->antena','$params->antenad','$params->faciad','$params->faciadd','$params->faciat','$params->faciatd','$params->crista','$params->cristad','$params->limpia','$params->limpiad','$params->espeje','$params->espejed','$params->taponc','$params->taponcd','$params->taponr','$params->taponrd','$params->llantar','$params->llantard','$params->aceite','$params->aceited','$params->anticon','$params->anticond','$params->liquido','$params->liquidod','$params->aceiteh','$params->aceitehd','$params->bateria','$params->bateriad','$params->bandas','$params->bandasd')");
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Registro Guardado!';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>