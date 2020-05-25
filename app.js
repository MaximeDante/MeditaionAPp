const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
// const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".video__container video");
//Sounds
const sounds = document.querySelectorAll(".sound__picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
//const outlineLength = outline.getTotalLength();
//Duration
const timeSelect = document.querySelectorAll(".time__select button");
let fakeDuration = 600;

// outline.style.strokeDashoffset = outlineLength;
// outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    //console.log(song.src)
    video.src = this.getAttribute("data-video");
    //console.log(video.src)
    checkPlaying(song);
  });
});

play.addEventListener("click", function() {
  checkPlaying(song);
});

replay.addEventListener("click", function() {
    restartSong(song);
    
 });


const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao");

}

timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});
console.log(Math.floor(120 / 60));
console.log(Math.floor(120 % 60));

const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  //console.log(currentTime);
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
 
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
 
  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};

