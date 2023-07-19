function countXX(str){
  let number = 0;
  
  let testArray = [];
  
  for (let i = 0; i < str.length-1; i++) {
    if (str.substring(i, i+2) === "xx") {
      number += 1;
    }
  }
  
  return number;
}