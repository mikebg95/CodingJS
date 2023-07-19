function notString(str){
  if (str.substring(0, 3) === ("not")) {
    return str;
  }
  else {
    return "not " + str; 
}