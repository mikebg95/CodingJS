function shareDigit(a, b){
  let aDigits = getDigits(a);
  let bDigits = getDigits(b);
  
  for (let i = 0; i < aDigits.length; i++) {
    if (bDigits.includes(aDigits[i])) {
      return true;
    }
  }
  return false;
  
  
}

function getDigits(n) {
  return [Math.floor(n / 10), n % 10];
}