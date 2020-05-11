<?php

$recepient = "mr.den.saint@yandex.ru";
$sitename = "Davydov-web";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["tel"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");