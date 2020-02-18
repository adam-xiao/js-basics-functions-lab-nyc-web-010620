function distanceFromHqInBlocks(endSt){
  let dist = Math.abs(endSt - 42);
  return dist
}

function distanceFromHqInFeet(endSt){
  return (distanceFromHqInBlocks(endSt) * 264);
<<<<<<< HEAD
}

function  distanceTravelledInFeet(stBlock, endBlock){
  let dist = Math.abs(stBlock - endBlock) *264;
  return dist;
}

function calculatesFarePrice(stBlock, endBlock){
  let distFeet = distanceTravelledInFeet(stBlock, endBlock);
  
  if (distFeet <= 400) {
    return distFeet * 0;
  } else if (distFeet > 400 && distFeet <= 2000) {
      return (distFeet - 400) * 0.02;
  } else if (distFeet > 2000 && distFeet <= 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
=======
>>>>>>> b72f0755ce95a15aeb0af52289e924b7f3127d7a
  
}