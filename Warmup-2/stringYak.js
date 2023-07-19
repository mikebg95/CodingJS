function stringYak(str){
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i+3) === "yak") {
      i += 2;
    }
    else {
      result += str.charAt(i);
    }
  }
    
    return result;
}