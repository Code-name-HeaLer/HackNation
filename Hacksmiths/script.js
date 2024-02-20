// Get references to the video elements
var leftVideo = document.getElementById("leftVideo");
var rightVideo = document.getElementById("rightVideo");

// Function to reverse play
function reversePlay(video) {
  video.playbackRate = -1; // Set playback rate to reverse
  video.play(); // Start playing in reverse
}

// Event listener for when the left video ends
leftVideo.addEventListener('ended', function() {
  reversePlay(leftVideo); // Reverse play the left video
}, false);

// Event listener for when the right video ends
rightVideo.addEventListener('ended', function() {
  reversePlay(rightVideo); // Reverse play the right video
}, false);