function conCat(a, b){
  let result = a + b;
  
  if (result.charAt(a.length-1) === result.charAt(a.length)) {
    result = result.substring(0, a.length-1) + result.substring(a.length);
  }
  
  return result;
}