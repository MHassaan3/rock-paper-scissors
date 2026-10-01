# Rock Paper Scissors

A simple Rock Paper Scissors game built with only JavaScript as part of **The Odin Project Foundations** course.

## About

This project is a console-based Rock Paper Scissors game where the player competes against the computer.

The game consists of **5 valid rounds**. The player chooses Rock, Paper, or Scissors, and the computer randomly selects its choice.

The scores are tracked throughout the game, and the final winner is displayed after 5 rounds.

## Features

* Player can choose Rock, Paper, or Scissors.
* Player can enter choices using either:

  * `rock`, `paper`, `scissor`
  * `1`, `2`, `3`
* Computer randomly chooses Rock, Paper, or Scissors.
* Invalid choices are handled without counting them as a round.
* Player and computer scores are tracked.
* The game runs for 5 valid rounds.
* Final match result is displayed in the console.
* Tie games are supported.

## How to Play

1. Open the project in your browser.
2. Open the browser's Developer Console.
3. Enter your choice when prompted:

   * `1` or `rock`
   * `2` or `paper`
   * `3` or `scissor`
4. The computer will randomly select its choice.
5. The result of each round will appear in the console.
6. After 5 valid rounds, the final match result will be displayed.

## Technologies Used

* JavaScript

## What I Practiced

Through this project, I practiced:

* JavaScript functions
* Variables and scope
* `if...else` statements
* `for` loops
* User input with `prompt()`
* Random numbers with `Math.random()`
* String methods such as `toLowerCase()` and `trim()`
* Template literals
* Function parameters and return values
* Updating variables and keeping track of scores

## Project Structure

```text
rock-paper-scissors/
├── index.html
├── script.js
└── README.md
```

## Future Improvements

Some possible improvements for the project:

* Add a graphical user interface.
* Add buttons instead of using `prompt()`.
* Display the score directly on the webpage.
* Add animations and better styling.
* Add a reset/restart button.

## Acknowledgements

This project was created as part of **The Odin Project Foundations** curriculum.

https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
