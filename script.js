document.addEventListener('DOMContentLoaded', () => {
  const typingTextElement = document.getElementById('typing-text');
  const bullshitTextElement = document.getElementById('bullshit-text');

  // Texts to be typed
  const welcomeText = 'Welcome to CyberBS';
  const bullshitText = '...Not BullSh*t';

  // Typing effect function
  function typeText(element, text, callback) {
    let index = 0;
    const typingSpeed = 75; // Speed of typing (ms per character)

    const typingInterval = setInterval(() => {
      element.textContent += text.charAt(index);
      index++;

      if (index === text.length) {
        clearInterval(typingInterval);
        if (callback) callback(); // Call the callback after typing is complete
      }
    }, typingSpeed);
  }

  // Start typing the first text (Welcome to CyberBS)
  typeText(typingTextElement, welcomeText, () => {
    // After the first text is done, start the second text after a 2-second delay
    setTimeout(() => {
      typeText(bullshitTextElement, bullshitText);
    }, 2000); // 2000ms = 2 seconds delay
  });
});
