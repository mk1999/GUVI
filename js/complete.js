$(document).ready(function() {
    $("#complete").click(function(e) {
      e.preventDefault();
      var name = $("#name").val();
      var dob = $("#dob").val();
      var sex = $("#sex").val();
      var mob = $("#mobile").val();

  
      if (name == null || name == "") {
        $("#alert").addClass("alert-danger");
        $("#alert").html("Please Enter Valid Name");
      } else if (dob == null || dob == "") {
        $("#alert").addClass("alert-danger");
        $("#alert").html("Please Enter DOB");
      } else if (sex == null || sex == "") {
        $("#alert").addClass("alert-danger");
        $("#alert").html("Please Select Valid Gender");
      } else if (mob.length < 10) {
        $("#alert").addClass("alert-danger");
        $("#alert").html(
          "Please Enter Valid Mobile number <br/> It should be 10 digits long"
        );
      } else {
        $.post(
          "doProfile.php",
          {
            name : name,
            dob : dob,
            sex : sex,
            mobile : mob
          },
          function(result) {
            if (result == 200 || result == "200") {
              $("#alert").removeClass("alert-danger");
              $("#alert").addClass("alert-success");
              $("#alert").html(
                'Profile Updated Successful <br /> you will be redirected to home page shortly ....<div class="spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div>'
              );
              setTimeout(function() {
                window.location = "index.php";
              }, 5000);
            } else {
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
  