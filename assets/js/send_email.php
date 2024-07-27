<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Include PHPMailer library
	require_once(__DIR__ . '/mail/src/PHPMailer.php');
	require_once(__DIR__ . '/mail/src/SMTP.php');

    // Create a new PHPMailer instance
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // Set SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.ionos.com';
    $mail->Port = 465;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';

    // SMTP username and password
    $mail->Username = 'info@inntechresources.org';
    $mail->Password = 'Joe+God=2much';

    // Set sender and recipient
    $mail->setFrom($email, $name);
    $mail->addAddress('mail@kkrolands.com', 'kkRolands');

    // Set email content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;

    // Send the email
    if(!$mail->send()) {
        echo 'message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Thank you for contacting KKRolands. We will get back to you soon.';
    }
}

?>
