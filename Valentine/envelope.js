const envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

document.addEventListener("DOMContentLoaded", function() {
    const imagePaths = [
        "images/IMG_20241120_001558.jpg",  // Fixed extension
        "images/1739087139388.jpeg",
        "images/IMG_20241223_231103_008.jpg"
        
    ];

    function createScatteredImages() {
        const container = document.querySelector(".floating-images");

        if (!container) {
            console.error("Error: .floating-images container not found!");
            return;
        }

        imagePaths.forEach((src) => {
            let img = document.createElement("img");
            img.src = src;
            img.classList.add("scattered-image");

            // Randomize position and rotation
            img.style.position = "absolute"; // Ensure absolute positioning
            img.style.top = Math.random() * 80 + "%";
            img.style.left = Math.random() * 80 + "%";
            img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

            container.appendChild(img);
        });
    }

    createScatteredImages(); // Call the function to add images
});
