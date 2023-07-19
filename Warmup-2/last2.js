function last2(str){
  
  let end = str.substring(str.length-2, str.length);
  let result = 0;
  
  for (let i = 0; i < str.length-2; i++) {
    if (str.substring(i, i+2) === end) {
      result++;
    }
  }
  
  return result;
}