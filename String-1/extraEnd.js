function extraEnd(str){
  let result = "";
  let end;
  for (let i = 0; i < str.length; i++) {
    end = str.substring(str.length-2);
  }
  
  for (let j = 0; j < 3; j++) {
    result += end;
  }
  
  return result;
}