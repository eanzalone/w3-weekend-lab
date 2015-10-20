console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// $('#submitBtn').on('click', function(e){
	// 	e.preventDefault();
	// 	// is click working?
	// 	console.log('Send clicked');
	// 	// push inputText to postSection
	// 	var blogText = $('#inputText').val();
	// 	console.log(blogText);
	// 	// ignore empty posts
	// 	// if (blogText.trim().length>0){
	// 	// 	console.log('Content avail to post:', blogText.length);
	// 	// }
	// 	// ACTUAL POST ADDED
	// 	$('#postSection').prepend('<p>' + blogText + '</p><hr>');
	// });


$('#newBlogPost').on('submit', function(e){
	e.preventDefault();
	var data = $(this).serialize();
	console.log(data);
	$.post('/api/posts', data, function(newPost){
		console.log('hi '+newPost);
		var blogText = newPost.text;
		$('#postSection').prepend('<p>' + blogText + '<span class="close" data-id='+newPost._id+'>x</span></p>');
	});
	//$('#newBlogPost').children().val('');
});



});
