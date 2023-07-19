function repeatFront(str, n){  
  let result = "";
  
  while (n > 0) {
    result += str.slice(0, n);
    
    n--;
  }
  
  return result;
}