const antiScroll = ["Paint something", 
                    "Slow-motion fight!", 
                    "The floor is lava!", 
                    "In turns, drip water into a cup, loser makes it spill",
                    "Paper airplane contest",
                    "Learn a magic trick",
                    "Draw a quick sketch of each other",
                    "Staring contest!",
                    "Hold your breathe contest!",
                    'Voice your inner monologues for a minute',
                    "Build a fort",
                    "Go into seperate rooms, change something about your outfit and come back, see if you can tell what changed",
                    "Make a short video together",
                    "Make a list of things you want to do together",
                    ]

const conversationDice = ["What's your favorite memory with each other?",
                          "Share a fun fact about each other",
                          "What is something you have never told each other?",
                          "What is your biggest goal right now?",
                          "Share a favorite memory",
                          "Share something that is going well for yourselves",
                        ]

let characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]

let previousRoll = null;

function roll(die) {
  let finalRoll;
  let dieType;
  let resultElement;

  if (die === "antiScroll") {
    finalRoll = Math.floor(Math.random() * antiScroll.length);
    dieType = antiScroll;
    resultElement = document.getElementById("antiScrollResult");
  } else if (die === "conversation") {
    finalRoll = Math.floor(Math.random() * conversationDice.length);
    dieType = conversationDice;
    resultElement = document.getElementById("conversationRoll");
  }

  // ensure it's not the same as previous
  while (finalRoll === previousRoll && dieType.length > 1) {
    finalRoll = Math.floor(Math.random() * dieType.length);
  }

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?$%";
  
  let iterations = 0;
  const scrambleTime = 1500; // total time in ms
  const interval = 50; // how fast text changes
  const steps = scrambleTime / interval;

  const scramble = setInterval(() => {
    // scramble text with random characters
    let scrambled = "";
    const targetLength = dieType[finalRoll].length;
    for (let i = 0; i < targetLength; i++) {
      scrambled += characters[Math.floor(Math.random() * characters.length)];
    }
    resultElement.textContent = scrambled;

    iterations++;
    if (iterations > steps) {
      clearInterval(scramble);
      resultElement.textContent = dieType[finalRoll]; // reveal final
      previousRoll = finalRoll;
    }
  }, interval);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("antiScrollButton").addEventListener("click", () => roll("antiScroll"));
  document.getElementById("conversationButton").addEventListener("click", () => roll("conversation"));
  
});