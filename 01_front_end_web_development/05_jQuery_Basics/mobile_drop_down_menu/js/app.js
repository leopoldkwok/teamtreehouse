//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function() {

  var $anchor = $(this);
  // Create an option
  var $option = $("<option></option>");

  //Options value is the href
  $option.val($anchor.attr("href"));

  // options text is the text of link
//   var anchorText = $anchor.text();
 $option.text(anchor.text());


  // $option.text($anchor.text());
  
  // append option to select
  $select.append($option);
});

//Create button 
var $button = $("<button>Go</button>");
$("#menu").append($button);
  //Bind click to button 
$button.click(function() {
  //go to selects location
  window.location = $select.val();

}); 

// Modify CSS to hide links on small width and show button and select 
  // Also hides select and button on larger width and shows links
  // Deal with selected options depending on current page