const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Board Object
const Board = function() {
  this.id = function() {
    return Date.now();
  }
  this.width = 3,
  this.length = 3,
  this.values = {
    0: {0: " ", 1: " ", 2: " "},
    1: {0: " ", 1: " ", 2: " "},
    2: {0: " ", 1: " ", 2: " "},
  }
}

// Game Object
const Game = function() {
  this.players = [
    {id: 1, symbol: "X", moveset: []},
    {id: 2, symbol: "O", moveset: []}
  ];

  this.board = new Board();

  this.start = function(player_id) {
    const player = this.players[player_id - 1];

    // Modify this part when front end framework has been determined
    rl.question(`Player ${player.id} move (input Y, X): `, (move) => {
      // check regex here
      const p = move.split(",").map(Number);
      // need to check whether the slot has been filled, if not, then ask user to input again
      player.moveset.push(p); // also add that into the log if it fails?
      this.board.values[p[0]][p[1]] = player.symbol;
      console.log(this.board.values); // show the result on board
      // that moment when you hit two birds with one stone:
      // 1. make the front end agnostic by sending over JSON
      // 2. you don't need to draw the board again in console, just print the JSON haha

      if (this.is_completed()) {
        console.log(`Player ${player.id} wins!`); // yayy
        console.log(`Movesets: ${player.moveset}`); // inspired from chess
        rl.close();
      } else {
        if (player.id === 1) {
          this.start(2); // recurse, because while-loop wreck JS since it's asynchronous
        } else {
          this.start(1); // and also, it's a pun to the RC name
        }
      }
    })
  }
  this.is_completed = function() {
    const b = this.board.values;
    const pattern = [ // Y, X
      // This way if the board get bigger (5x5?) you can just automatically generate the pattern and add it here
      // Horizontal
      b[0][0] === b[0][1] && b[0][0] === b[0][2] && b[0][0] !== " ",
      b[1][0] === b[1][1] && b[1][0] === b[1][2] && b[1][0] !== " ",
      b[2][0] === b[2][1] && b[2][0] === b[2][2] && b[2][0] !== " ",
      // Vertical
      b[0][0] === b[1][0] && b[0][0] === b[2][0] && b[0][0] !== " ",
      b[0][1] === b[1][1] && b[0][1] === b[2][1] && b[0][1] !== " ",
      b[0][2] === b[1][2] && b[0][2] === b[2][2] && b[0][2] !== " ",
      // Diagonal
      b[0][0] === b[1][1] && b[0][0] === b[2][2] && b[0][0] !== " ",
      b[0][2] === b[1][1] && b[0][2] === b[2][0] && b[0][2] !== " "
    ];

    for (i = 0; i < pattern.length; i++) {
      if (pattern[i] === true) {
        // If any of the pattern match and returns true, then the game is over
        return true;
      }
    }

    return false; // else continue playing
  }
  this.created_at = new Date(); // for book keeping
}

const tic_tac_toe = new Game();

console.log(tic_tac_toe.board.values); // show the board the first time

tic_tac_toe.start(1); // start with player 1