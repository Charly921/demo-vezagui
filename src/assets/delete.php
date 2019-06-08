<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();
  
  mysqli_query($con,"delete from datos where orden=$_GET[orden]");
  mysqli_query($con,"delete from interior where orden=$_GET[orden]");
  mysqli_query($con,"delete from exterior where orden=$_GET[orden]");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Registro Borrado';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>