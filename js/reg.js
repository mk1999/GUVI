$(document).ready(function() {
  $("#reg").click(function(e) {
    e.preventDefault();
    var em = $("#email").val();
    var pwd = $("#pwd").val();
    var repwd = $("#repwd").val();

    if (em == null || em == "") {
      $("#alert").addClass("alert-danger");
      $("#alert").html("Please Enter Valid Email");
    } else if (pwd != repwd) {
      $("#alert").addClass("alert-danger");
      $("#alert").html("Password Doesn't Match");
    } else if (pwd.length < 8) {
      $("#alert").addClass("alert-danger");
      $("#alert").html(
        "Please Enter Valid Password <br/> It should be 8 Characters long"
      );
    } else {
      $.post(
        "doReg.php",
        {
          email: em,
          password: pwd
        },
        function(result) {
          if (result == 200 || result == "200") {
            $("#alert").removeClass("alert-danger");
            $("#alert").addClass("alert-success");
            $("#alert").html(
              'Successfully Registered <br /> you will be redirected to complete your profile shortly ...<div class="spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div>'
            );
            setTimeout(function() {
              window.location = "profile.php";
            }, 5000);
          } else if (result == 111 || result == "111") {
            $("#alert").addClass("alert-danger");
            $("#alert").html(
              "Seems like this email is already in use <br/> <a href='login.php'>Login</a> Instead."
            );
          } else{
            $("#alert").addClass("alert-danger");
            $("#alert").html(
              "Error Occured"
            );
          }
        }
      );
    }
  });
});
