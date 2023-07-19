function xyzThere(str){
  for (let i = 0; i < str.length-2; i++) {
    if str.charAt(i) === '.'
      i += 2;
    
    if str.slice(i, i+3) === "xyz"
      return true;
  }
  return false;
}