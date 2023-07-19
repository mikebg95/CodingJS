function twoChar(str, index){
  if (index >= str.length -1 || index < 0) {
    return str.substring(0,2);
  }
  return str.substring(index, index+2);
}