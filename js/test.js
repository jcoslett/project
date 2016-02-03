//tests whether js loaded
console.log("LOADED");

var t;

  window.g = {
    counter: 0,
    test: 0,
    n: 2,
    trainingPeriod: 20,
    speed: 3000,
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
  console.log(g.counter);
  if (g.counter == 20){
    clearInterval(g.speed);
  }

}

function play() {
  g.speed = setInterval(step,1000);
}

play();
