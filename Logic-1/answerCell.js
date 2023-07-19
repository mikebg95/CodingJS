function answerCell(isMorning, isMom, isAsleep){
  if (isAsleep) {
    return false;
  }
  if (isMom) {
    return true;
  }
  if (isMorning) {
    return false;
  }
  else {
    return true;
  }
}