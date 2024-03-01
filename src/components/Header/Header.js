import React from "react";

import InfoModal from "../modals/InfoModal";


function Header() {
  rreturn (
    <header>
      <div>
        <h1 className="magaHead" style={{fontFamily: "Montserrat"}}>Ashoka Connections</h1>
        <InfoModal />
      </div>
    </header>
  );
}


export default Header;
