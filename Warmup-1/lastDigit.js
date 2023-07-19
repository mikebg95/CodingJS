function lastDigit(a, b){
  return getRemainder(a) === getRemainder(b);
}

function getRemainder(n) {
  return n % 10; 
}