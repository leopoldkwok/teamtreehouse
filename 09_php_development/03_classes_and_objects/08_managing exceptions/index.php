<?php
try {
		//this is where the code we want to test goes
}	catch (Exception $e) {
	// inspect $e

	$e->getMessage();
	$e->getCode();
	$e->getFile();
	$e->getTrace();
	$e->getTraceAsString(); 
	$e->__toString();
}
?>