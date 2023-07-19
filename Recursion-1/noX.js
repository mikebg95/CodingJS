function noX(str){
  if str.length === 0
    return "";
  
  if str.charAt(0) === 'x'
    return noX(str.slice(1));
  
  return str.charAt(0) + noX(str.slice(1));
}