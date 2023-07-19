function stringSplosion(str){
  return 0;
  
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.substring(0, i);
  }
  return result;
}