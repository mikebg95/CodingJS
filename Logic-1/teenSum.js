function teenSum(a, b){
  return isTeen(a) || isTeen(b) ? 19 : (a + b);
}

function isTeen(n) {
  return n >= 13 && n <= 19;
}