import React from "react";

import InfoModal from "../modals/InfoModal";
import ArchiveModal from "../modals/ArchiveModal/ArchiveModal";


function Header() {
  return (
    <header>
        <h1 className="font-serif  text-pink-600 text-center">Ashoka Connections</h1>
        <InfoModal />
        <ArchiveModal/>
    </header>
  );
}


export default Header;
