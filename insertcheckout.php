<?php

$con = mysqli_connect("localhost","root","","CS3320");

if (!$con)

{

    die('Could not connect: ' . mysql_error());

}

else echo "connected!!!<br>";



$sql="INSERT INTO paymentinformation (cardType, cardNumber, expDate)

VALUES

('$_POST[cardType]','$_POST[cardNumber]','$_POST[expDate]')";



echo $sql;



if (!mysqli_query($con,$sql))

{

    die('Error: ' . mysqli_error($con));

}

else {

    echo "<br>1 record added";

}



mysqli_close($con)

?>
