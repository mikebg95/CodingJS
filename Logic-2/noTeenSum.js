function noTeenSum(a, b, c){
  let sum = 0;
  if !isTeen(a) sum += a
  if !isTeen(b) sum += b
  if !isTeen(c) sum += c
  return sum;
}

function isTeen(n) {
  return (n >= 13 && n <= 19) && n != 15 && n != 16;
}