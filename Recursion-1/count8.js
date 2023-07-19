function count8(n){
  if n === 0 
    return 0;
  
  let digit = n % 10;
  let next = Math.floor(n/10);
  let nextDigit = next % 10;
  
  if (digit === 8) {
    if (nextDigit === 8) {
      return 2 + count8(next);
    }
    else {
      return 1 + count8(next);
    }
  }
  
  return count8(next);
}