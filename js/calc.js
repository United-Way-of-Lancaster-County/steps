var total = 0;
const cheeky_neg = ["That's it?", "I feel like you could have done more...", "Try harder next time, ok?", "Um, my grandmother could do better.", "I've seen better.", "Next time, try getting off the couch.", "That's it?", "Is that really all you have?", "Are you serious?", "Lame!", "You really phoned it in.", "That was pretty unexceptional.", "Amateur!", "A rookie workout.", "Uh... really?"];
const cheeky_med = ["That's \"reasonable\".","Meh, it's a pass.", "I guess if you're ok with \"so-so\"...", "I suppose that's OK.", "I dunno, that was... alright?", "Mediocre, at best.", "Very average.", "Nothing to write home about.", "A run-of-the-mill workout.", "Passable, I guess.", "Adequate, I suppose.", "It looks like you tried at least."];
const cheeky_pos = ["That's pretty good!", "You're definitely on the right track!", "Keep it up!","You're getting there.", "Right on!", "Keep up the good work!", "Looks like you broke a sweat.", "A decent workout."];
const cheeky_awesome = ["That's what I'm talking about!", "Great job!","Exceptional workout!", "Nailed it!", "Outstanding!", "That was remarkable", "A top-notch workout!", "Freakin' awesome!", "Feelin' good!!!", "You could totally be on American Ninja Warrior.", "Amazing!","You should be proud of yourself."];

$(document).ready(function () {

  $(".calc-button").click(function () {
	  if($('input[name="interval"]:checked').val() == "hours") {
		  total = $("#calc_total").val() * $("#calc_activity").val() * 60;
	  } else {
		  total = $("#calc_total").val() * $("#calc_activity").val();
	  }


    if (total < 3000) {
      var cheeky_comment = cheeky_neg[Math.floor(Math.random()*cheeky_neg.length)];
    }
    else if (total >= 3000 && total < 7000) {
      var cheeky_comment = cheeky_med[Math.floor(Math.random()*cheeky_med.length)];
    }
    else if (total >= 7000 && total < 12000) {
      var cheeky_comment = cheeky_pos[Math.floor(Math.random()*cheeky_pos.length)];
    }
    else if (total >= 12000) {
      var cheeky_comment = cheeky_awesome[Math.floor(Math.random()*cheeky_awesome.length)];
    }

    $(".hidden-content").show();
    $(".step-total").empty();
    $(".step-total").append( total.toLocaleString() );
    $(".cheeky").empty();
    $(".cheeky").append( cheeky_comment );
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
