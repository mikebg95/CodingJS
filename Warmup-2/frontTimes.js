function frontTimes(str, n){
  let front;
  if (str.length < 3) {
    front = str;
  }
  else {
   front = str.substring(0, 3); 
  }
  
  let newString = "";
  
  for (let i = 0; i < n; i++) {
    newString += front;
  }
  
  return newString;
}