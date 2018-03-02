$(document).ready(function() {
  $("#btnSubmit").on("click", function() {
    // alert("Hello");
    $.ajax({
      type: "POST",
      url: "http://localhost/dev/test/index.php",
      data: {
        myName : "Luka Brinar"
      },
      success : function(output){
        alert(output);
      }
    });
  });
});
