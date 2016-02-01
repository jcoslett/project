

  /* MODEL: Data Model **************************************************/
  // make a single global-level object on window for the game…

window.gameState = {
  flashes: undefined,
  n: 2,
  speedSetting: 2000,
  isInProgress: false,
  canGuess: false,
  display: {
    litCell: undefined,
    currentSound: undefined
  },
  responses: {
    currentAudioResp: undefined,
    currentVideoResp: undefined
  }
  printState: function() {
    // console.log(this)
    if (!gameState.isInProgress) {
      console.log("Not currently training");
    } else {
      console.log(
        "Lit cell: " + (gameState.litCell === undefined ? "-" : gameState.litCell),
        "\nCurrent sound: " + (gameState.currentSound === undefined ? "_" : gameState.currentSound),
        "\nCan guess: " + (game.canGuess === false ? "No" : "Yes" + ),
        "\nAudio N-Back: " + ( (game.audioGens[flashes-n]) === undefined ? "-" : gameState.audioGens[flashes-n]),
        "\nVideo N-Back: " + (gameState.videoGens[flashes-n] === undefined ? "-" : gameState.videoGens[flashes-n]),
        "\nAudio Response: " + ( (game.audioGens[flashes-n]) === undefined ? "-" : gameState.audioGens[flashes-n]),
        "\nVideo Response: " + (gameState.videoGens[flashes-n] === undefined ? "-" : gameState.videoGens[flashes-n]),
        "\nAudio Correct: " + ( (game.audioGens[flashes-n]) === undefined ? "-" : gameState.audioGens[flashes-n]),
        "\nVideo Correct: " + (gameState.videoGens[flashes-n] === undefined ? "-" : gameState.videoGens[flashes-n]),
      );
    }
  }
}
var audioGens = [];
var videoGens = [];
var audioResps = [];
var videoResps = [];
var iterationCounter = 0;

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
function initialDelay() {

}
*/
