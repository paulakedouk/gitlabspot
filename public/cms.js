$("#cms").on("submit", function() {
	var title = $("#title").val().trim();
	var body = $("#body").val().trim();
	var category = $("#category").val().trim();
	var newPost = {
		title: title,
		body: body,
		category: category,
		userId: 1
	}

	$.post("/api/post", newPost, function() {
		window.location.reload();
	})
})

$("#cs").on("submit", function() {
	var body = $("#comment-body").val().trim();
	var newPost = {
		body: body,
		PostId: 1
	}

	$.post("/api/comment", newPost, function() {
		window.location.reload();
	})
})