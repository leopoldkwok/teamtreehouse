<?php

// This is my first name
$name = "Mike";

$location = "Orlando, FL";

// This is my full name of Welsh Origin
$full_name = "Hampton Paulk";

// Use full name as your name
$name = $full_name;

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <title><?php echo $name ?> | Treehouse Profile</title>
    <link href="css/style.css" rel="stylesheet" />
  </head>
  
  <body>
    <section class="sidebar text-center">
      <div class="avatar">
        <img src="img/avatar.png" alt="<?php echo $name ?> ">
      </div>
      <h1><?php echo $name ?></h1>
      <p><?php echo $location ?></p>
      <hr />
      <p>Welcome to PHP Basics!</p>
      <hr />
      <ul class="social">
        <li><a href=""><span class="icon twitter"></span></a></li>
      </ul>
    </section>
    <section class="main">
      <p>Let's Get Started!</p>
      <pre>
        <?php 
          $names = array(
                      'chris',
                      'mike',
                      'amy',
                      'jane'
                );

          print_r($names);
        ?>
      </pre>
    </section>
  </body>
</html>