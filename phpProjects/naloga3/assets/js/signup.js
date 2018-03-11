$(document).ready(function() {
  class User {
    constructor(email, password, mobile) {
      this.email=email;
      this.password=password;
      this.mobile=mobile;
    }
  }

  $("#targetform").on("submit", function(event) {
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    var mobile = $("#mobile").val();

    $.ajax({
      type: "POST",
	    dataType: "json",
      url: "http://localhost/dev/phpProjects/naloga3/templates/signup.php",
      data: {
        "email" : email,
        "password" : password,
        "mobile" : mobile
      },
      success : function(data){
      var url = "../templates/login.html";
      $(location).attr('href', url);
    }
    });
  });
});
