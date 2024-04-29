import React, { useState } from "react";
import "../styles/game-board.scss";
import ScoreCard from "./ScoreCard.jsx";
import CurrentTurn from "./CurrentTurn.jsx";
import MenuModal from "./MenuModal.jsx";
import Board from "./Board.jsx";

function GameBoard({
  marker,
  showColumnMarker,
  clickCell,
  clickRestart,
  playerOneScore,
  playerTwoScore,
  countdown,
  columnToShow,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [piecePositions, setPiecePositions] = useState([]);
  const [currentTurnColor, setCurrentTurnColor] = useState("red");
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [redMoves, setRedMoves] = useState([6, 30, 5, 22, 4, 9, 3]);
  const [yellowMoves, setYellowMoves] = useState([]);

  const openMenuModal = (e) => {
    setModalOpen(true);
    clearTimeout(() => {
      console.log("clear");
    });
  };
  const gamePieceDropAnimation = (gamePiece, pieceDropHeight) => {
    // sets the game piece drop animation
    gamePiece.animate(
      [
        { transform: `translateY(${pieceDropHeight}px)` },
        { transform: `translateY(0px)` },
        { transform: `translateY(${pieceDropHeight / 30}px)` },
        { transform: `translateY(0px)` },
      ],
      {
        duration: 500,
        easing: "linear",
        iterations: 1,
      }
    );
  };
  //click on a column
  //loop over its cells
  //find the cells where data-full is empty string
  //choose the one with the highest number/cell
  //change data-full of that cell to true
  //set data-color to whatever is currentTurnColor
  const clickColumn = (e) => {
    const empty = [];

    const children = [...e.currentTarget.children];

    children.map((child) => {
      if (!child.dataset.full) {
        empty.push(child);
      }
    });

    if (empty.length === 0) {
      return;
    }

    const nextEmpty = empty.length && empty[empty.length - 1];

    const updatedValue = {
      cellNumber: +nextEmpty.id,
      color: currentTurnColor,
    };

    const isWinningMove = () => {
      //vertical win
      // redMoves.sort();
      redMoves.sort((a, b) => a - b);
      return false;
    };

    setPiecePositions((piecePositions) => [
      ...piecePositions,
      { ...updatedValue },
    ]);

    empty[empty.length - 1].dataset.full = "full";

    currentTurnColor === "red"
      ? (empty[empty.length - 1].dataset.color = "red")
      : (empty[empty.length - 1].dataset.color = "yellow");
    animatePiece(children, empty, e);

    const winningMove = isWinningMove();
    if (winningMove) {
      console.log("WON");
    } else {
      changePlayer();
    }
    //add cell number to array holding turns
    // []
  };

  const animatePiece = (children, empty, e) => {
    const nextEmpty = empty.length && empty[empty.length - 1];

    children.map((child) => {
      if (+nextEmpty.id === +child.id) {
        const cellPosition = child.getBoundingClientRect();
        const boardPosition = e.currentTarget.parentElement.getBoundingClientRect();
        const x = cellPosition.bottom - boardPosition.bottom;
        const y = cellPosition.top - boardPosition.top;
        gamePieceDropAnimation(child, x - y);
      }
    });
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    setCurrentTurnColor(currentTurnColor === "red" ? "yellow" : "red");
  };

  return (
    <div className="gameboard-wrapper">
      {modalOpen && <MenuModal setModalOpen={setModalOpen} />}
      <img className="logo" src="/src/assets/images/logo.svg" alt="logo" />
      <button onClick={openMenuModal} className="menu-btn">
        MENU
      </button>
      <button onClick={clickRestart} className="restart-btn">
        RESTART
      </button>
      <div className="gameboard">
        <div className="player1-score">
          <ScoreCard player="1" playerScore={playerOneScore} number="one" />
        </div>

        <Board
          piecePositions={piecePositions}
          marker={marker}
          columnToShow={columnToShow}
          showColumnMarker={showColumnMarker}
          clickColumn={clickColumn}
          clickCell={clickCell}
          currentPlayer={currentPlayer}
          currentTurnColor={currentTurnColor}
        />
        <div className="player2-score">
          <ScoreCard player="2" playerScore={playerTwoScore} number="two" />
        </div>
        <section className="current-turn-section-wrapper">
          <CurrentTurn
            currentTurnColor={currentTurnColor}
            currentPlayer={currentPlayer}
            countdown={countdown}
          />
        </section>
      </div>
    </div>
  );
}

export default GameBoard;
