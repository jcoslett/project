console.log("LOADED");

var t;

  window.g = {
    counter: 0,
    test: 0,
    n: 2,
    trainingPeriod: 20,
    speed: 1000,
    isInProgress: false,
    canGuess: false,
    audioWasGuessed: false,
    videoWasGuessed: false,
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
    g.canGuess = true;
  }
  if (g.canGuess == true){
    setKeyboardListeners();
  }
    $(document).keydown(function(event) {
      var input = event.which; // return which key was pressed
      if((input === 81) || (input === 87) || (input === 69) ||
          (input === 82) || (input === 65) || (input === 83) ||
          (input === 68) || (input === 70) || (input === 90) ||
          (input === 88) || (input === 67)) {
              g.audioWasGuessed = true;
              g.currentAudioResp = true;
              g.audioResps.push(g.CurrentAudioResp);
              checkForAudioMatch();
              if (g.videoWasGuessed == true){ g.canGuess = false;}
      } else if ((input === 80) || (input === 79) || (input === 73) ||
          (input === 85) || (input === 74) || (input === 75) ||
          (input === 76) || (input === 186) || (input === 77) ||
          (input === 78) || (input === 188) || (input === 190)) {
              videoWasGuessed = true;
              currentVideoResp = true;
              g.videoResps.push(currentVideoResp);
              checkForVideoMatch();
              if (audioWasGuessed == true){canGuess = false;}
        }
  else {
    console.log("Can't guess");
  }
  console.log(g.currentSound,g.litCell,g.audioGens,g.videoGens,g.canGuess);
  if (g.counter == 5){
    clearInterval(t);
  }
});

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
    var input = event.which; // return which key was pressed
    if((input === 81) || (input === 87) || (input === 69) ||
       (input === 82) || (input === 65) || (input === 83) ||
       (input === 68) || (input === 70) || (input === 90) ||
       (input === 88) || (input === 67)) {
        g.audioWasGuessed = true;
        g.currentAudioResp = true;
        g.audioResps.push(g.CurrentAudioResp);
        checkForAudioMatch();
        if (g.videoWasGuessed == true){
          g.canGuess = false;
        } else if
        ((input === 80) || (input === 79) || (input === 73) ||
        (input === 85) || (input === 74) || (input === 75) ||
        (input === 76) || (input === 186) || (input === 77) ||
        (input === 78) || (input === 188) || (input === 190)) {
          videoWasGuessed = true;
          currentVideoResp = true;
          g.videoResps.push(currentVideoResp);
          checkForVideoMatch();
          if (audioWasGuessed == true){canGuess = false;}
          }
          else {
            console.log("Can't guess");
          }
}

start();
