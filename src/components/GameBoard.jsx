import React, { useState, useEffect } from "react";
import "../styles/game-board.scss";
import ScoreCard from "./ScoreCard.jsx";
import CurrentTurn from "./CurrentTurn.jsx";
import MenuModal from "./MenuModal.jsx";
import Board from "./Board.jsx";

function GameBoard({
  marker,
  showColumnMarker,
  // redPieces,
  // yellowPiece,
  currentTurnColor,
  currentPlayer,
  clickCell,
  clickRestart,
  playerOneScore,
  playerTwoScore,
  countdown,
  pieces,
  columnToShow,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [piecePositions, setPiecePositions] = useState([]);
  const empty = [];

  const openMenuModal = (e) => {
    setModalOpen(true);
    clearTimeout(() => {
      console.log("clear");
    });
  };

  //click on a column
  //loop over its cells
  //find the cells where data-full is empty string
  //choose the one with the highest number/cell
  //change data-full of that cell to true
  const clickColumn = (e) => {
    const children = [...e.currentTarget.children];

    children.map((child) => {
      if (!child.dataset.full) {
        empty.push(child);
      }
    });

    const nextEmpty = empty.length && empty[empty.length - 1];
    empty.length &&
      setPiecePositions([...piecePositions, +nextEmpty.dataset.piece]);
    empty.length && (empty[empty.length - 1].dataset.full = "full");
  };

  return (
    <div className="gameboard-wrapper">
      {modalOpen && <MenuModal setModalOpen={setModalOpen} />}
      <img className="logo" src="assets/images/logo.svg" alt="logo" />
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
          // redPieces={redPieces}
          // yellowPiece={yellowPiece}
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
