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

    function createFloatingImages() {
        const container = document.querySelector(".floating-images");

        if (!container) {
            console.error("Error: Missing floating-images container!");
            return;
        }

        const gridRows = 4; 
        const gridCols = 5;
        const cellWidth = 100 / gridCols;
        const cellHeight = 100 / gridRows;
        let usedPositions = new Set();

        function getRandomGridPosition() {
            let row, col, key, attempts = 0;

            do {
                row = Math.floor(Math.random() * gridRows);
                col = Math.floor(Math.random() * gridCols);
                key = `${row}-${col}`;
                attempts++;
            } while (usedPositions.has(key) && attempts < 50);

            usedPositions.add(key);
            return { top: row * cellHeight, left: col * cellWidth };
        }

        imagePaths.forEach((src, index) => {
            let img = document.createElement("img");
            img.src = src;
            img.classList.add("scattered-image");

            let { top, left } = getRandomGridPosition();
            let randomDelay = Math.random() * 5; // Random delay for smoother animation

            img.style.top = top + "%";
            img.style.left = left + "%";
            img.style.animationDelay = randomDelay + "s";

            img.addEventListener("animationiteration", () => {
                let { top, left } = getRandomGridPosition();
                img.style.top = top + "%";
                img.style.left = left + "%";
            });

            container.appendChild(img);
        });
    }

    createFloatingImages();
});



