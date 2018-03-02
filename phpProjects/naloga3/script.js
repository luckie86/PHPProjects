$(document).ready(function() {

  class User {
    constructor(name, email, password) {
      this.name=name
      this.email=email;
      this.password=password;
    }
  }

  $("#testform").on("submit", function(event) {
	event.preventDefault();
	var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var newUser = new User(name, email, password);
    var json = JSON.stringify(newUser);

    $.ajax({
      type: "POST",
	  dataType: "json",
      url: "http://localhost/dev/phpProjects/naloga3/test.php",
      data: {
        "username" : name,
        "useremail" : email,
        "userpassword" : password
      },
      success : function(data){
		console.log(data);
		$("#result").append("Hello " + data["username"] + "</br>" +
        "Your user account with email: " + data["useremail"] + " was successfuly created!");
    }
    });
  });
});
