$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shoutInput = $("input#inputtext").val();

    $(".shout").text(shoutInput);

    $("#shouting").show();

    event.preventDefault();

  });


});
