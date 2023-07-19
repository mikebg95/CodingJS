function lessBy10(a, b, c){
  return isLess(a, b) || isLess(a, c) || isLess(b, c);
}

function isLess(i, j) {
  return Math.abs(i - j) >= 10;
}