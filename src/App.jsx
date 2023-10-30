import React, { useState, useEffect } from "react";
import "./App.scss";
import MainMenu from "./components/MainMenu.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [currentTurnColor, setCurrentTurnColor] = useState("red");
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [redMoves, setRedMoves] = useState([]);
  const [yellowMoves, setYellowMoves] = useState([]);
  // const [winner, setWinner] = useState("");
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const [piece, setPiece] = useState([]);

  const clickRestart = () => {
    setWinner("");
    setCountdown(30);
    setCurrentPlayer(1);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };

  useEffect(() => {
    if (countdown > 0) {
      // setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setWinner(currentPlayer === 1 ? 2 : 1);
      // setCountdown(`Player ${winner} WINS!`);
    }
  });

  const clickColumn = (e) => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    setCurrentTurnColor(currentTurnColor === "red" ? "yellow" : "red");

    const redPiece = (
      <img
        src="/assets/images/counter-red-large.svg"
        alt="red counter"
        className="red-counter"
      />
    );
    const yellowPiece = (
      <img
        src="/assets/images/counter-yellow-large.svg"
        alt="yellow counter"
        className="yellow-counter"
      />
    );

    currentPlayer === 1
      ? setPiece([...piece, redPiece])
      : setPiece([...piece, yellowPiece]);

    console.log(piece);
  };

  const clickCell = (e) => {};

  return (
    <div className="main-wrapper">
      <MainMenu />
      <GameBoard
        piece={piece}
        clickColumn={clickColumn}
        countdown={countdown}
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        clickRestart={clickRestart}
        clickCell={clickCell}
        currentTurnColor={currentTurnColor}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}

export default App;
