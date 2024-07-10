// Code your solution in this file!
// Calculates the distance in blocks from 42nd Street
function distanceFromHqInBlocks(destination) {
    const hq = 42;
    return Math.abs(destination - hq);
  }
  
  // Calculates the distance in feet from 42nd Street
  function distanceFromHqInFeet(destination) {
    const blocks = distanceFromHqInBlocks(destination);
    return blocks * 264; // 1 block = 264 feet
  }
  
  // Calculates the distance in feet between two street numbers
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    return distance * 264; // 1 block = 264 feet
  }
  
  // Calculates the fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  