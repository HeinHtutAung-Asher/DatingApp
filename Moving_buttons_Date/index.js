const yesbtn = document.getElementById("yes");
const heading = document.getElementById("head");
const envelope = document.getElementById("envelope");
const heart = document.querySelector('.heart');

function fn() {
    heading.innerHTML = "Yay! 🎉 Can't wait!";
    envelope.style.display = "block";  // Show the envelope when clicking "Yes"

    // Add a class to animate the envelope
    envelope.classList.add("flap");

    // Trigger heart rotation and envelope opening
    heart.classList.add("rotate-heart");
}

function fx(){
    const btn = document.getElementById('no');
    const x = Math.floor(Math.random() * 300); // Adjust position within the box
    const y = Math.floor(Math.random() * 300);
    btn.style.position = "absolute";  // Ensure positioning works
    btn.style.top = x + "px";
    btn.style.left = y + "px";
}