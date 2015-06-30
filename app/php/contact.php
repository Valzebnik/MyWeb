<?php

$request_method = strtolower($_SERVER['REQUEST_METHOD']);
$data = null;

// Read about REST queryes!
switch ($request_method) {
    case 'post':
    case 'put':
        $data = json_decode(file_get_contents('php://input'));
    break;
}

$servername = "localhost";
$username = "Valzebnik";
$password = "123456";
$dbname = "valzebnik";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if ($stmt = $conn->prepare("INSERT INTO contact (name, email, website, message) VALUES(?, ?, ?, ?)")) {

    // bind parameters for markers
      $stmt->bind_param("ssss", $data->name, $data->email, $data->website, $data->message);

    // execute query
    $stmt->execute();

    // close statement
    $stmt->close();
}

$conn->close();

?>