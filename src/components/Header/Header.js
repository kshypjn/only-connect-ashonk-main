import React from "react";

import InfoModal from "../modals/InfoModal";


function Header() {
  return (
    <header>
        <h1 className="font-serif  text-pink-600 text-center">Ashoka Connections</h1>
        <InfoModal />
    </header>
  );
}


export default Header;
