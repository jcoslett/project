var t;

var n = 2; // number back
var g = {
    input: null,
    counter: 0,
    trainingPeriod: 10,
    speed: 3350,
    isInProgress: false,
    audioWasGuessed: false,
    videoWasGuessed: false,
    canGuessAudio: false, //can't guess at beginning; initializes to false
    canGuessVideo: false, //same deal
    litCell: 0,
    currentSound: 0,
    currentAudioResp: null,
    currentVideoResp: null,
    audioScore: 0,
    videoScore: 0,
    audioGens: [],
    videoGens: [],
    visMatches: 0,
    audMatches: 0,
    audioWronguns: 0,
    videoWronguns: 0,
    sounds: ["M","S","T","F","K","H"]
  };

$('body').keydown(function(event) {
  var log = "kdown ";

  g.input = event.keyCode; // return which key was pressed
  if (
      ( // left hand audio
        (g.input === 70) || // A
        (g.input === 68) || // S
        (g.input === 83) || // D
        (g.input === 65)    // F
      ) && (g.canGuessAudio === true)
    ) {
    if (g.audioWasGuessed) return; // ignore multiples
    g.audioWasGuessed = true;

    log += "AUD ";
    if (g.audioGens[0] === g.audioGens[n]) {
      g.audioScore++;
      document.getElementById('SP').play();
      log += "MATCH!";
      // $("body").css({background: "green"}).delay(100).queue(function (next) {
      //   $(this).css({background: "gray"});
      //   next();
      // });
    } else {
      g.audioWronguns++;
      log += "miss.";
      // $("body").css({background: "red"}).delay(100).queue(function (next) {
      //   $(this).css({background: "gray"});
      //   next();
      // });
    }
  } else
  if (
      ( // right hand visual
        (g.input === 74) || // J
        (g.input === 75) || // K
        (g.input === 76) || // L
        (g.input === 186)   // ;
      ) && (g.canGuessVideo === true)
    ) {
    if (g.videoWasGuessed) return; // ignore multiples
    g.videoWasGuessed = true;

    log += "VID ";
    if (g.videoGens[0] === g.videoGens[n]) {
      g.videoScore++;
      document.getElementById('SP').play();
      log += "MATCH!";
      // $("body").css({background: "green"}).delay(100).queue(function (next) {
      //   $(this).css({background: "gray"});
      //   next();
      // });
    } else {
      g.videoWronguns++;
      log += "miss.";
      // $("body").css({background: "red"}).delay(100).queue(function (next) {
      //   $(this).css({background: "gray"});
      //   next();
      // });
    }
  } else {
    return; // do nothing. return nothing. ignore.
  }

  console.log(log);
});

function step() {
  g.counter++;
  g.audioWasGuessed = false;
  g.videoWasGuessed = false;

  playSound();
  recordAudioGen();
  lightCell();
  recordVideoGen();

  if (g.counter > n) {
    g.canGuessAudio = true;
    g.canGuessVideo = true;
  }
  if (g.videoGens[0] === g.videoGens[n]) {
    g.visMatches++;
    console.log("Currently in Vis Match…");
  }
  if (g.audioGens[0] === g.audioGens[n]){
    g.audMatches++;
    console.log("Currently in Aud Match…");
  }

  if (g.counter > (n+1)) {
    g.audioGens.pop();
    g.videoGens.pop();
  }

  if (g.counter > n) {
    console.log(
        "Counter:", g.counter,
      "\nNow (Box/Tone): (" + g.videoGens[0].slice(-1) + "/" + g.audioGens[0] + ")",
      "\nN-B (Box/Tone): (" + g.videoGens[n].slice(-1) + "/" + g.audioGens[n] + ")",
      "\nMatches (A/V):  (" + g.audMatches + "/" + g.visMatches + ")",
      "\nCorrect (A/V:   (" + g.audioScore + "/" + g.videoScore + ")",
      "\nWrongun (A/V):  (" + g.audioWronguns + "/" + g.videoWronguns + ")"
    );
  } else {
    console.log("Counter:", g.counter, "(Box/Tone): (" + g.videoGens[0].slice(-1) + "/" + g.audioGens[0] + ")");
  }

  setTimeout(removeDiv, g.speed/2);

  if (g.counter === g.trainingPeriod){
    clearInterval(t);
  }
}

function start() {
  t = setInterval(step, g.speed);
}

function pause() {
  clearInterval(t);
}

// Generates a random sound name from {mstfkh}
function generateSound(){
  var randomSound = g.sounds[Math.floor(Math.random()*g.sounds.length)];
  return randomSound;
}

// Plays one of the sounds randomly
function playSound() {
  g.currentSound = generateSound();
  document.getElementById(g.currentSound).play();
}

// Records the sound played
function recordAudioGen(){
  g.audioGens.unshift(g.currentSound);
}

// Generate a random cell index from {0:8}
function generateCell(){
  var randomCell = Math.floor(Math.random()*9);
  return randomCell;
};

// Generates a random cell and lights it
function lightCell() {
  g.litCell = "#cell" + generateCell();
  var createdDiv = document.createElement("div");
  $(g.litCell).append(createdDiv);
}

// Records the lit cell
function recordVideoGen(){
  g.videoGens.unshift(g.litCell);
}

// Removes the lit cell's div
function removeDiv(){
  $('td div').remove();
}

start();
