const changingText = document.querySelector('.changing-text');
const words = ['Logistic', 'Expedition'];
let wordIndex = 0; 

setInterval(() => {
  changingText.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length; // Cycle through the words
}, 2000); // Change every 2000 milliseconds (2 seconds)
