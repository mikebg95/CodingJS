function dividesSelf(n){
  let array = Array.from(n.toString());
  for (let i = 0; i < array.length; i++) {
      if (hasDecimal(n / array[i])) {
        return false;
      }
  }
  
  return true;
}

function hasDecimal(num) {
  return num % 1 !== 0;
}