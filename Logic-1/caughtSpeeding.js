function caughtSpeeding(speed, isBirthday){
  if (isBirthday) {
    speed -= 5;
  }
  
  if (speed <= 60) {
    return 0;
  }
  
  if (speed <= 80) {
    return 1;
  }
  
  return 2;
}