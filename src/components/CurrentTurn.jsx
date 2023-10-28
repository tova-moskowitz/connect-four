import React, { useState } from "react";
import "../styles/main-menu.scss";

function CurrentTurn({ currentTurnColor, currentPlayer, countdown }) {
  return (
    <>
      <img
        className="current-turn-background"
        src={`/assets/images/turn-background-${currentTurnColor}.svg`}
        alt=""
      />
      <div className={`current-turn-countdown ${currentTurnColor}`}>
        Player {currentPlayer}'S Turn
        <p>{countdown}s</p>
      </div>
    </>
  );
}

export default CurrentTurn;
