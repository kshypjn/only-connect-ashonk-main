const userName = prompt("Please enter your name:");
function calculateTimeTaken() {
  // Add logic to calculate time taken
  const startTime = new Date(); // Assuming this is the start time
  // Add logic to calculate time taken
  const endTime = new Date(); // Assuming this is the end time
  const timeTaken = endTime - startTime; // Assuming timeTaken is in milliseconds
  return timeTaken;
}

const timeTaken = calculateTimeTaken();
const userEntry = { name: userName, time: timeTaken };

// Add userEntry to the leaderboard
// Assuming leaderboard is an array where each entry is an object with 'name' and 'time' properties
leaderboard.push(userEntry);
