$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shoutInput = $("input#inputtext").val();
    var shoutInput = shoutInput.toUpperCase();

    $(".shout").text(shoutInput);

    $("#shouting").show();

    event.preventDefault();

  });


});
