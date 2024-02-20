document.addEventListener("DOMContentLoaded", function () {
  const character1 = document.getElementById("character1");
  const character2 = document.getElementById("character2");
  const speed = 3; // Adjust this value to change the speed of movement
  const initialPosition = 630; // Initial position of characters
  const boat = document.getElementById("boat");

  // Distance threshold for starting boat animation
  const distanceThreshold = 450; // Adjust as needed
  let isBoatAnimationStarted = false;

  // Arrays containing dialogues for each character
  const dialoguesCharacter1 = ["welcome mate! I am Joy ", "Glad! we choose beach for our trip!"];
  const dialoguesCharacter2 = ["Hey! Your name gives me the vibe of joy during this learning journey", "yes, the beach is so wavey Today."];

  let currentDialogueIndex = 0; // Index to keep track of current dialogue

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
      showSpeechBubbles(); // Call function to show speech bubbles
  });

  // Function to show speech bubbles
  function showSpeechBubbles() {
      // Show speech bubble 1
      const speechBubble1 = document.querySelector(".speech-bubble1");
      speechBubble1.style.display = "block";

      // Typed.js for character 1 speech bubble
      new Typed('.char-1-speech', {
          strings: [dialoguesCharacter1[currentDialogueIndex]],
          typeSpeed: 85,
          onComplete: function () {
              // Delay before hiding speech bubble 1
              setTimeout(function () {
                  speechBubble1.style.display = "none";

                  // Show speech bubble 2
                  const speechBubble2 = document.querySelector(".speech-bubble2");
                  speechBubble2.style.display = "block";

                  // Typed.js for character 2 speech bubble
                  new Typed('.char-2-speech', {
                      strings: [dialoguesCharacter2[currentDialogueIndex]],
                      typeSpeed: 85,
                      onComplete: function () {
                          // Delay before hiding speech bubble 2
                          setTimeout(function () {
                              speechBubble2.style.display = "none";

                              // Increment dialogue index
                              currentDialogueIndex++;

                              // Check if reached end of dialogues, stop if needed
                              if (currentDialogueIndex < dialoguesCharacter1.length) {
                                  // Call showSpeechBubbles again for next dialogue after a delay
                                  setTimeout(showSpeechBubbles, 2000); // Adjust delay as needed
                              }
                          }, 2000); // Delay before hiding speech bubble 2
                      }
                  });
              }, 2000); // Delay before hiding speech bubble 1
          }
      });
  }
});
