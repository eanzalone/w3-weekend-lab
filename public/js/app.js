console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$('#postSubmit').on('click', function(e){
		e.preventDefault();
		// is click working?
		console.log('Send clicked');
		// push inputText to postSection
		var blogText = $('#inputText').val();
		console.log(blogText);
		// if (blogText.trim.length>0){
		// 	console.log('Content avail to post');
		// }
		// ACTUAL POST ADDED
		$('#postSection').prepend('<p>' + blogText + '</p><hr>');
	});

});
