function everyNth(str, n){
  let newString = "";
  for (let i = 0; i < str.length; i += n) {
    newString += str.charAt(i);
  }
  return newString;
}