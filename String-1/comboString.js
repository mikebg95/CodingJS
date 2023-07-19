function comboString(a, b){
  let long;
  let short;
  if (a.length < b.length) {
    short = a;
    long = b;
  }
  else {
    short = b;
    long = a;
  }
  
  return short + long + short;
  
}