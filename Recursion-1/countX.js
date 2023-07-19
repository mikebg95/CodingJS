function countX(str){
  if str.length === 0 
    return 0;
  
  if str.charAt(0) === 'x'
    return 1 + countX(str.slice(1));
  else
    return countX(str.slice(1));
}