function sumLimit(a, b){
  let sum = a + b;
  let sumDigits = sum.toString().length;
  let aDigits = a.toString().length;
  if (sumDigits > aDigits) {
    return a;
  }
  else {
    return a + b;
  }
}