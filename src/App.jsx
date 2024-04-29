import React, { useState, useEffect } from "react";
import "./App.scss";
import MainMenu from "./components/MainMenu.jsx";
import GameBoard from "./components/GameBoard.jsx";
import QuestionList from "./components/QuestionList.jsx";

function App() {
  const [currentTurnColor, setCurrentTurnColor] = useState("red");
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [redMoves, setRedMoves] = useState([]);
  const [yellowMoves, setYellowMoves] = useState([]);
  // const [redPiece, setRedPiece] = useState("");
  // const [redPieces, setRedPieces] = useState([]);
  // const [yellowPiece, setYellowPiece] = useState([]);
  const [marker, setMarker] = useState("");

  // const [winner, setWinner] = useState("");
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const [columnToShow, setColumnToShow] = useState("");
  // const columnRef = useRef(null);

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
  const showColumnMarker = (e) => {
    // setColumnToShow(e.currentTarget.id);
    // setMarker(
    //   <img
    //     className="marker"
    //     src={`/assets/images/marker-${currentTurnColor}.svg`}
    //     alt=""
    //   />
    // );
  };

  const clickCell = (e) => {
    // setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    // setCurrentTurnColor(currentTurnColor === "red" ? "yellow" : "red");
  };

  return (
    // <QuestionList />
    <div className="main-wrapper">
      {/* <MainMenu / > */}
      <GameBoard
        marker={marker}
        columnToShow={columnToShow}
        showColumnMarker={showColumnMarker}
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
