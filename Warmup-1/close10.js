function close10(a, b){
  let absA = Math.abs(a-10);
  let absB = Math.abs(b-10);
  if (absA === absB) {
    return 0;
  }
  else {
    return 10-Math.min(absA, absB);
  }
  
  
}