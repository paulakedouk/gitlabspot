
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

$(document).ready(function(){
	$.get("/api/category/HTML", function(data) {
		if (data) {
			var newDiv = $("<div>");
			var postTitle = data.title;
			var postDate = data.updatedAt;
			var postBody = data.body;
			var postCreator = data.username
			var titleDiv = $("<div class=post-title>");
			var dateDiv = $("<div class=post-date>");
			var bodyDiv = $("<p>");
			titleDiv.append(postTitle);
			dateDiv.append(postDate);
			bodyDiv.append(postBody);
			newDiv.append(titleDiv);
			newDiv.append(dateDiv);
			newDiv.append(bodyDiv);
			$(".col-lg-12").append(newDiv);
		}
	})
})