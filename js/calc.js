var $ = jQuery;
var total = 0;

$(document).ready(function () {

  $(".calc-button").click(function () {
	  if($('input[name="interval"]:checked').val() == "hours") {
		  total = $("#calc_total").val() * $("#calc_activity").val() * 60;
	  } else {
		  total = $("#calc_total").val() * $("#calc_activity").val();
	  }

    $(".step-total").empty();
    $( ".step-total" ).append( total.toLocaleString() );
    total = 0;
  });

  $("#calc_total").on("keyup keypress", function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
      $(".calc-button").trigger("click");
      return false;
    }
  });

});



