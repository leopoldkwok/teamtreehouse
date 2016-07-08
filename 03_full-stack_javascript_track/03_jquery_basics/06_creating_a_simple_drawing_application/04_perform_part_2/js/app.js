// Problem: No user interaction causes no change to application
// solution: when user interacts cause changes appropriately
var color = $(".selected").css("background-color");

// when clcking on control list items
$(".controls li").click(function() {
  // deselect sibling elements
  $(this).siblings().removeClass("selected");
  // Select clicked element
  $(this).addClass("selected");
  // cache current color
  color = $(this).css("background-color");
});


// When new color is pressed
$("#revealColorSelect").click(function() {
  // show color is select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

// update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
  // when color sliders change
  $("input[type=range]").change(changeColor);



  // when add color is pressed
    // append the color to the controls ul
    // Select the new color

  // on mouse events on the canvas
    // Draw lines
