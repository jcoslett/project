
window.gameState = {
  flash: 0,
  test: undefined,
  n: 2,
  trainingPeriod : 20,
  speedSetting: 2500,
  isInProgress: false,
  canGuess: false,
  audioWasGuessed: false,
  videoWasGuessed: false,
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


//Helper Functions:

//Generate a random cell index from {0:8}
function generateCell(){
  var randomCell = Math.floor(Math.random()*9);
  return randomCell;
};

//Generates a random sound name from {mstfkh}
function generateSound(){
  var sounds = ["m","s","t","f","k","h"];
  var randomSound = sounds[Math.floor(Math.random()*sounds.length)];
  return randomSound;
}
//delays
function delay(){
  return true;
}

//generates a random cell and lights it
function lightCell() {
  litCell = generateCell();
  var createdDiv = document.createElement("div");
  $("#cell" + litCell).append(createdDiv);
  return true;
}

//records the lit cell
function recordVideoGen(){
  gameState.videoGens.push(litCell);
  return true;
}

//removes the lit cell's div
function removeDiv(){
  $('td div').remove();
  return true;
}

//plays one of the sounds randomly
function playSound() {
  var currentSound = generateSound();
  //play the sound
}

//records the sound played
function recordAudioGen(){
  gameState.audioGens.push(currentSound);
}

function mainEvent(){
  //set initial delay
  setTimeout(delay, 250);
  //master for loop
  for (var i=0; i<gameState.trainingPeriod+2; i++){
    //move the turn count
    gameState.flash++;
    //generate a sound and make it the current one
    playSound();
    //record what sound was just played
    recordAudioGen();
    //generate a cell and make it the current one
    lightCell();
    //record which cell was just lit
    recordVideoGen();
    //set canGuess if there have been enough flashes
    if (gameState.flash >= n){
      gameState.canGuess = true;
    }
    //add a key input listener that records answers
    if (gameState.canGuess == true){
      $(document).keydown(function(event) {
        var input = event.which; // return which key was pressed
        if((input === 81) || (input === 87) || (input === 69) ||
          (input === 82) || (input === 65) || (input === 83) ||
          (input === 68) || (input === 70) || (input === 90) ||
          (input === 88) || (input === 67)) {
            currentAudioResp = true;
            gameState.audioResps.push(currentAudioResp);
            checkForAudioMatch();
            if (videoWasGuessed == true){ canGuess = false;}
            audioWasGuessed = true;
        } else if ((input === 80) || (input === 79) || (input === 73) ||
          (input === 85) || (input === 74) || (input === 75) ||
          (input === 76) || (input === 186) || (input === 77) ||
          (input === 78) || (input === 188) || (input === 190)) {
            currentVideoResp = true;
            gameState.videoResps.push(currentVideoResp);
            checkForVideoMatch();
            if (audioWasGuessed == true){canGuess = false;}
            videoWasGuessed = true;
        }
      });
      //if match(current event, n back), change a dom attribute
    }
    //set timeout for video display
    setTimeout(removeDiv,500)
    //reset canGuess
    canGuess = false;
    if (wasGuessed = false){
      gameState.videoResps.push(false);
    }
  }
}

function checkForAudioMatch (){
  var length1 = gameState.audioGens.length;
  if ((audioWasGuessed == true) && (currentAudioResp == true) && (currentAudioResp == gameState.audioGens[length1 - n])) {
    gameState.audioScore++;
    playIfMatched();
  } else {
    return false;
  }
}

function checkForVideoMatch (){
  var length2 = gameState.videoGens.length;
  if ((wasGuessed == true) && (currentVideoResp == true) && (currentVideoResp == gameState.videoGens[length2 - n])) {
    gameState.videoScore++;
    flashIfMatched();
  } else {
    return false;
  }
}

function playIfMatched(){
  var audio = document.getElementById('SP');
  audio.play();
}

function checkForAudioMatch (){
  var length1 = gameState.audioGens.length;
  if ((audioWasGuessed == true) && (currentAudioResp == true) && (currentAudioResp == gameState.audioGens[length1 - n])) {
    gameState.audioScore++;
    playIfMatched();
  } else {
    return false;
  }
}

function checkForVideoMatch (){
  var length2 = gameState.videoGens.length;
  if ((wasGuessed == true) && (currentVideoResp == true) && (currentVideoResp == gameState.videoGens[length2 - n])) {
    gameState.videoScore++;
    flashIfMatched();
  } else {
    return false;
  }
}

function flashIfMatched(){

}

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
