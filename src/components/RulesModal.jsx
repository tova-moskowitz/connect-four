import React, { useState } from "react";
import "../styles/main-menu.scss";
import iconCheck from "../../public/assets/images/icon-check.svg";
import iconCheckHover from "../../public/assets/images/icon-check-hover.svg";

function RulesModal({ setModalOpen }) {
  const [checkIcon, setCheckIcon] = useState(iconCheck);
  return (
    <>
      <div className="rules">
        <div className="rules-heading">RULES</div>
        <span className="headingS">Objective</span>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
        </p>
        <span className="headingS">How to play</span>
        <p>
          Red goes first in the first game. Players must alternate turns, and
          only one disc can be dropped in each turn. The game ends when there is
          a 4-in-a-row or a stalemate. The starter of the previous game goes
          second on the next game.
        </p>
        <button onClick={() => setModalOpen(false)}>
          <img
            onMouseEnter={(e) => setCheckIcon(iconCheckHover)}
            onMouseLeave={(e) => setCheckIcon(iconCheck)}
            src={checkIcon}
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default RulesModal;
