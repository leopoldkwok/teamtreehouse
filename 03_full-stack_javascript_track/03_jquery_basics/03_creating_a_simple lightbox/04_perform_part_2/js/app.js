// problem: user when clicking on image goes to a dead end
// solution: create an overlay with the large image - Light box

var $overlay = $('<div id="overlay"></div>');
// Add overlay
$("body").append($overlay);
  //An image
  //A caption

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var href = $(this).attr("href");
  $overlay.show();
  console.log(href);
  // Show the overlay.
  // update overlay with the image linked in the link
  // Get child's alt altribute and set caption
});

// When overlay is clicked
  // Hide the overlay