import React from "react";
import Header from "../Header";
import Game from "../Game";
import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";
import { Analytics } from "@vercel/analytics/dist/react"
import { SpeedInsights } from "@vercel/speed-insights/dist/react";
function App() {
  return (
    <>
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="wrapper">
          <Toaster />
          <Header />
          <Game />
        </div>
      </GameStatusProvider>
      <Analytics />
      <SpeedInsights />

    </PuzzleDataProvider>
    
    </>
  );
}

export default App;
