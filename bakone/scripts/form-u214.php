<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2014.1.375
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Отправка Форма Домашняя',
	'heading' => 'Отправка новой формы',
	'success_redirect' => '',
	'email' => array(
		'from' => 'info.otkomp@gmail.com',
		'to' => 'info.otkomp@gmail.com'
	),
	'fields' => array(
		'custom_U225' => array(
			'type' => 'string',
			'label' => 'Имя',
			'required' => true,
			'errors' => array(
				'required' => 'Поле \'Имя\' не может быть пустым.'
			)
		),
		'Email' => array(
			'type' => 'email',
			'label' => 'Электронная почта',
			'required' => true,
			'errors' => array(
				'required' => 'Поле \'Электронная почта\' не может быть пустым.',
				'format' => 'Поле \'Электронная почта\' содержит недействительное сообщение эл. почты.'
			)
		),
		'custom_U215' => array(
			'type' => 'string',
			'label' => 'Сообщение',
			'required' => false,
			'errors' => array(
			)
		)
	)
);

process_form($form);
?>
