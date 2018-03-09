$(document).ready(function() {

// var bodyInput = ("#body");
// var titleInput = ("#title");
// var cmsForm = ("#cms");
// var userSelect = ("#user");

// $(cmsForm).on("submit", handleFormSubmit);

// var url = window.location.search;
// var postId;
// var userId

// var updating = false;

// if (url.indexOf("?post_id=") !== -1) {
// 	postId= url.split("=")[1];
// 	getPostData(postId, "post");
// }
// else if (url.indexOf("?user_id=") !== -1) {
// 	userId = url.split("=") [1];
// }

// getUsers();

// function handleFormatSubmit(event) {
// 	event.preventDefualt();

// 	if (!titleInput.val().trim() || !bodyInput.val().trim() || !userSelect.val()) {
// 		return;
// 	}
// //Constructing a newPost object to hand to the database
// 	var newPost = {
// 		title: titleInput.val().trim(),
// 		body: bodyInput.val().trim()
// 		UserId: userSelect.val()
// 	};
	
// 	// If we're updating a post run updatePost to update a post
//     // Otherwise run submitPost to create a whole new post
//     if (updating) {
// 		newPost.id = postId;
// 		updatePost(newPost);
// 	  }
// 	  else {
// 		submitPost(newPost);
// 	  }
// };
// /////////////
//   // Submits a new post and brings user to blog page upon completion
//   function submitPost(post) {
//     $.post("/api/posts", post, function() {
//       window.location.href = "/blog";
//     });
//   }

//   // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
//   function getPostData(id, type) {
//     var queryUrl;
//     switch (type) {
//     case "post":
//       queryUrl = "/api/posts/" + id;
//       break;
//     case "user":
//       queryUrl = "/api/users/" + id;
//       break;
//     default:
//       return;
//     }
//     $.get(queryUrl, function(data) {
//       if (data) {
//         console.log(data.AuthorId || data.id);
//         // If this post exists, prefill our cms forms with its data
//         titleInput.val(data.title);
//         bodyInput.val(data.body);
//         authorId = data.AuthorId || data.id;
//         // If we have a post with this id, set a flag for us to know to update the post
//         // when we hit submit
//         updating = true;
//       }
//     });
//   }

//   // A function to get Authors and then render our list of Authors
//   function getUsers() {
//     $.get("/api/users", renderUserList);
//   }
//   // Function to either render a list of authors, or if there are none, direct the user to the page
//   // to create an author first
//   function renderUserList(data) {
//     if (!data.length) {
//       window.location.href = "/users";
//     }
//     $(".hidden").removeClass("hidden");
//     var rowsToAdd = [];
//     for (var i = 0; i < data.length; i++) {
//       rowsToAdd.push(createUserRow(data[i]));
//     }
//     userSelect.empty();
//     console.log(rowsToAdd);
//     console.log(userSelect);
//     userSelect.append(rowsToAdd);
//     userSelect.val(userId);
//   }

//   // Creates the author options in the dropdown
//   function createUserRow(user) {
//     var listOption = $("<option>");
//     listOption.attr("value", user.id);
//     listOption.text(user.name);
//     return listOption;
//   }

//   // Update a given post, bring user to the blog page when done
//   function updatePost(post) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/posts",
//       data: post
//     })
//       .then(function() {
//         window.location.href = "/blog";
//       });
//   }
// });

///////////////////////////////////////////
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
});

$(".post-form").on("submit", function(){
  var title = $("#title").val().trim();
	var body = $("#body").val().trim();
  var category = $("#category").val().trim();
  
  $.post("/api/comment", newPost, function() {
		window.location.reload();
	}))
})