<?php
$db_host = "localhost";
$db_name    = 'modsecdb';
$db_username    = 'modsecuser'; 
$db_password    = 'modsecpass';
@mysql_connect("{$db_host}", "{$db_username}", "{$db_password}") or die("Khong the ket noi database");
@mysql_select_db("{$db_name}") or die("Khong the chon database");
?>
