<?php
$myEmail = "sem4ykk@gmail.com";
$siteName = "Замовлення дзвінка";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$email = trim($_POST["email"]);

$message = "Ім'я: $name \n Телефон: $tel \n Email: $email";
mail($myEmail, $siteName, $message,
    "Content-type: text/plain; charset=\"utf-8\"\n From: $myEmail");
echo "Your form sent" . " <a href='index.html'>Back</a>";

/*$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$tel= htmlspecialchars($tel);
$email = htmlspecialchars($email);

$name = urldecode($name);
$tel = urldecode($tel);
$email = urldecode($email);

$name = trim($name);
$tel = trim($tel);
$email = trim($email);

//echo $name;
//echo "<br>";
//echo $tel;
//echo "<br>";
//echo $email;

if (mail("sem4ykk@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: sem4ykk@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}*/

