function startOz(str){
  let firstChar = str.charAt(0) === "o";
  let secondChar = str.charAt(1) === "z";
  let result = "";
  if (firstChar) {
    result += str.charAt(0);
  }
  if (secondChar) {
    result += str.charAt(1);
  }
  
  return result;
}