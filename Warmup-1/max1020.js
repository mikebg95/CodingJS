function max1020(a, b){
  
  if (inRange(a) && !inRange(b)) {
    return a;
  }
  else if (inRange(b) && !inRange(a)) {
    return b;
  }
  else if (inRange(a) && inRange(b)) {
    return Math.max(a, b);
  }
  else {
    return 0;
  }
  
  return inRange(a);
}

function inRange(n) {
 return n >= 10 && n <= 20; 
}