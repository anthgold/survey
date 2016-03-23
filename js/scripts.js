$(document).ready(function() {
  $(".jumbotron form").submit(function(event) {

    // Coffee drop-down
    var beverage = $("#beverage").val();

    // Radio buttons
    var flavor = $("input:radio[name=flavor]:checked").val();

    // Date picker
    var dob = $("#born").val();

    // Color check-box
    var favoriteColor = $("#color").val();


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
