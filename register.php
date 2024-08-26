<?php

// 1. Connect to the database (replace with your credentials)
$servername = "Mysql";
$username = "Anyona";
$password = "37083698";
$dbname = "Create Account";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// 2. Capture form data (assuming the form uses POST method)
$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];

// 3. Validate user input (not shown in this example for brevity)
// You should validate username, password length and complexity, and email format.

// 4. Hash the password before storing it (for security reasons)
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// 5. Prepare and execute SQL statement to insert user data
$sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$hashed_password', '$email')";

if (mysqli_query($conn, $sql)) {
  echo "New user created successfully!";
  // Optionally, redirect to a success page or login page
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>
