var t;

var g = {
    input: null,
    counter: 0,
    test: 0,
    // n: 2,
    trainingPeriod: 20,
    speed: 1000,
    isInProgress: false,
    audioWasGuessed: false,
    videoWasGuessed: false,
    canGuessAudio: false,
    canGuessVideo: false,
    litCell: 0,
    currentSound: 0,
    currentAudioResp: null,
    currentVideoResp: null,
    audioScore: 0,
    videoScore: 0,
    audioGens: [],
    videoGens: []
  }

$('body').keydown(function(event) {
  g.input = event.keyCode; // return which key was pressed
  if(((g.input === 70) || (g.input === 68) || (g.input === 83) ||
     (g.input === 65)) && (g.canGuessAudio === true)) { // left hand audio
        g.canGuessAudio = false;
        if (g.audioGens[0] === g.audioGens[2]) {
          g.audioScore += 1;
        }
        console.log("Audio match key pressed");
  }
  if (((g.input === 74) || (g.input === 75) || (g.input === 76) ||
     (g.input === 186)) && (g.canGuessVideo === true)) { // right hand visual
        g.canGuessVideo = false;
      if (g.videoGens[0] === g.videoGens[2]) {
        g.audioScore += 1;
      }
        console.log("Video match key pressed");
     }
});

function step() {
  removeDiv();
  g.counter++;
  playSound();
  recordAudioGen();
  lightCell();
  recordVideoGen();
  if (g.counter > 2){
    g.canGuessAudio = true;
    g.canGuessVideo = true;
  }
  if (g.counter > 3) {
    g.audioGens.pop();
    g.videoGens.pop();
    if (g.videoGens[0] === g.videoGens[2]) console.log("Visual Match!");
  }
  // console.log(g.currentSound,g.litCell,g.audioGens,g.videoGens,g.canGuessAudio,g.canGuessVideo);
  //clearListeners();
  //removeDiv();
  if (g.counter === 25){
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
  g.litCell = "#cell" + generateCell();
  var createdDiv = document.createElement("div");
  $(g.litCell).append(createdDiv);
}

//records the lit cell
function recordVideoGen(){
  g.videoGens.unshift(g.litCell);
}


//removes the lit cell's div
function removeDiv(){
  $('td div').remove();
}

start();
