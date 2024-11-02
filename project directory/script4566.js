// Function to toggle the flip effect on videos
function toggleFlip() {
    const video = document.getElementById('uploaded-video');
    const iframe = document.getElementById('embedded-video');
    
    // Toggle the flipped class on both video and iframe
    video.classList.toggle('flipped');
    iframe.classList.toggle('flipped');
}

// Function to load uploaded videos
document.getElementById('uploaded-video').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        video.src = url;
        video.style.display = 'block'; // Show the uploaded video element
        iframe.style.display = 'none'; // Hide the embedded video element
    }
});

// Function to load embedded videos
function loadVideo(url) {
    const iframe = document.getElementById('embedded-video');
    iframe.src = url;
    iframe.style.display = 'block'; // Show the embedded video element
    video.style.display = 'none'; // Hide the uploaded video element
}
