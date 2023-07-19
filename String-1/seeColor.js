function seeColor(str){
  if (str.substring(0,3) === "red") {
    return str.substring(0,3);
  }
  if (str.substring(0,4) === "blue") {
    return str.substring(0,4);
  }
  return "";
}