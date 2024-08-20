import React from "react";
import { Archive } from "lucide-react";
import BaseModal from "../BaseModal";
import { Button } from "../../ui/button";
import { getIndex, dateOfNextPuzzle, getPuzzleOfDay } from "../../../lib/time-utils";
// import PuzzleDataProvider from "@/src/providers/PuzzleDataProvider";
function ArchiveModal() {
  const todayIndex = getIndex(new Date());
  const buttons = [];

  for (let i = 0; i < todayIndex; i++) {
    buttons.push(
      <Button
        key={i}
        className="rounded-md font-medium px-3"
        onClick={() => handleButtonClick(i)}
      >
        #{i}
      </Button>
    );
  }

const handleButtonClick = (index) => {
   
    console.log(getPuzzleOfDay(date));
};

  return (
    <BaseModal
      title=""
      trigger={<Archive className="mr-4" />}
      initiallyOpen={false}
    >
      {buttons}
    </BaseModal>
  );
}

export default ArchiveModal;
