<?php
$con = mysqli_connect("localhost","root","","CS3320");
if (!$con)
{

    die('Could not connect: ' . mysql_error());

}
$sql="select * from states;";
//where stateCode =
//('$_GET[stateCode]')";
//echo $sql;
//execute the INSERT
$result = mysqli_query($con,$sql);
$returnStates = "[";
while($row = mysqli_fetch_array($result)) {
    $returnStates = $returnStates . "{stateCode: \"" . $row['stateCode'] . "\"," . "stateName: \"" . $row['stateName'] . "\"},";
}
$returnStates = $returnStates ."]";
echo $returnStates;
//return $returnStates;
mysqli_close($con);
?>
