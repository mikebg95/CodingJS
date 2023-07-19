function sumDigits1(n){
  if (Math.floor(n / 10) === 0) {
    return n;
  }
  
  return n % 10 + sumDigits1(Math.floor(n / 10));
}