<?php

  $say = htmlspecialchars($_GET['name']);
  $age  = htmlspecialchars($_GET['age']);
  $city  = htmlspecialchars($_GET['city']);

  //echo  $say, ' ', $to;
  echo "Хей, тебя зовут ", $say, "?  А меня hw71.php. Приятно познакомится)", '<br/>';
  
  echo "Ух ты, ", $age, " лет - ты такооой большой! А мне вот недавно 5 минут исполнилось.
   Юбилей все-таки)", '<br/>';

  echo "Где ты живешь? А точно, ", $city, " - дырявая моя программа. А я вот то там, то тут 
  запускаюсь, хех)", '<br/>';




?>