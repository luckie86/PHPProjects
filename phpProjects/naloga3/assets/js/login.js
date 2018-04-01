$(document).ready(function() {

  $("#targetform2").on("submit", function(event) {
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    console.log("start");
    $.ajax({
      type: "POST",
	    dataType: "json",
      url: "http://localhost/dev/phpProjects/naloga3/templates/login.php",
      data: {
        "email" : email,
        "password" : password
      },
      success : function(data){
      console.log("Gre v sucess");
      var url = "../templates/user.html";
      $(location).attr('href', url);
    },
      error: function () {
        var url = "../templates/guest.html";
        $(location).attr('href', url);
      }
    });
  });
});
