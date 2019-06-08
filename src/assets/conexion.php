<?php



function retornarConexion() {

  $con=mysqli_connect("localhost","didocu_vezagui","vezagui091","didocu_vezagui");

  return $con;

}

?>