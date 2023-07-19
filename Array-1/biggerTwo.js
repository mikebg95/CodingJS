function biggerTwo(a, b){
  let sumA = a[0] + a[1];
  let sumB = b[0] + b[1];
  
  if (sumA === sumB) {
    return a;  
  } 
  
  let largest = Math.max(sumA, sumB);
  
  return largest === sumA ? a : b;
}