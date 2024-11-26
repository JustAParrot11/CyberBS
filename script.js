const text = "Welcome to CyberBS";
const text = "... No BullSh*t";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust speed here
  }
}

// Start the typing effect when the page loads
window.onload = typeText;
