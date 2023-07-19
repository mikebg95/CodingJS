function loneTeen(a, b){
  return (isTeen(a) && !isTeen(b)) || (isTeen(b) && !isTeen(a));
}

function isTeen(n) {
  return n >= 13 && n <= 19;
}