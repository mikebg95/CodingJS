function endOther(a, b){
  a = a.toLowerCase();
  b = b.toLowerCase();
  
  return a.slice(a.length-b.length) === b || b.slice(b.length-a.length) === a;
}