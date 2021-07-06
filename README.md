# rock-paper-scissors-lizard-spock
Based on 'The Big Bang Theory', this simple web-app allows users to play Rock, Paper, Scissors, Lizard, Spock with a computer. The app tracks user and computer wins, throws confetti whenever the user wins, and resets the game with the click of a button.

https://jsmitthimedhin.github.io/rock-paper-scissors-lizard-spock/

# Process

The web-app is developed using HTML, CSS, and Vanilla JS. The logic of the game is included in the JS file as objects with different indexes, which then allows me to track whether the user wins/loses based on simple addition/subtraction of indexes. The computer selection is done using an extended Math.random function. The confetti used is imported from this github repo: https://github.com/catdad/canvas-confetti. Updating the numbers, selection, etc. are all done using document-object functions that change the HTML elements and/or styling of said elements.
