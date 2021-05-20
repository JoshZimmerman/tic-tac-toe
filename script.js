const gameBoard = (function () {
  let board = ['','','',
               '','','',
               '','','']
  //console.log(gameState);
  function getBoard() {
    return board;
  }

  function resetBoard() {
    board = board.map(square => square = '');
  }

  function setSquare(mark, index) {
    board[index] = mark;
  }

  function getSquare(index) {
    if (index > board.length) {
      return;
    }
    return board[index];
  }

  return {
    getBoard,
    setSquare,
    resetBoard,
    getSquare
  }
})();

const Player = (sign) => {

  let playerSign = sign;

  const getSign = () => {
    return playerSign;
  }

  return { 
    getSign 
  }
}

const displayController = (function () {
  //methods here should only be concerned with updating visuals on DOM elements

  //cache DOM
  const gridDiv = document.querySelector(".game-board");
  const gridSquares = document.querySelectorAll(".square");
  const message = document.querySelector("#message");
  console.log(gridSquares);

  function setSquares() {
    gridSquares.forEach( square => {square.addEventListener ('click', function(e) {
      console.log(`Square ${e.target.dataset.index} was clicked!`);
      //call private function to update square with players mark to gameState
      gameController.playRound(`${e.target.dataset.index}`);
      //array and rerender gameboard
      });
    });
  }

  
  const render = function(board) {
    for(let i=0; i<board.length; i++) {
      gridSquares.item(i).textContent = board[i]
    }
  }

  const setMessage = (str) => {
    message.textContent = str;
  }

  setSquares();

  return {
    gridSquares,
    setMessage,
    render
  }
})();

const gameController = (function () {
  //move all event set up procedures into gameController module
  const player1 = Player('X');
  const player2 = Player('O');

  let player1Turn = true;

  function toggleTurn() {
    player1Turn ? player1Turn = false : player1Turn = true;
  }

  const playRound = (index) => {
    console.log(index)
  }

  return {
    playRound
  }
  
  //Might need to merge display and event controllers if too much code
  //is duplicated or shared in global
})();

//gameController.setSquares();