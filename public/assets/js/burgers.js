
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $.get( "/api", function( data ) {
        console.log(data)
      
    });

    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newdevoured = $(this).data("newdevoured");
  
      var newdevouredState = {
        devouredy: newdevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          console.log("changed devoured to", newdevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-Burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted Burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  