function mixString(a, b){
  let result = "", i = 0, longest = Math.max(a.length, b.length);
  
//   return longest;
  while (i < longest) {
    
    if (i <= a.length) {
      result += a.charAt(i);
    }
    
    if i <= b.length {
      result += b.charAt(i);
    }
    
    i++;  
  }
  return result;
}