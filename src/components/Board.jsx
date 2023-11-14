import React, { useState } from "react";
import "../styles/main-menu.scss";

function Board({
  currentPlayer,
  currentTurnColor,
  clickCell,
  columnToShow,
  showColumnMarker,
  marker,
  clickColumn,
  piecePositions,
}) {
  const [winner, setWinner] = useState("");
  const [indexClicked, setIndexClicked] = useState("");
  const columns = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42],
  ];

  const outputCounters = (cell) => {
    for (let piecePosition in piecePositions) {
      if (+cell === +piecePositions[piecePosition].cellNumber) {
        if (piecePositions[piecePosition].color === "red") {
          return <img src="/assets/images/counter-red-large.svg" alt="" />;
        } else {
          return <img src="/assets/images/counter-yellow-large.svg" alt="" />;
        }
      }
    }
  };

  return (
    <div className="board">
      {columns.map((column, index) => {
        return (
          <div
            onMouseOver={showColumnMarker}
            key={index + 1}
            onClick={clickColumn}
            className="column"
          >
            {+index + 1 === +columnToShow && marker}
            {column.map((cell, idx) => {
              return (
                <div
                  onClick={clickCell}
                  key={cell}
                  className="piece"
                  data-piece={cell}
                  data-full=""
                  data-color=""
                >
                  {outputCounters(cell)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default Board;
