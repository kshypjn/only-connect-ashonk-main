import React from "react";
import BaseModal from "../BaseModal";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import ShareScoreButton from "../../ShareScoreButton";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameWonModal({ open, submittedGuesses }) {
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title="You won the game!"
      initiallyOpen={open}
      footerElements={
        <>
          <ShareScoreButton />
          <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => window.open("https://forms.gle/o1zHDmMBgCxJCZi59", '_blank')}>Contribute to the Game</button>
        </>
      }
      showActionButton={false}
    >
      <p>{"Great job, share your results!"}</p>
      <div className="justify-center">
        {/* the whitespace: pre style makes the emoji grid appear with new lines character */}
        <span className="text-center whitespace-pre">
          {"\n"}
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span>
        <div className="bg-rose-400 text-white font-bold py-2 px-4 rounded text-center mx-auto my-4">
                SEE YOU TOMORROW!
        </div>
      </div>
    </BaseModal>
  );
}

export default GameWonModal;
