$(function () {
	$("#create-submit-btn").on("submit", function (event) {
		event.preventDefault()
		var userName = $(this).attr("data-user");

		var newPost = {
			title: $("#post-title").val().trim(),
			body: $("#post-body").val().trim(),
			category: $("#post-category").val(),
			username: userName,
		}

		$.post("/api/create/post", newPost, function (data) {
			console.log('newPost: ', newPost)
			console.log('data: ', data)
			alert("Post created!");
		})
	});

	// $(".update-form").on("submit", function (event) {
	// 	// Make sure to preventDefault on a submit event.
	// 	event.preventDefault();


	// 	var userName = $(this).attr("data-user");
	// 	var id = $(this).data("id");

	// 	var updatedForm = {
	// 		title: $("#post-title").val().trim(),
	// 		body: $("#post-body").val().trim(),
	// 		category: $("#post-category").val(),
	// 		username: userName,
	// 	};

	// 	// Send the POST request.
	// 	$.put("/api/create/post/" + id, {
	// 		type: "PUT",
	// 		data: updatedForm
	// 	}).then(
	// 		function () {
	// 			console.log("updated quote");
	// 			// Reload the page to get the updated list
	// 			location.assign("/");
	// 		}
	// 	);
	// });
});
