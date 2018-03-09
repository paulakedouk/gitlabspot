$(document).ready(function() {

    var blogContainer = $(".blog-container");
    var postCategorySelect =  $("#category");

    var posts;

    var url = window.location.search;
  var authorId;
  if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
    getPosts(authorId);
  }
  // If there's no authorId we just get all posts as usual
  else {
    getPosts();
  }

  //creat
});