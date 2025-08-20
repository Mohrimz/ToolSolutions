<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = "mysql.hostinger.com";
$db   = "u137369492_Muiez";
$user = "u137369492_rimzan";
$pass = "Rimzan@077";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT id, image, description, detailed_description FROM product5";
$result = $conn->query($sql);

$products = [];
if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

$conn->close();

echo json_encode($products);
?>
