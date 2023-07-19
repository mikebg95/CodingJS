function wordsCount(words, len){
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toString().length === len) {
      result++;
    }
  }
  return result;
}