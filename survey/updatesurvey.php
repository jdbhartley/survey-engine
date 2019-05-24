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

$sql = "UPDATE surveydata SET json='" . $_GET['json'] . "' WHERE id=" . $_GET['index'];

if ($conn->query($sql) === TRUE) {
    echo "Survey updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>