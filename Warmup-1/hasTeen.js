function hasTeen(a, b, c){
  return isTeen(a) || isTeen(b) || isTeen(c);
}

function isTeen(n) {
  return n >= 13 && n <= 19;
}