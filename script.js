const gameBoard = (function () {
  let gameState = []

})();

const displayController = (function () {
  //methods here should only be concerned with updating visuals on DOM elements

  //cache DOM
  const gridDiv = document.querySelector(".game-board");
  let gridSquares = gridDiv.childNodes;

  return {
    gridSquares:gridSquares,
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