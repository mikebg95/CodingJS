function withoutEnd2(str){
  return str.length <= 2 ? "" : str.substring(1, str.length-1);
}