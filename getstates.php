
<?php

$con = mysqli_connect("localhost","root","","CS3320");

if (!$con)

{
    die('Could not connect: ' . mysql_error());
}

$sql="select * from states";

$result = mysqli_query($con,$sql);

$returnStates = "AL ";


while($row = mysqli_fetch_array($result)) {
    $returnStates = $returnStates . $row['stateCode'] ." ";

}

echo $returnStates;

mysqli_close($con);

?>
