import React from "react";
import Countdown from "react-countdown";
import { dateOfNextPuzzle } from "../../lib/time-utils";

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //ChatGPT Assisted
  // Render a countdown
  if (completed) {
    return (
      <span className="font-[600]">
        New Game Available! Refresh Your Browser.
      </span>
    );
  }
  const timeParts = [];

  if (days > 0) {
    timeParts.push(`${days} Day${days > 1 ? "s" : ""}`);
  }
  if (hours > 0) {
    timeParts.push(`${hours} Hour${hours > 1 ? "s" : ""}`);
  }
  if (minutes > 0) {
    timeParts.push(`${minutes} Minute${minutes > 1 ? "s" : ""}`);
  }

  // Create a sentence based on the time parts
  let timeLeftString = "Next Puzzle Released in 24 Hours"; // Updated to ensure a new puzzle comes in 24 hours
  // Create a sentence based on the time parts

  return <div>{timeLeftString}</div>;
};

function CountdownToNextPuzzle() {
  return (
    <div className="flex flex-row place-content-center mt-4">
      <Countdown
        className="text-lg text-gray-900"
        renderer={renderer}
        date={Date.now()} // Set the date for the next puzzle to be 24 hours from now
        intervalDelay={1000}
      />
    </div>
  );
}

export default CountdownToNextPuzzle;
