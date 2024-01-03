<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "myamurrow@yahoo.com";

    // Set the subject of the email
    $subject = "New Contact Form Submission";

    // Build the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Use the mail() function to send the email
    mail($to, $subject, $email_message);

    // Send a response back to the client
    http_response_code(200);
    echo "Form submitted successfully!";
} else {
    // Handle non-POST requests (optional)
    http_response_code(400);
    echo "Invalid request";
}
?>
