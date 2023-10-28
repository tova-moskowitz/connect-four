import React, { useState } from "react";
import "../styles/main-menu.scss";

function ScoreCard({ player, playerScore, number }) {
  return (
    <>
      <div className={`player${player}-score`}>
        <img src={`/assets/images/player-${number}.svg`} alt="" />
        Player {player} <p>{playerScore}</p>
      </div>
    </>
  );
}

export default ScoreCard;
