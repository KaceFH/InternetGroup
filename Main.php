
<?php
$con = mysqli_connect("localhost","root","","CS3320");

$uname = $_GET["username"];
$pwd = $_GET["password"];

if ($con->connect_error) {
    die("connections failed:" . $con->connect_error);
}
//check to see if username and password are in DB
$sql = "SELECT * FROM usercredentials WHERE username = '$uname' AND pass = '$pwd' ";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    //retrieve userID number
    while ($row = $result->fetch_assoc()) {
        $user = $row['userId'];
    }
    //save userid in php session
    session_start();
    $_SESSION['login_user'] = $user;  // Initializing Session with value of user
    echo '<script>window.location.href = "Layout.html";</script>';
} else {
    echo '<script>alert("Username and/or Password incorrect. Please try again.") </script>';
    echo '<script>window.location.href = "Main.html";</script>';
}
mysqli_close($con)
