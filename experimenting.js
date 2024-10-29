let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function to open the modal and display the clicked image
function openModal(imageId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    // Get the clicked image and its alt text (for caption)
    var image = document.querySelector(`[onclick="openModal('${imageId}')"] img`);
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
// Function to open the modal and display the clicked image
function openModal(imageId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    // Get the clicked image and its alt text (for caption)
    var image = document.querySelector(`[onclick="openModal('${imageId}')"] img`);
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;

    // Add an event listener to close modal on mouse move
    document.addEventListener('mousemove', autoCloseModal);
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";

    // Remove the event listener after closing the modal
    document.removeEventListener('mousemove', autoCloseModal);
}

// Function to close modal automatically on mouse move
function autoCloseModal(event) {
    var modal = document.getElementById("modal");
    var modalContent = document.querySelector(".modal-content");

    // Check if the mouse is outside the modal content area
    if (modal.style.display === "block") {
        var rect = modalContent.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            closeModal(); // Close modal if mouse is outside the modal
        }
    }
}
