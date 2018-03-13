// $(document).ready(function(){
$(".create-submit").click(function(){
	var newPost = {
		title: $("#post-title").val().trim(),
		body: $("#post-body").val().trim(),
		category: $("#post-category").val()
	}
	$.post("/api/create/post", newPost, function () {
                console.log('newPost: ', newPost)
            })
})



// })