$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var cityInput= $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".stateInput").text(stateInput);
    $(".zip").text(zipInput);

    $("#ship").show();

    event.preventDefault();
  });
});
