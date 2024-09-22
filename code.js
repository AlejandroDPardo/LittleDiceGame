// <!-- My name is Alejandro Altuve, 9/21/24 -->
// Function to play background music
// This function accesses the <audio> element with ID 'gameMusic' and plays the music.
function playMusic() {
    const music = document.getElementById('gameMusic'); // Get the audio element by its ID
    music.play(); // Play the audio file (music starts playing)
}

// Function to simulate rolling two dice and checking the result
// This function generates two random numbers between 1 and 6 (simulating dice rolls), calculates their sum,
// and then determines if the player wins, loses, or pushes based on game rules.
function playGame() {
    playMusic(); // Call the playMusic function to start background music when the game is played

    // Generate a random number between 1 and 6 for the first die
    let die1 = Math.floor(Math.random() * 6) + 1;

    // Generate a random number between 1 and 6 for the second die
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the two dice
    let sum = die1 + die2;

    // Variable to store the result message that will be shown to the user
    let resultText = "You rolled: " + die1 + " and " + die2 + ". Sum: " + sum + ". ";

    // Check game rules for win/lose conditions
    if (sum === 7 || sum === 11) {
        resultText += "CRAPS – you lose!"; // If the sum is 7 or 11, the player loses
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultText += "You won!"; // If both dice have the same even number (doubles), the player wins
    } else {
        resultText += "You pushed!"; // For any other result, the game is a "push"
    }

    // Display the result in the HTML element with ID 'result'
    document.getElementById("result").innerHTML = resultText; // Output the result to the page
}

// New function that takes a player's input and uses it in the game logic
// This function accepts a number (player's guess for dice sum) as a parameter and compares it to the actual dice sum.
function guessGame(playerGuess) {
    // Generate a random number between 1 and 6 for the first die
    let die1 = Math.floor(Math.random() * 6) + 1;

    // Generate a random number between 1 and 6 for the second die
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the two dice
    let sum = die1 + die2;

    // Variable to store the result message for the player's guess
    let guessResultText = "You rolled: " + die1 + " and " + die2 + ". Sum: " + sum + ". ";

    // Compare player's guess to the actual sum
    if (playerGuess === sum) {
        guessResultText += "Correct! You guessed the sum!"; // Player guessed correctly
    } else {
        guessResultText += "Incorrect! The actual sum was " + sum + "."; // Player guessed incorrectly
    }

    // Display the result in the HTML element with ID 'result'
    document.getElementById("result").innerHTML = guessResultText; // Output the result to the page
}
