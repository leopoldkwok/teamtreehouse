<?php 

$name = 'Mike';

$greet = function() use($name){
  echo "Hello, $name!";
};

$greet();