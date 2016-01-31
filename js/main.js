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
  var sounds = ["t","s","r","k","h","l"];
  var randomSound = sounds[Math.floor(Math.random()*sounds.length)];
  return randomSound;
}
/*
function initialDelay() {

}
*/
