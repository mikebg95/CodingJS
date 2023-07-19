function greenTicket(a, b, c){
  if (a === b && b === c) {
    return 20;  
  }
  return (a !== b && b !== c && a !== c) ? 0 : 10; 
}