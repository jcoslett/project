
window.gameState = {
  flashes: undefined,
  test: undefined,
  n: 2,
  trainingPeriod : 20,
  speedSetting: 2000,
  isInProgress: false,
  canGuess: false,
  litCell: undefined,
  currentSound: undefined,
  currentAudioResp: undefined,
  currentVideoResp: undefined,
  audioScore: 0,
  videoScore: 0,
  audioGens: [],
  videoGens: [],
  audioResps: [],
  videoResps: [],
  }

//Generates a random cell index from {0:8}
function generateCell(){
  var randomCell = Math.floor(Math.random()*8);
  return randomCell;
};

//Generates a random sound name from {tsrkhl}
function generateSound(){
  var sounds = ["m","s","t","f","k","h"];
  var randomSound = sounds[Math.floor(Math.random()*sounds.length)];
  return randomSound;
}
//delays
function delay(){
  return true;
}
//
function removeDiv(){
$('td div').remove();
}

function resetMoves(){

}

function lightAndRecord() {
  litCell = generateCell();
  var createdDiv = document.createElement("div");
  $("#cell" + litCell).append(createdDiv);
  gameState.videoGens.push(litCell);
}

function playAndRecord() {
  var currentSound = generateSound();
  //play the sound
  gameState.audioGens.push(currentSound);
}

function mainEvent(){
  //set initial delay
  setTimeout(delay, 250);
  for (i=0; i< trainingPeriod+2; i++){
  //move the turn count
  flash++;
  //generate a sound, make it the current one, and record it
  playAndRecord();
  //generate a cell, make it the current one, and record it
  lightAndRecord();
  //set canGuess if there have been enough flashes
  if (flash > n){
    canGuess = true;
  }
  //add a key input listener that records answers
  if (canGuess == true){
    $(document).keydown(function(event) {
      var input = event.which; // return which key was pressed
      if((input === 81) || (input === 87) || (input === 69) ||
        (input === 82) || (input === 65) || (input === 83) ||
        (input === 68) || (input === 70) || (input === 90) ||
        (input === 88) || (input === 67)){
          currentAudioResp = true;
          gameState.videoResps.push(currentVideoResp);
      } else if ((input === 80) || (input === 79) || (input === 73) ||
        (input === 85) || (input === 74) || (input === 75) ||
        (input === 76) || (input === 186) || (input === 77) ||
        (input === 78) || (input === 188) || (input === 190)){
          currentVideoResp = true;
          gameState.videoResps.push(currentVideoResp);
  }
 });
  //add another key input listener that records answer

  //if match(current event, n back), change a dom attribute
function checkForMatch (){
  var length1 = gameState.audioGens.length;
  if ((canGuess == true) && (currentAudioResp == true) && (currentAudioResp == gameState.audioGens[length1 - n]{
    audioScore++;
    playIfMatched();
  } else {
    return false;
    }
  var length2 = gameState.videoGens.length;
  if ((canGuess == true) && (currentVideoResp == true) && (currentVideoResp == gameState.videoGens[length1 - n]{
    videoScore++;
    playIfMatched();
  } else {
    return false;
    }
}
  //do this again for the other match

  //set timeout for video display

  //reset canGuess
  canGuess == false;
}
  //return to home screen
}
function playIfMatched(){
var audio = document.getElementById('SP');
audio.play();
}

function flashIfMatched(){

}

$(document).keydown(function(event) {
   var input = event.which; // return which key was pressed
   if((input === 81) || (input === 87) || (input === 69) ||
    (input === 82) || (input === 65) || (input === 83) ||
    (input === 68) || (input === 70) || (input === 90) ||
    (input === 88) || (input === 67)){
     currentAudioResp = true;
     gameState.videoResps.push(currentVideoResp);
   } else if ((input === 80) || (input === 79) || (input === 73) ||
    (input === 85) || (input === 74) || (input === 75) ||
    (input === 76) || (input === 186) || (input === 77) ||
    (input === 78) || (input === 188) || (input === 190)){
     currentVideoResp = true;
     gameState.videoResps.push(currentVideoResp);
   }

 });

/*Define a turn count, an n-back, random audio, random video, ability to guess, audio response, video response
Match n back to get current correctness for both
Display individual affirmation if a match
Record current correctness for both by pushing onto correctness array
Do this throughout the training
total correct responses and percentages
return to home screen
*/

  /*printState: function() {
    // console.log(this)
    if (!gameState.isInProgress) {
      console.log("Not currently training");
    } else {
      console.log(
        "Lit cell: " + (gameState.litCell === undefined ? "-" : gameState.litCell),
        "\nCurrent sound: " + (gameState.currentSound === undefined ? "_" : gameState.currentSound),
        "\nCan guess: " + (game.canGuess === false ? "No" : "Yes"),
        "\nAudio N-Back: " + ((gameState.canGuess === undefined) || (gameState.videoGens[flashes-n] === undefined)) ? "-" : gameState.audioGens[flashes-n]),
        "\nVideo N-Back: " + ((gameState.canGuess === undefined) || (gameState.videoGens[flashes-n] === undefined)) ? "-" : gameState.videoGens[flashes-n]),
        "\nAudio Response: " + (game.currentAudioResp === undefined ? "-" : gameState.currentAudioResp),
        "\nVideo Response: " + (game.currentVideoResp === undefined ? "-" : gameState.currentVideoResp),
        "\nAudio Correct: " + ( match(game.currentAudioResp,gameState.audioGens[flashes-n]) === true ? "CORRECT" : "incorrect"),
        "\nVideo Correct: " + ( match(game.currentAudioResp,gameState.audioGens[flashes-n]) === true ? "CORRECT" : "incorrect"),
      );
    }
  }
*/
