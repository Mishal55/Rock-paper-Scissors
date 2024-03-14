"use strict";
//IF ELSE STATEMENT USING ROCK PAPER SCISSORS GAME
Object.defineProperty(exports, "__esModule", { value: true });
let player1 = "rock";
let player2 = "scissors";
if (player1 === player2) {
    console.log("its a tie");
}
else if ((player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")) {
    console.log("player1 win this match");
}
else {
    console.log("player2 win this match sucessfully");
}
