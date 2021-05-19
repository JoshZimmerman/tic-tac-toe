const gameBoard = (function () {
  let board = ['','','',
               '','','',
               '','','']
  //console.log(gameState);
  const getBoard = () => {
    return board;
  };
  const resetBoard = () => {
    board = board.map(square => square = '');
    console.log(board);
  }
  const setSquare = (mark, index) => {
    board[index] = mark;
    console.log(board);
    displayController.render(board);
  }

  return {
    getBoard,
    setSquare,
    resetBoard
  }
})();

const Player = (sign) => {
  let playerSign = sign;



}
const displayController = (function () {
  //methods here should only be concerned with updating visuals on DOM elements

  //cache DOM
  const gridDiv = document.querySelector(".game-board");
  let gridSquares = document.querySelectorAll(".square");
  console.log(gridSquares);

  const render = function(board) {
    for(let i=0; i<board.length; i++) {
      gridSquares.item(i).textContent = board[i]
    }
  }

  return {
    gridSquares,
    render
  }
})();

const eventController = (function () {
  //move all event set up procedures into eventController module

  function setSquares() {
    displayController.gridSquares.forEach( square => {square.addEventListener ('click', function(e) {
      console.log(`Square ${e.target.dataset.index} was clicked!`);
      //call private function to update square with players mark to gameState
      //array and rerender gameboard
      });
    });
  }

  setSquares();
  //Might need to merge display and event controllers if too much code
  //is duplicated or shared in global
})();

//eventController.setSquares();