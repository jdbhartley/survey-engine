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

// sql to delete a record
$sql = "DELETE FROM surveydata WHERE id=" . $_GET['index'];

if ($conn->query($sql) === TRUE) {
    echo "Survey deleted successfully";
} else {
    echo "Error deleting survey: " . $conn->error;
}

$conn->close();
?>