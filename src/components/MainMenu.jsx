import React, { useState } from "react";
import RulesModal from "./RulesModal.jsx";
import "../styles/main-menu.scss";

function MainMenu() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="main-menu-wrapper">
        <img src="/src/assets/images/logo.svg" alt="logo" className="logo" />
        <button className="player-vp-layer-btn">
          PLAYER VS PLAYER
          <img
            src="/src/assets/images/player-vs-player.svg"
            alt="playervplayer"
            className="player-v-player"
          />
        </button>
        <button onClick={() => setModalOpen(true)} className="game-rules-btn">
          Game Rules
        </button>
        {modalOpen && <RulesModal setModalOpen={setModalOpen} />}
      </div>
    </>
  );
}

export default MainMenu;
