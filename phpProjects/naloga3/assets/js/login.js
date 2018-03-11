$(document).ready(function() {
  console.log("start");
  $("#targetform").on("submit", function(event) {
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();

    $.ajax({
      type: "POST",
	    dataType: "json",
      url: "http://localhost/dev/phpProjects/naloga3/templates/login.php",
      data: {
        "email" : email,
        "password" : password
      },
      success : function(data){
        console.log(data);
        $("#result2").append("Hello " + data["email"] + "</br>" +
        "Your are successfuly logged in: ");
    }
    });
  });
});
