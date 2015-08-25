<?php 

function get_info($name, $title = null) {

	if($title) {
		echo "$name has arrived, they are with us as a $title";
	}	else {
		echo "$name has arrived, welcome!";
	}

}

get_info('Mike', 'frog');