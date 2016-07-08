// Problem: Hints are shown when form is valid
// Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
// Hide hints
$("form span").hide();

function passwordEvent() {
// Find out if password is valid
  if($password.val().length > 8) {
    // Hide hint if valid
    $password.next().hide();
  } else {
    // else show hint
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  // Fnd out if password and confirmation match
  if($password.val() === $confirmPassword.val()) {
    // Hide hint if matched
    $confirmPassword.next().hide();
  } else {
  // Hide hint if matched
  $confirmPassword.next().show();
  }
}

// When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

// When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);



