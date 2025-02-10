const envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "images/IMG_20241120_001558.jpg",
        "images/IMG_20241223_231103_008.jpg",
        "images/N1.jpg",
        "images/N2.jpeg",
        "images/N3.jpeg",
        "images/N4.jpeg",
        "images/N5.jpg",
        "images/N6.jpg",
        "images/N7.jpeg",
        "images/N8.jpg",
        "images/N9.jpg",
    ];

    function createScatteredImages() {
        const container = document.querySelector(".floating-images");
        const envelope = document.querySelector(".container");

        if (!container || !envelope) {
            console.error("Error: Missing required elements!");
            return;
        }

        const envelopeRect = envelope.getBoundingClientRect();
        const placedImages = []; // Store placed images to track overlap

        const half = Math.ceil(imagePaths.length / 2);
        const leftImages = imagePaths.slice(0, half);  // Left side images
        const rightImages = imagePaths.slice(half);    // Right side images

        function placeImage(src, isLeftSide) {
            let img = document.createElement("img");
            img.src = src;
            img.classList.add("scattered-image");

            let randomTop, randomLeft, imgWidth = 150, imgHeight = 150;
            let topPixels, leftPixels, validPosition = false;

            // Set X boundaries based on left or right side
            let minX = isLeftSide ? 5 : 50;
            let maxX = isLeftSide ? 45 : 90;

            let attempts = 0;
            while (!validPosition && attempts < 100) {
                attempts++;
                randomTop = Math.random() * 80;
                randomLeft = minX + Math.random() * (maxX - minX);
                topPixels = window.innerHeight * (randomTop / 100);
                leftPixels = window.innerWidth * (randomLeft / 100);

                // Check if it overlaps the envelope
                let overlapsEnvelope = (
                    topPixels + imgHeight > envelopeRect.top &&
                    topPixels < envelopeRect.bottom &&
                    leftPixels + imgWidth > envelopeRect.left &&
                    leftPixels < envelopeRect.right
                );

                // Check overlap with other images
                let overlapsOtherImage = placedImages.some((pos) => {
                    let overlapX = Math.abs(leftPixels - pos.left) < imgWidth * 0.5;
                    let overlapY = Math.abs(topPixels - pos.top) < imgHeight * 0.5;
                    return overlapX && overlapY;
                });

                if (!overlapsEnvelope && (!overlapsOtherImage || Math.random() < 0.5)) {
                    validPosition = true;
                }
            }

            placedImages.push({ top: topPixels, left: leftPixels });

            img.style.position = "absolute";
            img.style.top = randomTop + "%";
            img.style.left = randomLeft + "%";
            img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

            container.appendChild(img);
        }

        leftImages.forEach((src) => placeImage(src, true));  // Left side
        rightImages.forEach((src) => placeImage(src, false)); // Right side
    }

    createScatteredImages();
});
