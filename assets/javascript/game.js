var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;

function startNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}
window.startNumber(19, 120);

var resetAndStart = function() {
  $(".crystals").empty();

  var images = [
    "assets/images/blue_crystal.jpg",
    "assets/images/Green_crystal.jpg",
    "assets/images/purple_crystal.jpg",
    "assets/images/red_crystal.jpg"
  ];

  randomResult = startNumber(19, 120);
  console.log(randomResult);

  $("#result").html("Your Number: " + randomResult);
  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12) + 1;
    //console.log(random);

    var crystal = $("<div>");
    crystal.attr({
      class: "crystal",
      "data-random": random
    });
    crystal.html(random); //shows the number in the crystal area
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });

    $(".crystals").append(crystal);
  }
  $("#previous").html("Your Total Score: " + previous);
};
resetAndStart();

$(document).on("click", ".crystal", function() {
  var num = parseInt($(this).attr("data-random"));
  previous += num;

  $("#previous").html("Your Total Score: " + previous);
  console.log(previous);

  if (previous > randomResult) {
    losses++;
    $("#losses").html("Total Losses: " + losses);
    previous = 0;

    resetAndStart();
  } else if (previous === randomResult) {
    wins++;
    $("#wins").html("Total Wins: " + wins);
    previous = 0;

    resetAndStart();
  }
});
