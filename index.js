var gamePattern = [];
var buttonColors = ["red", "green", "yellow", "blue"]
var response = [];
var gamelevel = 0;


$(document).on("keydowm", function(e){
  var keypressed = e.keyCode;
  console.log("you pressed:  " + keypressed);
  if (keypressed === 13){
    nextSequenceSys();
  }
})

/* GET CLICK RESPONSE BY THIS FUNCTION*/
// buttonanimation(randomChoosenColor);

//that pushes a random color
//GENERATES RANDOM COLOR AND PUSH IT IN GAME PATTERN ARRAY
function nextSequenceSys(){
  var randomNumber = Math.floor(Math.random()*3);
  console.log(randomNumber);
  var randomChoosenColor = buttonColors[randomNumber];
  console.log(randomChoosenColor);
  gamePattern.push(randomChoosenColor);
  console.log("random generated" + gamePattern);
  buttonanimation(gamePattern[gamePattern.length-1]);
  changeLevel();
  response = []
};

// all animation and sounds inserted in this function
function buttonanimation(currentcolor){

  switch (currentcolor) {
    case "red":
      var redsound = new Audio("sounds/red.mp3")
      redsound.play();
      $("#red").addClass(".pressed");
      setTimeout(function(){
        $("#red").removeClass(".pressed");
      }, 250);
      break;
    case "green":
      var greensound = new Audio("sounds/green.mp3")
      greensound.play();
      $("#green").addClass(".pressed");
      setTimeout(function(){
        $("#green").removeClass(".pressed")
      }, 250);
      break;
    case "yellow":
      var yellowsound = new Audio("sounds/yellow.mp3")
      yellowsound.play();
      $("#yellow").addClass(".pressed");
      setTimeout(function(){
        $("#yellow").removeClass(".pressed")
      }, 250);
      break;
    case "blue":
      var bluesound = new Audio("sounds/blue.mp3");
      bluesound.play();
      $("#blue").addClass(".pressed")
      setTimeout(function () {
        $("#blue").removeClass(".pressed");
      }, 250);
      break;
  }
};

function changeLevel(){
  gamelevel++;
  $("#level-title").text(`Level: + ${gamelevel}`);
};

$(".btn").click(function (e){
  var elmtid = $(this).attr("id");
  console.log("click response"+elmtid);
  response.push(elmtid);
  console.log(response);
  compare(response.length-1);
});


function compare(i){
  if (gamePattern[i] === response[i]) {
    if (gamePattern.length === response.length){
      setTimeout(function(){
        nextSequenceSys();
      }, 1000);
    }
  } else {
    gameerror();
  }
}

function gameerror(){
  $("body").css("background-color", "red");
  $("h1").text("GAME OVER");
  setTimeout(function(){
    $("h1").text("Press Enter keya to start");
    $("body").css("background-color", "#011F3F");
  },1500);
  var errormusic = new Audio("sounds/wrong.mp3");
  errormusic.play();
  gamelevel = 0;
  response = [];
};
