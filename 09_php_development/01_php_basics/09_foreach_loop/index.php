<?php

define("USE_FULL_NAME", TRUE);
define("MAX_BADGES", 20);

//invalid constant name
//define("2LEGIT", "to quit");

// This is my first name
$first_name = "Hampton";
$last_name = "Paulk";
$location = "Orlando, FL";
$role = "Teacher";

if( USE_FULL_NAME == TRUE) {
  $name = $first_name . ' ' . $last_name;
} else {
  $name = $first_name;
}
$full_name = "Hampton Paulk";

if( $role = 'Teacher') {
  $info = "I am a Teacher at Treehouse";
} elseif($role == 'Student') {
  $info = "I am a student at Treehouse";
} else {
  $info = "I am just visiting";
}

$social_icons = array('twitter', 'instagram', 'google');

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
        <?php>

          foreach($social_icons as $icon) {
        ?>
          <li><a href=""><span class="icon <?php echo $icon ?>"></span></a></li>
        <?php
        }

        ?>
      </ul>
    </section>
    <section class="main">
      <p>Let's Get Started!</p>
      <ul>
        <?php 
  
        for($counter = 0; $counter <= MAX_BADGES; $counter++) {
          // echo "<li>" . $counter . "</li>";
        }
        
        ?>
      </ul>
 
    </section>
  </body>
</html>