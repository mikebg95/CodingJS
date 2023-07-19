function scoresIncreasing(scores){
  for (let i = 0; i < scores.length-1; i++) {
    if (scores[i+1] < scores[i]) {
      return false;  
    }
  }
  return true;
}