$(document).ready(function() {
	$('button').click(function() {
		$('button').removeClass("selected");
		$(this).addClass("selected");
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $(this).text(); 
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
	});
}); // end ready