<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select * from datos,interior,exterior where datos.orden=$_GET[orden] AND interior.orden=$_GET[orden] AND exterior.orden=$_GET[orden]");

    
  if ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>