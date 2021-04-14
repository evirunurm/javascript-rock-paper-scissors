
let scorePlayer = 0;
let scoreComputer = 0;

game();
// let resultRound = playRound(playerSelection, computerSelection);

//Input Player --> playerSelection

// function playerPlay() {
//   if (playerInput === undefined || playerInput === "" || playerInput === null) {
//     ('Write a valid answer!')
//     playerPlay();
//   } else if (playerInput.toLowerCase() == "rock" || playerInput.toLowerCase() == "scissors" || playerInput.toLowerCase() == "paper") {
//       return playerInput.toLowerCase();
//   } else {
//     console.log('Check your grammar or write a valid answer!')
//     playerPlay();
//   }
// }

//Generate Random number --> computerSelection

function computerPlay() {
  let randomNumber = parseInt(3 * Math.random(Number));
  switch (randomNumber) {
    case 0:
      return 'rock';
    break;
    case 1:
      return 'paper';
    break;
    case 2:
      return 'scissors';
  }
}

//COMPARE : playerSelection vs computerSelection
//  If playerSelection(case-insensitive) == computerSelection --> TIE. Nothing.
//  If playerSelection(case-insensitive) is ROCK and
//        == computerSelection = SCISSORS --> scorePlayer +1
//        == computerSelection = PAPER --> scoreComputer +1

//  If playerSelection(case-insensitive) is SCISSORS and
//        == computerSelection = ROCK --> scoreComputer +1
//        == computerSelection = PAPER --> scorePlayer +1

//  If playerSelection(case-insensitive) is PAPER and
//        == computerSelection = SCISSORS --> scoreComputer +1
//        == computerSelection = ROCK --> scorePlayer +1

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection.toLowerCase() == "scissors") {
        scorePlayer++;
        console.log("Well done!");
      } else if (computerSelection.toLowerCase() == "paper") {
        scoreComputer++;
        console.log("Oh oh! The machine is winning!");
      } else if(computerSelection.toLowerCase() == "rock") {
        console.log("Uhhh... A tie!");
      }
      break;
    case "scissors":
      if (computerSelection.toLowerCase() == "rock") {
        scoreComputer++;
        console.log("Oh oh! The machine is winning!");
      } else if (computerSelection.toLowerCase() == "paper") {
        scorePlayer++;
        console.log("Well done!");
      } else if (computerSelection.toLowerCase() == "scissors") {
        console.log("Uhhh... A tie!");
      }
      break;
    case "paper":
      if (computerSelection.toLowerCase() == "scissors") {
        scoreComputer++;
        console.log("Oh oh! The machine is winning!");
      } else if (computerSelection.toLowerCase() == "rock") {
        scorePlayer++;
        console.log("Well done!");
      } else if (computerSelection.toLowerCase() == "paper") {
        console.log("Uhhh... A tie!");
      }
      break;
  }
  return [scorePlayer, scoreComputer];
}

//Total of 5 times.
//After 5 rounds --> COMPARE : scoreComputer vs scorePlayer.
//If scoreComputer < scorePlayer --> Player wins, else Computer wins.

function game() {
  while (scorePlayer < 5 && scoreComputer < 5) {
    let playerInput =  prompt('Rock, paper or scissors?');

    if (playerInput === undefined || playerInput === "" || playerInput === null) {
      console.log('Write a valid answer!');

    } else if (playerInput.toLowerCase() == "rock" || playerInput.toLowerCase() == "scissors" || playerInput.toLowerCase() == "paper") {
      let playerSelection = playerInput.toLowerCase();
      let computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
      console.log(`You : ` + scorePlayer + `   ` + `Computer : ` + scoreComputer)
    } else {
      console.log('Check your grammar or write a valid answer!')
    }
  }
    if (scorePlayer == 5) {
      console.log(`You've won the machine!! :D`)
    } else if (scoreComputer == 5) {
      console.log(`You've lost!! D:`)
    } else {
      console.log(`Something went wrong... I'm sorry:((`)
    }
}
