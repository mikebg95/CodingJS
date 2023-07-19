function backAround(str){
  let lastChar = str.substring(str.length-1);
  return lastChar + str + lastChar;
}