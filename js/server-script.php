<?php

// Get form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set recipient email address
$to = 'alexanderbaguals@gmail.com';

// Set email subject
$subject = 'New Message from ' . $firstName . ' ' . $lastName;

// Build the email message
$body = "Name: $firstName $lastName\n";
$body .= "Email: $email\n";
$body .= "Message:\n$message";

// Set additional headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
$mailSuccess = mail($to, $subject, $body, $headers);

// Check if the email was sent successfully
if ($mailSuccess) {
    // Return a success response
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully.']);
} else {
    // Return an error response
    echo json_encode(['status' => 'error', 'message' => 'Failed to send message. Please try again.']);
}

?>
