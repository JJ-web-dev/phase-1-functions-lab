function distanceFromHqInBlocks(distanceBlocks) {
  if (distanceBlocks > 42) {
    return distanceBlocks - 42;
  } else {
    return 42 - distanceBlocks;
  }

};

distanceFromHqInBlocks();

function distanceFromHqInFeet(distanceBlocks) {
  return distanceFromHqInBlocks(distanceBlocks) * 264;

}

distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;

}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  };
};
