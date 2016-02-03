var t;

g = {
    input: null,
    counter: 0,
    test: 0,
    n: 2,
    trainingPeriod: 20,
    speed: 1000,
    isInProgress: false,
    audioWasGuessed: false,
    videoWasGuessed: false,
    canGuessAudio: false,
    canGuessVideo: false,
    litCell: 0,
    currentSound: 0,
    currentAudioResp: 0,
    currentVideoResp: 0,
    audioScore: 0,
    videoScore: 0,
    audioGens: [],
    videoGens: [],
    audioResps: [],
    videoResps: [],
  }

function step() {
  g.counter++;
  playSound();
  recordAudioGen();
  lightCell();
  recordVideoGen();
  if (g.counter > g.n){
    g.canGuessAudio = true;
    g.canGuessVideo = true;
  }
  setKeyboardListeners();
  console.log(g.currentSound,g.litCell,g.audioGens,g.videoGens,g.canGuessAudio,g.canGuessVideo);
  clearListeners();
  //removeDiv();
  if (g.counter == 5){
    clearInterval(t);
  }
}

function start() {
  t = setInterval(step,1000);
}

//Generates a random sound name from {mstfkh}
function generateSound(){
  var sounds = ["m","s","t","f","k","h"];
  var randomSound = sounds[Math.floor(Math.random()*sounds.length)];
  return randomSound;
}

//plays one of the sounds randomly
function playSound() {
  g.currentSound = generateSound();
  //play the sound
}

//records the sound played
function recordAudioGen(){
  g.audioGens.push(g.currentSound);
}

//Generate a random cell index from {0:8}
function generateCell(){
  var randomCell = Math.floor(Math.random()*9);
  return randomCell;
};

//generates a random cell and lights it
function lightCell() {
  g.litCell = generateCell();
  var createdDiv = document.createElement("div");
  $("#cell" + g.litCell).append(createdDiv);
}

//records the lit cell
function recordVideoGen(){
  g.videoGens.push(g.litCell);
}

function setKeyboardListeners(){
  $(document).keydown(function(event) {
    //console.log(event);
    g.input = event.keycode; // return which key was pressed
    if((g.input === 81) || (g.input === 87) || (g.input === 69) ||
       (g.input === 82) || (g.input === 65) || (g.input === 83) ||
       (g.input === 68) || (g.input === 70) || (g.input === 90) ||
       (g.input === 88) || (g.input === 67) && (g.canGuessAudio == true)) {
          g.canGuessAudio = false;
          console.log("Audio match key pressed");
    }
    if ((g.input === 80) || (g.input === 79) || (g.input === 73) ||
       (g.input === 85) || (g.input === 74) || (g.input === 75) ||
       (g.input === 76) || (g.input === 186) || (g.input === 77) ||
       (g.input === 78) || (g.input === 188) || (g.input === 190) && (g.canGuessVideo == true)) {
          g.canGuessVideo = false;
          console.log("Video match key pressed");
       }
  }
)}

function clearListeners() {
  g.canGuessAudio = false;
  g.canGuessVideo = false;
}

//removes the lit cell's div
function removeDiv(){
  $('td div').remove();
}

start();
