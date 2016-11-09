<?php
if($_POST)
{
	$to_email   	= "your-email@example.com"; //Recipient email, Replace with own email here
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
		$output = json_encode(array( //create JSON data
			'type'=>'error', 
			'text' => 'Sorry Request must be Ajax POST'
		));
		die($output); //exit script outputting json data
    } 
	
	//Sanitize input data using PHP filter_var().
	$user_name		= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$user_email		= filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
	$user_phone		= filter_var($_POST["user_phone"], FILTER_SANITIZE_STRING);
	$user_message		= filter_var($_POST["user_message"], FILTER_SANITIZE_STRING);
	$subject		= $user_name;
	$subject_2		= "Largest";
	
	
	//additional php validation
	if(strlen($user_name)<1){ // If length is less than 4 it will output JSON error.
		$output = json_encode(array('type'=>'error', 'text' => 'name is required!'));
		die($output);
	}
	
	if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
		die($output);
	}
	if(strlen($user_phone)<1){ // If length is less than 4 it will output JSON error.
		$output = json_encode(array('type'=>'error', 'text' => 'phone number  is required!'));
		die($output);
	}
	
	//email body
$Body = "";
$Body .= "Name: ";
$Body .= $user_name;
$Body .= "\n";
$Body .= "Email ID: ";
$Body .= $user_email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $user_phone;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $user_message;
$Body .= "\n";
	//email auto responder
$Body_2 = "";
$Body_2 .= "Thank you for your email our representative will contact you soon";
$Body .= "\n";
	
	//proceed with PHP email.
	$headers = 'From: '.$user_name.'' . "\r\n" .
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
		$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_name .' Thank you for your email'));
		die($output);
	}
}
?>