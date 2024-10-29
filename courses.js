let currentIndex = 0;
const images = document.querySelectorAll('.slideshow-image');

// Show the first image
images[currentIndex].style.display = 'block';

// Function to show the next image
function showNextImage() {
    // Hide the current image
    images[currentIndex].style.display = 'none';
    
    // Update the index to the next image (loop back to the first one if at the end)
    currentIndex = (currentIndex + 1) % images.length;
    
    // Show the next image
    images[currentIndex].style.display = 'block';
}

// Automatically change images every 3 seconds (3000 ms)
setInterval(showNextImage, 3000);