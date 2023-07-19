function middleThree(str){
  let num = (str.length - 3) / 2;
  
  return str.substring(num, num+3);
}