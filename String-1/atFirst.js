function atFirst(str){
  if (str.length === 0) {
    return "@@";
  }
  if (str.length === 1) {
    return str.charAt(0) + "@";
  }
  return str.substring(0,2);
}