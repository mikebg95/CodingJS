function doubleX(str){
  for (let i = 0; i < str.length-1; i++) {
    if (str.charAt(i) === 'x') {
      return str.charAt(i+1) === 'x';
    }
  }
  return false;
}