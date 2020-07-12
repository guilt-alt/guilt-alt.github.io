<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail->isSMTP();
$mail->Host = 'ssl://smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = '';
$mail->Password = '';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('');
$mail->addAddress('');
$mail->isHTML(true);

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body = "" .$name. " оставил заявку, его телефон " .$phone. "<br>Почта пользователя: " .$message;
$mail->AltBody = '';

if(!mail->send()) {
  echo "error";
} else {
  header("location: index.html")
}
?>