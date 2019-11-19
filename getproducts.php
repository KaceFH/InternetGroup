<?php


$con = mysqli_connect("localhost", "root", "", "CS3320");

if (!$con) {
    die('Could not connect: ' . mysql_error());
}

$sql = "select * from products";

$result = mysqli_query($con, $sql);
$returnProducts = "";

while ($row = mysqli_fetch_array($result)) {
    $returnProducts = $returnProducts . $row['description'] . "($" . $row['unitPrice'] . ")" . " ";

}

echo $returnProducts;

mysqli_close($con);

