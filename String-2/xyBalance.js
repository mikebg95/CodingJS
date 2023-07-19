function xyBalance(str){
  let balanced = true, i = 0;
  
  while (i < str.length) {
    if str.charAt(i) === 'x'
      balanced = false
    
    if str.charAt(i) === 'y'
      balanced = true
    
    i++
  }
  
  return balanced;
}