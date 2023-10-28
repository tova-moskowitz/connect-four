import React, { useState } from "react";
import "../styles/main-menu.scss";
import iconCheck from "../../public/assets/images/icon-check.svg";
import iconCheckHover from "../../public/assets/images/icon-check-hover.svg";

function MenuModal({ setModalOpen }) {
  return (
    <div className="menu-modal">
      <h1>PAUSE</h1>
      <button onClick={() => setModalOpen(false)}>CONTINUE GAME</button>
      <button>RESTART</button>
      <button>QUIT</button>
    </div>
  );
}

export default MenuModal;
