function oneTwo(str){  
  let firstPart = str.slice(0, str.length - str.length % 3);
  
  let result = "";
  
  for (let i = 0; i < firstPart.length-2; i += 3) {
    let temp = firstPart.charAt(i);
    result += firstPart.slice(i+1, i+3) + firstPart.charAt(i);
  }
  
  return result;
}