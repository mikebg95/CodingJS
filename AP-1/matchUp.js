function matchUp(a, b){
  let sum = 0;
  
  for (let i = 0; i < a.length; i++) {
    if differ(a[i], b[i]) {
      sum++;
    }
  }
  
  return sum;
  
}

function differ(m, n) {
  const absDiff = Math.abs(m - n);
  return absDiff === 1 || absDiff === 2;
}