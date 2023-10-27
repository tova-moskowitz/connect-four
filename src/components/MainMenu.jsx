import React, { useState } from "react";
import RulesModal from "./RulesModal.jsx";

function MainMenu() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <h1>Main Menu</h1>
      <div className="main-menu">
        <img src="/assets/images/logo.svg" alt="logo" className="logo" />
        <button className="playervplayer">
          <img
            src="/assets/images/player-vs-player.svg"
            alt="playervplayer"
            className="player-v-player"
          />
        </button>
        <button onClick={() => setModalOpen(true)} className="game-rules">
          Game Rules
        </button>
        {modalOpen && <RulesModal setModalOpen={setModalOpen} />}
      </div>
    </>
  );
}

export default MainMenu;
