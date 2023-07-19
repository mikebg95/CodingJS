function scoresClump(scores){
  for (let i = 0; i < scores.length-2; i++) {
    if (scores[i+2] >= scores[i+1] && scores[i+1] >= scores[i] && scores[i+2] - scores[i] <= 2) {
      return true;
    }
  }
  return false;
  
}