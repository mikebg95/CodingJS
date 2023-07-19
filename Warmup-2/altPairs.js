function altPairs(str){
  let result = "";
  for (let i = 0; i < str.length; i++) {
    
    if (i % 4 === 0 || i % 4 === 1) {
      result += str.charAt(i);
    }
  }
  
  return result;
}