<?php
include("config.php");
$data = json_decode(file_get_contents('php://input'),true);
$emne1 = $data["emne1"];
$emne2 = $data["emne2"];
$fag1 = $data["fag1"];
$fag2 = $data["fag2"];
$beskrivelse = $data["beskrivelse"];
$sql = "INSERT INTO srpAi (fag1, emne1, fag2, emne2, beskrivelse) 
        VALUES ('$fag1','$emne1','$fag2', '$emne2', '$beskrivelse')";
if(!$db->query($sql)){
    echo '{"Error": "$sql"}';
}
