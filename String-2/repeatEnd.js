function repeatEnd(str, n){
  let end = str.slice(str.length-n), i = 0, result = "";
  
  while (i < n) {
    result += end;
    i++;
  }
  
  return result;
}