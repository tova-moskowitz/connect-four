import React from "react";
import "../styles/main-menu.scss";

function ScoreCard({ player, playerScore, number }) {
  return (
    <>
      <div>
        <img src={`/src/assets/images/player-${number}.svg`} alt="" />
        <span className="player-score">
          PLAYER {player} <p className="score">{playerScore}</p>
        </span>
      </div>
    </>
  );
}

export default ScoreCard;
