function fizzString(str){
  if (str.charAt(0) !== 'f' && str.charAt(str.length-1) !== 'b') {
    return str;
  }
  
  let result = "";
  if (str.charAt(0) === 'f') {
    result += "Fizz";
  }
  if (str.charAt(str.length-1) === 'b') {
    result += "Buzz";
  }
  return result;
}