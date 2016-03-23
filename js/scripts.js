$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    // Coffee drop-down
    var beverage = $("#beverage").val();


    // Radio buttons
    var flavor = $("input:radio[name=flavor]:checked").val();
    alert (flavor);
    // Date picker
    var dob = $("#born").val();
    alert (dob);
    // Color check-box
    var favoriteColor = $("#color").val();
    alert (favoriteColor);

  // Appointments .js
    // var nameInput = $("input#name").val();
    // var dateInput = $("input#date").val();
    // var startInput = $("input#start").val();
    // var endInput = $("input#end").val();
    //
    // $(".name").text(nameInput);
    // $(".date").text(dateInput);
    // $(".start").text(startInput);
    // $(".end").text(endInput);
    //
    // $("#confirmation").show();

    event.preventDefault();
  });
});
