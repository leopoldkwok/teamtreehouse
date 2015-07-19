//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color"); //use the color in the future

// When clicking on control list items
$(".controls").on("click", "li", function() {
  // Deselect sibling elements
  $(this).siblings().removeClass("selected");
  // Select clicked element
  $(this).addClass("selected");
  //cached current color
  color = $(this).css("background-color");
});
  

  //when "New Color" is pressed
$("#revealColorSelect").click(function() {
//show color Select or hide the colour select
  changeColor();
  $('#colorSelect').toggle();

});

  // update the new colour span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}
    
// When colour sliders change 
$("input[type=range]").change(changeColor);


// When "Add Colour" is pressed
$("#addNewColor").click(function() {
 //Append the colour to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
    // Select the new colour
    $newColor.click();
});
 

// On mouse events on the canvas
  //Draw lines