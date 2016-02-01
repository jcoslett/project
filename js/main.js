

  /* MODEL: Data Model **************************************************/
  // make a single global-level object on window for the game…

window.gameState = {
  flashes: undefined,
  n: 2,
  trainingPeriod : 20;
  speedSetting: 2000,
  isInProgress: false,
  canGuess: false,
  litCell: undefined,
  currentSound: undefined
  currentAudioResp: undefined,
  currentVideoResp: undefined,
  audioGens = [];
  videoGens = [];
  audioResps = [];
  videoResps = [];
  }
  printState: function() {
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
}


function match(input1,input2){
  if (input1 === input2){
    return true;
  }
    return false;
}
//Generates a random cell index from {0:8}
function generateCell(){
  var randomCell = Math.floor(Math.random()*8);
  return randomCell;
};
//Generates a random sound name from {tsrkhl}
function generateSound(){
  var sounds = ["t","s","r","k","h","l"];
  var randomSound = sounds[Math.floor(Math.random()*sounds.length)];
  return randomSound;
}
/*
function initialDelay() {*/
function mainEvent(){

}
}
*/

Define a turn count, an n-back, random audio, random video, ability to guess, audio response, video response
Match n back to get current correctness for both
Display individual affirmation if a match
Record current correctness for both by pushing onto correctness array
Do this throughout the training
total correct responses and percentages
return to home screen

