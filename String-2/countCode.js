function countCode(str){
  let i = 0; sum = 0;
  while i < str.length {
    if str.slice(i, i+2) === "co" && str.charAt(i+3) === 'e'
      sum++;
    i++;
  }
  return sum;
}