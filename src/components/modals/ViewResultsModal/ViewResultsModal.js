import React from "react";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import ShareScoreButton from "../../ShareScoreButton";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import { Button } from "../../ui/button";

function ViewResultsModal() {
  const { submittedGuesses } = React.useContext(GameStatusContext);
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title=""
      trigger={
        <Button variant="submit" className="w-full" children={"View Results"} />
      }
      initiallyOpen={false}
      showActionButton={false}
      footerElements={
        <>
          <ShareScoreButton />
          <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => window.open("https://forms.gle/o1zHDmMBgCxJCZi59", '_blank')}>Contribute to the Game</button>
        </>
      }
    >
      <div className="flex flex-col place-content-center">
        <p className="text-center font-[600]">
          Your Guesses Are Represented Below
        </p>
        <span className="text-center whitespace-pre mb-2">
          {"\n"}
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span>
        <CountdownToNextPuzzle />
      </div>
    </BaseModal>
  );
}

export default ViewResultsModal;
