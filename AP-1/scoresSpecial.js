function scoresSpecial(a, b){
  return highestSpecial(a) + highestSpecial(b);
 
}

function highestSpecial(n) {
  let specials = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 10 === 0) {
      specials.push(n[i]);
    }
  }
  
  if (specials.length === 0) {
    return 0;
  }
  else {
    return Math.max(...specials);
  }
}