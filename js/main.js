

  /* MODEL: Data Model **************************************************/
  // make a single global-level object on window for the game…
  window.game = {
    timer: undefined,
    speed: 900,
    isWon: false,
    isPaused: true,
    board: {
      openCells:   [0, 1, 2, 3, 4, 5, 6, 7, 8],
      closedCells: [],
      avocadoCell: undefined
    },
    printState: function() {
      // console.log(this)
      if (game.won) {
        console.log("YOU WON!");
      } else {
        console.log(
          "-> Avocado: " + (game.avocadoCell === undefined ? "-" : game.avocadoCell),
          " (P: " + game.isPaused + ")",
          "\n   Open:    " + "[" + game.openCells + "]",
          "\n   Closed:  " + "[" + game.closedCells + "]"
        );
      }
    }
  };

window.gameState = {
  timer: undefined,
  speed: 2000,
  isInProgress: false,
  canGuess: false,
  display: {
    litCell: undefined,
    currentSound: undefined
  },
  printState: function() {
    // console.log(this)
    if (!gameState.isInProgress) {
      console.log("Not currently training");
    } else {
      console.log(
        "Lit cell: " + (gameState.litCell === undefined ? "-" : gameState.litCell),
        " (P: " + game.isPaused + ")",
        "\n   Open:    " + "[" + game.openCells + "]",
        "\n   Closed:  " + "[" + game.closedCells + "]"
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
