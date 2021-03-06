const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timeStamp');

//update play and pause video;
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//update play and pause icon;
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2xl"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2xl"></i>'
  }
}
//update progress and timestamp 
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // get mins 
  let mins = Math.floor(video.currentTime / 60)
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  //get secs
  let secs = Math.floor(video.currentTime % 60)
  if (secs < 10) {
    secs = '0' + String(secs);
  }
  timeStamp.innerHTML = `${mins}:${secs}`
}
//set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
//stop video 
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}



// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);