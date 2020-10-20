<?php
$hostname = "localhost";
$user = "twitter";
$password = "CR5tsKTJSh3B63Pz";
$database = "twitter";
$port = 3306;

$conn = mysqli_connect($hostname, $user, $password, $database, $port);
if (mysqli_connect_errno()) {
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}

$sql = "SELECT COUNT(*) AS count FROM Tweets;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $return =  $row["count"];
        echo number_format($return);
    }
} else {
    echo "NULL";
}

$conn->close();