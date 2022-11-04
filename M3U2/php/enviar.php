<?php
$name = $_POST['nombre'];
$email = $_POST['email'];
$phone = $_POST['telefono'];
$message = $_POST['mensaje'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $email . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'fededouglas@hotmail.com';
$asunto = 'mensajes desde magdala';

mail($para, $asunto, utf8_decode($message), $header);

header("Location: https://proyectoutnfdp.000webhostapp.com/index.html");
echo "El recurso se ha movido hacia <a href=\"$url\">aquí</a>.";
die();
?>