function changeXY(str){
  if str.length === 0
    return "";
  
  if str.charAt(0) === 'x'
    return 'y' + changeXY(str.slice(1));
  
  return str.charAt(0) + changeXY(str.slice(1));
}