//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color"); //use the color in the future

// When clicking on control list items
$(".controls li ").click(function() {
  // Deselect sibling elements
  $(this).siblings().removeClass("selected");
  // Select clicked element
  $(this).addClass("selected");
  //cached current color
  color = $(this).css("background-color");
});
  

  //when add color is pressed
    //show color Select or hide the colour select

// When colour sliders change 
  // update the new colour span

// When add colour is pressed
  //Append the colour to the controls ul
  // Select the new colour

// On mouse events on the canvas
  //Draw lines