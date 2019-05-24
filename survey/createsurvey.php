<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "surveys";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO surveydata (id, name, json)
VALUES ('', '" . $_GET['name'] . "', '" . $_GET['json'] . "')";

if ($conn->query($sql) === TRUE) {
    echo "New survey " . $_GET['name'] . " created. SQL=" . $sql;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>