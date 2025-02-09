const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const heading = document.getElementById("head");
const box = document.querySelector(".box");

function openEnvelopePage() {
    window.location.href = "envelope.html";  // Redirect to envelope.html in the same folder
}

document.getElementById("yes").addEventListener("click", openEnvelopePage);




noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const boxRect = box.getBoundingClientRect();
    const padding = 50; // Distance from the box
    const maxX = 500;
    const maxY = 300;

    let x, y;
    do {
        x = Math.random() * maxX;
        y = Math.random() * maxY;
    } while (
        x > boxRect.left - padding && x < boxRect.right + padding &&
        y > boxRect.top - padding && y < boxRect.bottom + padding
    );

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
