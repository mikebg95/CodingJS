function count7(n){
  if n === 0
    return 0;
  
  if n % 10 === 7
    return 1 + count7(Math.floor(n/10));
  
  return count7(Math.floor(n/10));
  
}