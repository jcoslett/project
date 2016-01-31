console.log("JS Loaded");
//Create initial variables:
var audioGens = [];
var videoGens = [];
var audioResps = [];
var videoResps = [];
var iterationCounter = 0;

function generate() {
  var randomCell = Math.floor(Math.random()*8);
  return randomCell;
};
