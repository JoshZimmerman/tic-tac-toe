const gameBoard = (function () {
  let gameState = []

})();

const displayController = (function () {
  //cache DOM
  const gridDiv = document.querySelector(".game-board");
  let gridSquares = gridDiv.childNodes;

  function setEvents() {
    gridSquares.forEach( square => {square.addEventListener ('click', function(e) {
      console.log(`Square ${e.target.dataset.index} was clicked!`);
      });
    });
  }

  return {
    setEvents: setEvents
  };
})();

displayController.setEvents();