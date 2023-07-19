function hasOne(n){
  const str = n.toString();
  
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '1'){
      return true;
    }
  }
  
  return false;
}