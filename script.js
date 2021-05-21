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
  const resetButton = document.querySelector('.reset');
  console.log(gridSquares);

  function init() {
    gridSquares.forEach( square => {square.addEventListener ('click', function(e) {
      console.log(`Square ${e.target.dataset.index} was clicked!`);
      if (gameController.getGameOver() || e.target.textContent !== "") {
        return;
      } else {
      //call private function to update square with players mark to gameState
        gameController.playRound(`${e.target.dataset.index}`);
      }
      //array and rerender gameboard
      });
    });
    resetButton.addEventListener('click', function() {
      console.log("Game Reset");
      gameController.resetGame();
    });
  }

  const indicateTurn = (turn) => {
    if (turn) {
      setMessage("Player 1's Turn");
    } else {
      setMessage("Player 2's Turn");
    }
  }
  
  const render = function(board) {
    for(let i=0; i<board.length; i++) {
      gridSquares.item(i).textContent = board[i]
    }
  }

  const setMessage = (str) => {
    message.textContent = str;
  }


  init();

  return {
    gridSquares,
    setMessage,
    render,
    indicateTurn
  }
})();

const gameController = (function () {
  //move all event set up procedures into gameController module
  const player1 = Player('X');
  const player2 = Player('O');

  let player1Turn = true;
  let gameOver = false;

  function toggleTurn() {
    player1Turn ? player1Turn = false : player1Turn = true;
  }

  const getCurrentPlayerSign = (player1Turn) => {
    return player1Turn ? player1.getSign() : player2.getSign();
  }
  
  const checkVictory = (index) => {
    const winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 9],
      [2, 4, 6],
    ];
    
    return winningStates.filter((combo) => combo.includes(parseInt(index)))
                        .some((posCombo) => posCombo.every(
                            (index) => gameBoard.getSquare(index) === getCurrentPlayerSign(player1Turn)
                        )
                      );
  }

  const isPlayerSign = (sign) => {
    return (sign == player1.getSign() || sign == player2.getSign)
  }

  const getGameOver = () => {
    return gameOver;
  }

  const resetGame = () => {
    gameOver = false;
    player1Turn = true;
    gameBoard.resetBoard();
    displayController.render(gameBoard.getBoard());
    displayController.indicateTurn(player1Turn)
  }

  const playRound = (index) => {
    gameBoard.setSquare(getCurrentPlayerSign(player1Turn), index);
    displayController.render(gameBoard.getBoard());
    console.log(gameBoard.getBoard())
    if (checkVictory(index))  {
      displayController.setMessage(`Player ${getCurrentPlayerSign(player1Turn)} Wins!`)
      gameOver = true;
      return;
    } else if (gameBoard.getBoard().every(item => (item !== ''))) {
      displayController.setMessage("It's a Draw.")
      gameOver = true;
      return;
    } else {
      toggleTurn();
      displayController.indicateTurn(player1Turn);
    }
  }


  return {
    playRound,
    getGameOver,
    resetGame
  }
  
  //Might need to merge display and event controllers if too much code
  //is duplicated or shared in global
})();

//gameController.setSquares();