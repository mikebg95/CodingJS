function deFront(str){
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str.charAt(i) === 'a' ? 'a' : '';
    }
    else if (i === 1) {
      result += str.charAt(i) === 'b' ? 'b' : '';
    }
    else {
      result += str.charAt(i);
    }
    
  }
  
  return result;
  
}