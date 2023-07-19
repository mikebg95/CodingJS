function countHi(str){
  if str.length < 2
    return 0;
  
  if str.substring(0, 2) === "hi"
    return 1 + countHi(str.slice(1));
  
  return countHi(str.slice(1));
}