function without2(str){
  if (str.length < 2) {
    return str;
  }
  if (str.substring(0,2) === str.substring(str.length-2)) {
    return str.substring(2);
  }
  else {
    return str;
  }
}