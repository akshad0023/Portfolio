// Typing Effect for Name
const nameText = "Akshad Kheratkar";
const typedNameElement = document.getElementById("typing-name");
let nameIndex = 0;

function typeNameEffect() {
  if (nameIndex < nameText.length) {
    typedNameElement.textContent += nameText[nameIndex];
    nameIndex++;
    setTimeout(typeNameEffect, 100); // Adjust typing speed
  } else {
    setTimeout(() => {
      nameIndex = 0;
      typedNameElement.textContent = ""; // Clear the text for repeat
      typeNameEffect();
    }, 2000); // Pause before restarting
  }
}

typeNameEffect();

// Typing Effect for Hello Message
const messageText = "Hello!";
const typingMessageElement = document.getElementById("typing-message");
let messageIndex = 0;

function typeMessageEffect() {
  if (messageIndex < messageText.length) {
    typingMessageElement.textContent += messageText[messageIndex];
    messageIndex++;
    setTimeout(typeMessageEffect, 100); // Adjust typing speed
  } else {
    setTimeout(() => {
      messageIndex = 0;
      typingMessageElement.textContent = ""; // Clear the text for repeat
      typeMessageEffect();
    }, 2000); // Pause before restarting
  }
}

typeMessageEffect();


particlesJS('particles-js', {
  particles: {
    number: {
      value: 100, // Adjust the number of particles
    },
    color: {
      value: "#333", // Particle color
    },
    shape: {
      type: "triangle", // Other options: "edge", "triangle", "polygon"
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 5,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#333",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
    },
  },
});
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  });
});
