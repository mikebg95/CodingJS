function minCat(a, b){
  return a.length < b.length ? a + b.substring(b.length - a.length) : a.substring(a.length - b.length) + b;
  
}