import React, { useState, useEffect } from "react";
import "../styles/game-board.scss";
import ScoreCard from "./ScoreCard.jsx";
import CurrentTurn from "./CurrentTurn.jsx";

function GameBoard() {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [currentTurnColor, setCurrentTurnColor] = useState("red");
  const [countdown, setCountdown] = useState(30);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCountdown(`Player ${currentPlayer === 1 ? 2 : 1} WINS!`);
    }
  });

  return (
    <div className="gameboard-wrapper">
      <img className="logo" src="assets/images/logo.svg" alt="logo" />
      <button className="menu-btn">MENU</button>
      <button className="restart-btn">RESTART</button>
      <div className="gameboard">
        <div className="player1-score">
          <ScoreCard player="1" playerScore={playerOneScore} number="one" />
        </div>

        <img
          className="layer-black"
          src="/assets/images/board-layer-black-large.svg"
          alt=""
        />
        <img
          className="layer-white"
          src="/assets/images/board-layer-white-large.svg"
          alt=""
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
