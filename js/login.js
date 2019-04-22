$(document).ready(function() {
    $("#login").click(function(e) {
      e.preventDefault();
      var em = $("#email").val();
      var pwd = $("#pwd").val();

  
      if (em == null || em == "") {
        $("#alert").addClass("alert-danger");
        $("#alert").html("Please Enter Valid Email");
      } else if (pwd.length < 8) {
        $("#alert").addClass("alert-danger");
        $("#alert").html(
          "Please Enter Valid Password <br/> It should be 8 Characters long"
        );
      } else {
        $.post(
          "doLog.php",
          {
            email: em,
            password: pwd
          },
          function(result) {
            if (result == 200 || result == "200") {
              $("#alert").removeClass("alert-danger");
              $("#alert").addClass("alert-success");
              $("#alert").html(
                'Login Successful <br /> you will be redirected to home page shortly ....<div class="spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div>'
              );
              setTimeout(function() {
                window.location = "index.php";
              }, 5000);
            } else if (result == 400 || result == "400") {
              $("#alert").addClass("alert-danger");
              $("#alert").html(
                "Invalid Email or Password"
              );
            }
            else {
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
  