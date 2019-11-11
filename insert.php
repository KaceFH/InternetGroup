<html>

<body>

<?php
$con = mysqli_connect("localhost","root","","CS3320");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}
else echo "connected!!!<br>";

//mysqli_select_db($con);
//  var_dump( $_POST );
//  echo $_POST['fName'];
$sql="INSERT INTO cs3320.userinformation (firstName, lastName, address1, address2, city, state, zip, email, notes)
VALUES
('$_POST[fName]','$_POST[lName]','$_POST[address1]','$_POST[address2]','$_POST[city]','$_POST[state]','$_POST[zip]','$_POST[email]','$_POST[notes]')";
//('Test','Tester')";
echo $sql;
//execute the INSERT
if (!mysqli_query($con,$sql))
{
    die('Error: ' . mysqli_error($con));
}
else {
    echo "<br>1 record added";
}

mysqli_close($con)
?>

</body>

</html>
