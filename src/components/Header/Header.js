import React from "react";

import InfoModal from "../modals/InfoModal";


function Header() {
  rreturn (
    <header>
      <div>
        <h1 className="font-serif text-orange-700">Ashoka Connections</h1>
        <InfoModal />
      </div>
    </header>
  );
}


export default Header;
