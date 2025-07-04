function flipVideo() {
  const video = document.getElementById('myVideo');
  video.style.transform = video.style.transform === 'scaleX(-1)' ? '' : 'scaleX(-1)';
}

function playVideo() {
  const video = document.getElementById('myVideo');
  video.play();
}

function pauseVideo() {
  const video = document.getElementById('myVideo');
  video.pause();
}

document.getElementById('videoInput').addEventListener('change', function () {
  const video = document.getElementById('myVideo');
  const file = this.files[0];
  video.src = URL.createObjectURL(file);
});
