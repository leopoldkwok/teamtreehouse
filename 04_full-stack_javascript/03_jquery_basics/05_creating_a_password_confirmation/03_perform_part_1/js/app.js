// Problem: Hints are shown when form is valid
// Solution: Hide and show them at appropriate times

// Hide hints
$("form span").hide();

function passwordEvent() {
// Find out if password is valid
  if($(this).val().length > 8) {
    // Hide hint if valid
    $(this).next().hide();
  } else {
    // else show hint
    $(this).next().show();
  }

}

// When event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);


// When event happens on confirmation input
  // Fnd out if password and confirmation match
  // Hide hint if matched
  // else show hint


