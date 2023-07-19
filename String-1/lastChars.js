function lastChars(a, b){
  let result = "";
  
  result += a.length === 0 ? '@' : a.charAt(0);
  result += b.length === 0 ? '@' : b.charAt(b.length-1);
  
  return result;
}