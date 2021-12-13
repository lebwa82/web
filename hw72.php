<?php
$json = file_get_contents('php://input');
$data = json_decode($json);
$data->news = "Carlsen won against Nepomnyashchy at the World Chess Championship";
$data = json_encode($data);
echo $data;
?>