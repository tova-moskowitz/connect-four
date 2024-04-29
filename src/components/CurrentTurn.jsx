import React, { useState } from "react";
import "../styles/main-menu.scss";

function CurrentTurn({ currentTurnColor, currentPlayer, countdown }) {
  return (
    <>
      <img
        className="current-turn-background"
        src={`/src/assets/images/turn-background-${currentTurnColor}.svg`}
        alt=""
      />
      <div className={`current-turn-countdown ${currentTurnColor}`}>
        <span className="current-turn">PLAYER {currentPlayer}'S TURN</span>
        <p className="countdown">{countdown}s</p>
      </div>
    </>
  );
}

export default CurrentTurn;
