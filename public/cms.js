$("#cms").on("submit", function() {
	var title = $("#title").val().trim();
	var body = $("#body").val().trim();
	var category = $("#category").val().trim();
	var newPost = {
		title: title,
		body: body,
		category: category,
		UserId: 1
	}

	$.post("/api/post", newPost, function() {
		window.location.reload();
	})
})