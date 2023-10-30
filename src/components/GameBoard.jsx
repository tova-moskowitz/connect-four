import React, { useState, useEffect } from "react";
import "../styles/game-board.scss";
import ScoreCard from "./ScoreCard.jsx";
import CurrentTurn from "./CurrentTurn.jsx";
import MenuModal from "./MenuModal.jsx";
import Board from "./Board.jsx";

function GameBoard({
  clickColumn,
  currentTurnColor,
  currentPlayer,
  clickCell,
  clickRestart,
  playerOneScore,
  playerTwoScore,
  countdown,
  piece,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openMenuModal = (e) => {
    setModalOpen(true);
    console.log(e);
    clearTimeout(() => {
      console.log("clear");
    });
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
          piece={piece}
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
