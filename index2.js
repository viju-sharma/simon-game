var userList = [];
var systemList = [];
gameLevel = 0;
var audio = [new Audio("sounds/red.mp3"), new Audio("sounds/blue.mp3"), new Audio("sounds/green.mp3"), new Audio("sounds/yellow.mp3"), new Audio("sounds/wrong.mp3")];

var colors = ["red", "blue", "green", "yellow"];

$(document).on("keydown", function(e){
    if (e.keyCode === 13){
    nextSequence();
    }
});


function nextSequence(){
  var randomNumber = Math.floor(Math.random()*3);
  var colorChoose = colors[randomNumber];
  systemList.push(colorChoose);
  console.log(colorChoose);
  animations(colorChoose);
  changeLevel();
  userList = [];;

}


function animations(color){
  switch (color) {
    case "red":
     audio[0].play();
     $("#red").addClass("pressed");
     setTimeout(function(){
       $("#red").removeClass("pressed");
     },250)
      break;

    case "blue":
     audio[1].play();
     $("#blue").addClass("pressed");
     setTimeout(function(){
       $("#blue").removeClass("pressed");
     },250)
      break;

    case "green":
     audio[2].play();
     $("#green").addClass("pressed");
     setTimeout(function(){
       $("#green").removeClass("pressed");
     },250)
      break;

    case "yellow":
     audio[3].play();
     $("#yellow").addClass("pressed");
     setTimeout(function(){
       $("#yellow").removeClass("pressed");
     },250)
      break;
  }
}

function changeLevel(){
  gameLevel++;
  $("#level-title").text(`Level: ${gameLevel}`);
};

$(".btn").click(function(){
  var clickedButton = $(this).attr("id");
  userList.push(clickedButton);
  compare(userList.length-1);


});



function compare(index){
  if (userList[index] === systemList[index]){
    if (userList.length === systemList.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  } else {
    gameerror();
  }
};



function gameerror(){
  $("body").css("background-color", "red")
  $("h1").text("Game Over");
  setTimeout(function () {
    $("h1").text("Press Enter Key to start");
    $("body").css("background-color", "#011F3F");
  }, 1500)
  audio[4].play();
  gameLevel=0;
  systemList = [];
}
