<?php
// $data=$_GET['info'];
//print(json_decode($data));

$data=array( 'Name'=>$_POST['name'], 'age'=>$_POST['age']);
print(json_encode($data));