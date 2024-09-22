const words = ["Elegance", "Minimalism", "Comfort"];
let wordIndex = 0;
const changingWord = document.getElementById("changing-word");

setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    changingWord.textContent = words[wordIndex];
}, 3000);
