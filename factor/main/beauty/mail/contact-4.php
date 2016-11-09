<?php
if($_POST)
{
	$to_email = "virtualsolutions.co@gmail.com"; //Recipient email, Replace with own email here
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
		$output = json_encode(array( //create JSON data
			'type'=>'error', 
			'text' => 'Sorry Request must be Ajax POST'
		));
		die($output); //exit script outputting json data
    } 
	
	//Sanitize input data using PHP filter_var().
	$user_fname		= filter_var($_POST["user_fname"], FILTER_SANITIZE_STRING);
	$user_lname		= filter_var($_POST["user_lname"], FILTER_SANITIZE_STRING);
	$user_phone		= filter_var($_POST["user_phone"], FILTER_SANITIZE_STRING);
	$user_email		= filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
	$user_country	= filter_var($_POST["user_country"], FILTER_SANITIZE_EMAIL);
	$user_package	= filter_var($_POST["user_package"], FILTER_SANITIZE_EMAIL);
	$user_message	= filter_var($_POST["user_message"], FILTER_SANITIZE_EMAIL);
	$subject		= $user_fname;
	$subject_2		= "Factor";
	//additional php validation
	if(strlen($user_name)<4){ // If length is less than 4 it will output JSON error.
		$output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
		die($output);
	}
	if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
		die($output);
	}
	
	
	
	
	//email body
$Body = "";
$Body .= "First Name: ";
$Body .= $user_fname;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $user_lname;
$Body .= "\n";
$Body .= "PHONE: ";
$Body .= $user_phone;
$Body .= "\n";
$Body .= "Email ID: ";
$Body .= $user_email;
$Body .= "\n";
$Body .= "Country: ";
$Body .= $user_country;
$Body .= "\n";
$Body .= "Package: ";
$Body .= $user_package;
$Body .= "\n";
$Body .= "MESSAGE: ";
$Body .= $user_message;
$Body .= "\n";
	//email auto responder
$Body_2 = "";
$Body_2 .= "Thank you for your email our representative will contact you soon";
$Body .= "\n";
	
	//proceed with PHP email.
	$headers = 'From: '.$user_fname.'' . "\r\n" .
	'Reply-To: '.$user_email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	
	$send_mail = mail($to_email, $subject, $Body, $headers);
	
	$headers_2 = 'From: '.$to_email.'' . "\r\n" .
	mail($user_email, $subject_2, $Body_2, $headers_2);
	if(!$send_mail)
	{
		//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_fname .' Thank you for your email'));
		die($output);
	}
}
?>