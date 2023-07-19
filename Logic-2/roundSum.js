function roundSum(a, b, c){
  return round10(a) + round10(b) + round10(c);
}

function round10(n) {
    return n % 10 < 5 ? n - n % 10 : n + 10 - n % 10;
  }
}