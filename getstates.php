
<?php

$con = mysqli_connect("localhost","root","","CS3320");

if (!$con)

{



    die('Could not connect: ' . mysql_error());



}

$sql="select * from states";

//where stateCode =

//('$_GET[stateCode]')";



//echo $sql;



//execute the INSERT

$result = mysqli_query($con,$sql);

$returnStates = "AL ";





while($row = mysqli_fetch_array($result)) {
    $returnStates = $returnStates . $row['stateCode'] ." ";
/*
    $returnStates = $returnStates .

        "{stateCode: \"" .

        $row['stateCode'] ."\"}";
        // \"," . "stateName:

       // \"" .

       // $row['stateName'] . "\"}

        //,";
*/

    // second attempt



    //$id = $row['stateID'];

    //$code = $row['stateCode'];

    //$name = $row['stateName'];


/*
    $return_arr[] = array("id" => $id,

        "code" => $code,

        "name" => $name);
*/


}

//str_split ( string $returnStates [, int $split_length = 2 ] ) : array;
//$stateArray = array();
//while($row = mysqli_fetch_array($result)) {

//}
//$arr2 = str_split($str, 3);
//$returnStates = $returnStates ."]";

echo $returnStates;
//$test = array();
//$test = str_split($returnStates, 2);

//echo $test;
//foreach($test as $test) {
//    echo $test, "<br>";
//}

//return $returnStates;

mysqli_close($con);

?>
