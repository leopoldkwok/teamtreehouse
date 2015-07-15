//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox



var $overlay = $('<div id="overlay"</div>');
// Add overlay
$("body").append($overlay);

  // An image
  // A caption

//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var href = $(this).attr("href");
  $overlay.show();
    // Show the overlay.
  // Update the overlay with the image linked in the link
  // Get child's alt attribute and set caption
});



// When overlay is clicked
  // Hide the overlay.