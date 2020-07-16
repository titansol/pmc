<?php

if (isset($_POST['Submit'])) {
	$name = $_POST['Name'];
	$phone = $_POST['Phone'];
	$email = $_POST['Email'];
	$service = $_POST['Service'];
	$subject = $_POST['Subject'];
	$deadline = $_POST['Deadline'];
	$detail = $_POST['Detail'];

	if (empty($name) || empty($email) || empty($service) || empty($subject) || empty($detail)) {
		header('location: index.html?error');
	}
	else {	
		$to = 'umar@yescart.pk';
		$headers = $service.' Request From '.$name;
		$body = 'You have received a new '.$service.' request from '.$name. PHP_EOL;
		$body .= 'Name: '.$name. PHP_EOL;
		$body .= 'Phone: '.$phone. PHP_EOL;
		$body .= 'Email: '.$email. PHP_EOL;
		$body .= 'Service: '.$service. PHP_EOL;
		$body .= 'Subject: '.$subject. PHP_EOL;
		$body .= 'Deadline: '.$deadline. PHP_EOL;
		$body .= 'Details: '.$detail;
		$body = nl2br($body);
	
		mail($to, $headers, $body);
		header('location: index.html?sent');
	}
} else {
	header("location: index.html");
}
?>