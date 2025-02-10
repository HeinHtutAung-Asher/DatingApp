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
        "images/N10.jpeg",
        "images/N11.jpeg",
        "images/N12.jpg",
        "images/N13.jpg",
        "images/N14.jpg",
    ];

    function createScatteredImages() {
        const container = document.querySelector(".floating-images");
        const envelope = document.querySelector(".container");

        if (!container || !envelope) {
            console.error("Error: Missing required elements!");
            return;
        }

        const envelopeRect = envelope.getBoundingClientRect();
        const placedPositions = new Set();
        const gridRows = 4; // More rows = better spread
        const gridCols = 5; // More columns = better spread
        const cellWidth = 100 / gridCols;
        const cellHeight = 100 / gridRows;
        const imgSize = 150; // Image size

        function placeImage(src) {
            let img = document.createElement("img");
            img.src = src;
            img.classList.add("scattered-image");

            let validPosition = false;
            let attempts = 0;
            let randomRow, randomCol;

            while (!validPosition && attempts < 100) {
                attempts++;

                randomRow = Math.floor(Math.random() * gridRows);
                randomCol = Math.floor(Math.random() * gridCols);
                let positionKey = `${randomRow}-${randomCol}`;

                if (!placedPositions.has(positionKey)) {
                    placedPositions.add(positionKey);
                    validPosition = true;
                }
            }

            let randomTop = randomRow * cellHeight + Math.random() * (cellHeight * 0.5);
            let randomLeft = randomCol * cellWidth + Math.random() * (cellWidth * 0.5);
            let topPixels = window.innerHeight * (randomTop / 100);
            let leftPixels = window.innerWidth * (randomLeft / 100);

            // Ensure it doesn't overlap the envelope
            let overlapsEnvelope = (
                topPixels + imgSize > envelopeRect.top &&
                topPixels < envelopeRect.bottom &&
                leftPixels + imgSize > envelopeRect.left &&
                leftPixels < envelopeRect.right
            );

            if (overlapsEnvelope) return;

            img.style.position = "absolute";
            img.style.top = randomTop + "%";
            img.style.left = randomLeft + "%";
            img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

            container.appendChild(img);
        }

        imagePaths.forEach((src) => placeImage(src));
    }

    createScatteredImages();
});


