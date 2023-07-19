function frontBack(str){
  let firstChar = str.charAt(0);
  let lastChar = str.charAt(str.length-1);
  let switchHelp = "";
  let middleString = str.substring(1, str.length-1);
  
  switchHelp = firstChar;
  firstChar = lastChar;
  lastChar = switchHelp;
  
  return middleString;
}