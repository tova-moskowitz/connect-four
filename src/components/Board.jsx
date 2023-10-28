import React, { useState } from "react";
import "../styles/main-menu.scss";

function Board() {
  const columns = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42],
  ];

  return (
    <div className="board">
      {columns.map((column, index) => {
        return (
          <div key={index} className="column">
            {column.map((piece) => {
              return (
                <div className="piece" id={piece}>
                  {piece}
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
