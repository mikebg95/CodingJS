function scoreUp(key, answers){
  
  let count = 0, i = 0;
  while (i < answers.length) {
    if (answers[i] !== '?') {
      if (key[i] === answers[i]){
        count += 4;  
      }
      else {
        count--;
      }
    }
    
    i++;
  }
  return count;
}