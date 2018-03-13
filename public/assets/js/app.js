
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
	$.ajax({
        url: "api/category/HTML",
        method: 'GET',
    }).done(function(data) {
		console.log(data);
		if (data.lengt > 0) {
			for (var i = data.length - 1; i >= 0; i--) {
				var newDiv = $("<div>");
				var postTitle = data[i].title;
				var postDate = data[i].updatedAt;
				var postBody = data[i].body;
				var postCreator = data[i].username
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
		}
	})
})