<?php
header("Content-Type: text/xml"); 
$msg = date("d-m-y");
echo "<?xml version='1.0' encoding='UTF-8'?>";
echo "<message>$msg</message>";
?>
