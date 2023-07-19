function wordsWithoutList(words, len){
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === len) {
      words.splice(i, 1);
    }
  }
  return words;
}