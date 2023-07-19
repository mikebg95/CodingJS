function doubleChar(str){
  let result = "", i = 0;
  while i < str.length {
    result += str.charAt(i) + str.charAt(i);
    
    i++;
  }
  return result;
}