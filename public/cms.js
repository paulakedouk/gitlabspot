$("#cms").on("submit", function() {
	var title = $("#title").val().trim();
	var body = $("#body").val().trim();
	var category = $("#category").val().trim();
	var userId = $("#user-id").val().trim();
	var newPost = {
		title: title,
		body: body,
		category: category,
		username: "Anonymous",
		userId: userId
	}

	$.post("/api/post", newPost, function() {
		console.log("tried to post.")
		// window.location.reload();
	})
})

$("#cs").on("submit", function() {
	var body = $("#comment-body").val().trim();
	var newPost = {
		body: body,
		PostId: PostId
	}

	$.post("/api/comment", newPost, function() {
		window.location.reload();
	})
})