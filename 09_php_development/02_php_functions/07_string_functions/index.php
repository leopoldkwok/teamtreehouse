<?php 

$phrase = "We only hit what we aim for";

$len = strlen($phrase);

//echo $len;

//substr



//strpos

$start = strpos($phrase, 'hit');
echo substr($phrase, $start);