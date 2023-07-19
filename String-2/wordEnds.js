function wordEnds(str, word){
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i+word.length) === word) {
      if (i >= 1) {
        result += str.charAt(i-1);
      }
      result += str.charAt(i+word.length);
    }
  }
  return result;
}