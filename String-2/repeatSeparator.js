function repeatSeparator(word, sep, count){
  let result = "";
  while count > 0 {
    result += word;
    
    if count > 1 
      result += sep;
    
    count--;
  }
  
  return result;
  
}