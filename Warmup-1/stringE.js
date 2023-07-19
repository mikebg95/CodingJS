function stringE(str){
  return numberOfEs(str) >= 1 && numberOfEs(str) <= 3;
}

function numberOfEs(str) {
  let number = 0;
  for (let int i = 0; i < str.length; i++) {
    if (str.charAt(i) === "e") {
      number++;
    }
  }
  return number;
}