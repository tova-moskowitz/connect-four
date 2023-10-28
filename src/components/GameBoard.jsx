import React, { useState, useEffect } from "react";
import "../styles/game-board.scss";
import ScoreCard from "./ScoreCard.jsx";
import CurrentTurn from "./CurrentTurn.jsx";
import MenuModal from "./MenuModal.jsx";
import Board from "./Board.jsx";

function GameBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [currentTurnColor, setCurrentTurnColor] = useState("red");
  const [countdown, setCountdown] = useState(30);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (countdown > 0) {
      // setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setWinner(currentPlayer === 1 ? 2 : 1);
      // setCountdown(`Player ${winner} WINS!`);
    }
  });

  const clickRestart = () => {
    setWinner("");
    // setCountdown(30);
    setCurrentTurnColor("red");
    setCurrentPlayer(1);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };

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
        <Board />
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
