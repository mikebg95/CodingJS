function frontAgain(str){
  return str.length < 2 ? false : str.substring(0,2) === str.substring(str.length-2);
}