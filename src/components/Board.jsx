import React, { useState } from "react";
import "../styles/main-menu.scss";
import cn from "classnames";

function Board({
  piece,
  clickColumn,
  currentPlayer,
  currentTurnColor,
  clickCell,
}) {
  const [winner, setWinner] = useState("");

  // const columns = [
  //   [1, 2, 3, 4, 5, 6],
  //   [7, 8, 9, 10, 11, 12],
  //   [13, 14, 15, 16, 17, 18],
  //   [19, 20, 21, 22, 23, 24],
  //   [25, 26, 27, 28, 29, 30],
  //   [31, 32, 33, 34, 35, 36],
  //   [37, 38, 39, 40, 41, 42],
  // ];
  const columns = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  return (
    <div className="board">
      {columns.map((column, index) => {
        return (
          <div
            key={index}
            onClick={clickColumn}
            className="column"
            id={index + 1}
          >
            {piece}
            {column.map((piece, idx) => {
              return (
                <div
                  onClick={clickCell}
                  key={idx}
                  className="piece"
                  // id={idx}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
