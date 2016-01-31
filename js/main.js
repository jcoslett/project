console.log("JS Loaded");
//Create initial variables:
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
  var randomSound = Math.floor(Math.random()*6);
  if (randomSound = 1) {return "t"};
  if (randomSound = 2) {return "s"};
  if (randomSound = 3) {return "r"};
  if (randomSound = 4) {return "k"};
  if (randomSound = 5) {return "h"};
  if (randomSound = 6) {return "l"};
}

function initialDelay() {

}
