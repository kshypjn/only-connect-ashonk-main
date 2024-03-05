import React from "react";
import BaseModal from "../BaseModal";
import { SolvedWordRow } from "../../GameGrid";
import ShareScoreButton from "../../ShareScoreButton";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameLostModal({ open }) {
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title="You lost."
      initiallyOpen={open}
      footerElements={
        <>
          <ShareScoreButton />
          <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => window.open("https://forms.gle/o1zHDmMBgCxJCZi59", '_blank')}>Contribute to the Game</button>
        </>
        }
      showActionButton={false}
    >
      <div className="grid gap-y-2">
        <p className="text-lg font-[500] text-center">
          Better luck next time. The correct answers are below.
        </p>
        {gameData.map((obj) => (
          <SolvedWordRow key={obj.category} {...obj} />
        ))}
      </div>
      <div className="bg-emerald-500 text-white font-bold py-2 px-4 rounded text-center mx-auto my-4">
                SEE YOU TOMORROW!
        </div>
    </BaseModal>
  );
}

export default GameLostModal;
