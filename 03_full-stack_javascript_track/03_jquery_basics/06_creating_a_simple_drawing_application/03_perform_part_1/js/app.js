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
  // show color is select or hide the color select

  // when color sliders change
    // update the new color span

  // when add color is pressed
    // append the color to the controls ul
    // Select the new color

  // on mouse events on the canvas
    // Draw lines


