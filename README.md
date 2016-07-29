# Recurse Center Code Submission: Tic Tac Toe

In an attempt to simulate user input since the program is written in JavaScript without accompanying HTML page (thus, no event triggers), node.js readline package is used instead. This is also done in part to keep the front end agnostic from the back end, thus a JSON document can be generated and sent to the client instead by calling `tic_tac_toe.board`

## What works

- [x] Basic game mechanism
  * 2 players (`Player 1: "X"`, and `Player 2: "O"`)
  * Movesets recording to log players history
  * Pattern matching for winning conditions
- [x] Front end agnostic: implement your own front end solution!
- [x] API:
  * Get the board data in JSON with `objectName.board`
  * Get player data with `objectName.players`

## Future Works

- [ ] Proper failsafes for every basic error conditions (e.g. regex)
- [ ] Multiplayers?
- [ ] Ability to set your name and your own symbol (e.g. what if I like &?)
- [ ] Persistent storage
- [ ] Larger boards (5x5) or even-numbered boards (4x4)
- [ ] Alternative mode where players play to conquer area (like, 3 symbols in a row means a point, it's like how othello or go works)
- [ ] Automated winning patterns generation
- [ ] Do something with the board id? Make a list of highscore? But this is tic tac toe and there's nothing exciting about it since it's ultimately a zero-sum game if both players are sane enough. Have to wait till more modes are released to do this
- [ ] AI to fight challenger