$(document).ready(function() {
	$(":button").on("background-color", "red");
    $.ajax({
        url: "https://api.github.com/users/darotudeen"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-created_at').append(data.created_at);
       $('.greeting-updated_at').append(data.updated_at);
       $('.greeting-Login').append(data.Login);
    });
});