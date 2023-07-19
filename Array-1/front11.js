function front11(a, b){
  if (a.length === 0 && b.length === 0) {
      return [];
  }
  
  if (a.length === 0) {
      return [b[0]];
  }
  
  if (b.length === 0) {
      return [a[0]];
  }
  
  return [a[0], b[0]];
}