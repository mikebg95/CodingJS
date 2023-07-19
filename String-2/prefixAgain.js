function prefixAgain(str, n){
  let prefix = str.slice(0, n), i = 1;
  
  while (i < str.length) {    
    if (str.slice(i, i+n) === prefix) {
      return true;
    }
    
    i++;
  }
  
  return false;
  
}