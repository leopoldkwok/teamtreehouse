//Problem: Hints are shown when form is valid
// solution: hide and show them at appropriate times

// Hide Hints
$("form span").hide();

function passwordEvent() {
  // Find out if password is valid
  if($(this).val().length > 8) {
   // Hide hint if valid
    $(this).next().hide();
  } else {
  //else show hint
    $(this).next().show();
  }
}
  // when event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);

// When event happens on confirmation input
  // find out if password and confirmation match
    // Hide hint if match
    // else show hint