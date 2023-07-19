function extraFront(str){
  let front = "";
  
  if (str.length === 0) {
    return "";
  }
  else if (str.length === 1) {
    front = str.charAt(0);
  }
  else {
    front = str.substring(0,2);
  }
  
  let result = "";
  
  for (let i = 0; i < 3; i++) {
    result += front;
  }
  
  return result;
}