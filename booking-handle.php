<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["fullname"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $email = htmlspecialchars($_POST["email"]);
    $date = htmlspecialchars($_POST["date"]);
    $persons = htmlspecialchars($_POST["persons"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "bookings@yourdomain.com";  // Replace with your actual Hostinger email
    $subject = "New Booking Request";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html\r\n";

    $body = "
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Phone:</strong> $phone</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Booking Date:</strong> $date</p>
      <p><strong>Persons:</strong> $persons</p>
      <p><strong>Message:</strong><br>$message</p>
    ";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "invalid";
}
?>
