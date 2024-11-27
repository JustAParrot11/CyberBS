document.addEventListener('DOMContentLoaded', () => {
  const typingTextElement = document.getElementById('typing-text');
  const bullshitTextElement = document.getElementById('bullshit-text');
  const blackSquareElement = document.querySelector('.black-square');

  // Create left and right halves for the split effect
  const leftHalf = document.createElement('div');
  const rightHalf = document.createElement('div');
  
  // Add left and right halves as children of the black square
  leftHalf.classList.add('left-half');
  rightHalf.classList.add('right-half');
  
  blackSquareElement.appendChild(leftHalf);
  blackSquareElement.appendChild(rightHalf);

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
      typeText(bullshitTextElement, bullshitText, () => {
        // After the second text is typed, wait 2 seconds and then trigger the split
        setTimeout(() => {
          // Add classes to trigger the split animation
          blackSquareElement.classList.add('split');

          // Wait for the animation to finish (after 1s), then remove the black square from the DOM
          setTimeout(() => {
            blackSquareElement.remove(); // Remove the black square after the animation
          }, 1000); // 1000ms = duration of the split animation
        }, 2000); // Wait another 2 seconds before splitting
      });
    }, 2000); // 2000ms = 2 seconds delay after the first text
  });
});
