<?php
$file = 'log.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= date("D M d, Y G:i", time())."\n";
// Write the contents back to the file
file_put_contents($file, $current);
?>