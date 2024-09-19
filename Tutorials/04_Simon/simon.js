var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  console.log(gamePattern);

  let buttonId = "#" + randomColor;
  $(buttonId).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomColor);
}

function playSound(color) {
  let sound = new Audio("sounds/" + color + ".mp3");
  sound.play();
}

$(".btn").click(function() {
  let buttonId = $(this).attr("id");
  let userChosenColor = buttonId;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  
  // Play the sound of the corresponding button
  playSound(userChosenColor);
  
  // Animate the button press
  animatePress(userChosenColor);
  
  // Check the answer
  checkAnswer(level);
});

