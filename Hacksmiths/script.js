document.addEventListener("DOMContentLoaded", function () {
  const character1 = document.getElementById("character1");
  const character2 = document.getElementById("character2");
  const speed = 3; // Adjust this value to change the speed of movement
  const initialPosition = 630; // Initial position of characters
  const boat = document.getElementById("boat");

  // Distance threshold for starting boat animation
  const distanceThreshold = 450; // Adjust as needed
  let isBoatAnimationStarted = false;

  // Function to move character up
  function moveUp(character) {
    let currentPosition = parseInt(character.style.top) || initialPosition;
    let newPosition = currentPosition - speed;
    if (newPosition >= 0) {
      character.style.top = newPosition + "px";
      // Check if characters have moved up past the distance threshold
      if (!isBoatAnimationStarted && newPosition <= distanceThreshold) {
        startBoatAnimation();
      }
    }
  }

  // Function to move character down
  function moveDown(character) {
    let currentPosition = parseInt(character.style.top) || initialPosition;
    let newPosition = currentPosition + speed;
    let containerHeight =
      document.documentElement.clientHeight - character.clientHeight;
    if (newPosition <= containerHeight) {
      character.style.top = newPosition + "px";
    }
  }

  // Function to start boat circle animation
  function startBoatAnimation() {
    // Add CSS animation class to the boat
    boat.classList.add("boat-circle-animation");
    isBoatAnimationStarted = true;
  }

  // Event listener for arrow key presses
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      moveUp(character1);
      moveUp(character2);
    } else if (event.key === "ArrowDown") {
      moveDown(character1);
      moveDown(character2);
    }
  });

  // start screen
  document.getElementById("startButton").addEventListener("click", function () {
    document.querySelector(".start-screen").style.display = "none"; // Hide the start screen
    document.querySelector(".container").style.display = "block"; // Show the game container
    // Show speech bubbles after start button clicked
    showSpeechBubblesWithDelay(); // Call function to show speech bubbles with delay
  });

  // Function to show speech bubbles with a delay
  function showSpeechBubblesWithDelay() {
    setTimeout(showSpeechBubbles, 3000); // Adjust delay time as needed (3000 milliseconds = 3 seconds)
  }

  // Function to show speech bubbles with animated text for character 1
  function showSpeechBubbles() {
    // Show speech bubble 1
    const speechBubble1 = document.querySelector(".speech-bubble1");
    speechBubble1.style.display = "block";

    // Initialize Typed.js for character 1 speech bubble
    let typed1 = new Typed(".char-1-speech", {
      strings: ["Glad! we choose beach for our trip!", "hey! Can you see that boat"],
      typeSpeed: 150,
      backSpeed: 0,
      onComplete: function () {
        // Hide speech bubble 1 after character 1 is done talking
        speechBubble1.style.display = "none";
        // Start showing speech bubble 2 after a delay
        setTimeout(showSecondSpeechBubble, 500); // Adjust delay as needed
      }
    });
  }

  // Function to show the second speech bubble and hide it after a certain duration
  function showSecondSpeechBubble() {
    // Show speech bubble 2
    const speechBubble2 = document.querySelector(".speech-bubble2");
    speechBubble2.style.display = "block";

    // Initialize Typed.js for character 2 speech bubble
    let typed2 = new Typed(".char-2-speech", {
      strings: [" yes, the beach is so wavy today.", "yes, it is turning again and again in infinite circles."],
      typeSpeed: 150,
      backSpeed: 0,
      onComplete: function () {
        // Hide speech bubble 2 after character 2 is done talking
        speechBubble2.style.display = "none";
        // Start showing speech bubble 1 again after a delay
        setTimeout(showSpeechBubbles, 500); // Adjust delay as needed
      }
    });
  }
});
