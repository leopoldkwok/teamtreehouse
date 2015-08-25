<?php

$names = array(
  'Mike' => 'frog',
  'Chris' => 'Teacher',
  'Hampton' => 'Teacher'
);

//foreach(array_keys($names) as $name) {
//  echo "Hello, $name</br>";
//}

function print_info($value, $key) {
  echo "$key is a $value.</br>";
}

array_walk($names, print_info);