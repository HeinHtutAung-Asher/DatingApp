const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const heading = document.getElementById("head");

yesBtn.addEventListener("click", () => {
    heading.innerHTML = "Yay! 🎉 Can't wait!";
});

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
