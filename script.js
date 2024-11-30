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
    }, 1500); // 1500ms = 1.5 seconds delay after the first text
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slidingBox = document.querySelector('.sliding-box');
  const slidingText = document.querySelector('.sliding-text');
  const text = `Welcome to CyberBS!

Thank you for visiting our platform, dedicated to providing you with essential insights and tools to protect your digital world. In today's fast-paced online environment, understanding the latest in cybersecurity is more important than ever, and this website make sure you're equipped with the resources to stay secure.

On our website, you'll find a wealth of information on key cybersecurity concepts, with clear and detailed explanations designed for users of all levels. Whether you're new to cybersecurity or an experienced professional, our easy-to-navigate guides will help you better understand the threats we face and the best practices for defending against them.

In addition to the knowledge base, we're excited to offer a free virus and URL analysis tool. This powerful tool allows you to check suspicious links and files, giving you an extra layer of security before you click or download.

Thank you for visiting us, and we hope you find the information and tools here helpful in your journey toward safer online practices. Stay secure, stay informed!`;
  let index = 0;

  // Typing effect for the sliding box
  function typeSlidingText() {
    if (index < text.length) {
      slidingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeSlidingText, 0.01); // Adjust typing speed here
    }
  }

  // Wait 7 seconds before triggering the animation
  setTimeout(() => {
    slidingBox.classList.add('visible'); // Add the class to trigger the animation
    typeSlidingText(); // Start typing the text
  }, 8000); // 8000ms = 8 seconds
});
