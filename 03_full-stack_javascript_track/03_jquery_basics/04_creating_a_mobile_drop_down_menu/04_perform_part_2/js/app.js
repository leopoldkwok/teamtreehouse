// Problem: It looks gross in smaller browser widths and small devices
// Solution: to hide the text links and swap them out with a more appropriate navigation

// Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
// Cycle over menu links
$("#menu a").each(function() {
  var $anchor = $(this);
  // Create an option
  var option = $("<option></option");

  // option's value is the href
  $option.val($anchor.attr("href"));
  // option's text is the text of link
  $option.text($anchor.text());
  // append option to select
  $select.append($option);
});

// Create button
var $button = $("<button>Go</button>");
$("#menu").append($button);
// Bind click to button
$button.click(function() {
  // Go to select's location
  window.location = $select.val(); // getting the selected value
});

// Modify CSS to hide links on small width and show button and select
  // Also hides select and button on larger width and show's link
// Deal with selected options depending on current page