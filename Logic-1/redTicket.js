function redTicket(a, b, c){
  if (a === b && b === c) {
    return a === 2 ? 10 : 5;  
  }
  return b !== a && c !== a ? 1 : 0;
}