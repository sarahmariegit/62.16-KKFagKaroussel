<!-- Dette er en kopi af koden, der vil blive kørt på severen når der trykkes upload.-->
<?php
include("config.php");
$emne1 = $_GET["emne1"];
$emne2 = $_GET["emne2"];
$fag1 = $_GET["fag1"];  
$fag2 = $_GET["fag2"];
$beskrivelse = $_GET["beskrivelse"];
$sql = "INSERT INTO srpAi (fag1, emne1, fag2, emne2, beskrivelse) 
        VALUES ('$fag1','$emne1','$fag2', '$emne2', '$beskrivelse')";
 
$dbMadeError = !$db->query($sql);
if($dbMadeError)
    echo "{\"Error\": \"$sql\"}";
?>
<script> window.location = "/index.html";</script>
