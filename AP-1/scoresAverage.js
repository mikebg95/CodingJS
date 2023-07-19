function scoresAverage(scores){
  const firstHalf = scores.slice(0, scores.length / 2);
  const secondHalf = scores.slice(scores.length / 2);
  return Math.max(getAverage(firstHalf), getAverage(secondHalf));
}

function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  return sum / array.length;
}