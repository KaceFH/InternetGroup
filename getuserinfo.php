<?php


$con = mysqli_connect("localhost", "root", "", "CS3320");

if (!$con) {
    die('Could not connect: ' . mysql_error());
}

$sql = "select * from userinformation";

$result = mysqli_query($con, $sql);

$returnfname = "";
$returnlname = "";
$returnadress1 = "";
$returnadress2 = "";
$returncity = "";
$returnstate = "";
$returnzip = "";
$returnphone = "";
$returnemail = "";


while ($row = mysqli_fetch_array($result)) {

    $returnfname = $row['fname'] ;
    $returnlname = $row['lname'] ;
    $returnadress1 = $row['address1'];
    $returnadress2 = $row['address2'] ;
    $returncity = $row['city'];
    $returnstate = $row['state'];
    $returnzip = $row['zip'];
    $returnphone = $row['phone'];
    $returnemail = $row['email'];
}


echo $returnfname;
echo $returnlname;
echo $returnadress1;
echo $returnadress2;
echo $returncity;
echo $returnstate;
echo $returnzip;
echo $returnphone;
echo $returnemail;

mysqli_close($con);


