function noTriples(nums){
  return !hasTriples(nums);
}
    
function hasTriples(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i+1] && array[i] === array[i+2]) {
      return true;
    }
  }
  return false;
}