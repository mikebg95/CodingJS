function nearTen(num){
  let absRemainder = Math.abs(10 - num % 10);
  
  return absRemainder <= 2 || (absRemainder >= 8 && absRemainder <= 10);
}