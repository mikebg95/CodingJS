function make2(a, b){
  if (a.length === 0) {
      return b.splice(0, 2);
  }
  else if (a.length === 1) {
      return [a[0], b[0]];
  }
  else {
      return a.splice(0,2);
  }
}