function closeFar(a, b, c){
  if (Math.abs(b-a) <= 1) {
    return Math.abs(c-a) >= 2 && Math.abs(c-b) >= 2);
  }
  
  if (Math.abs(c-a) <= 1) {
    return Math.abs(b-a) >= 2 && Math.abs(c-b) >= 2);
  }
}