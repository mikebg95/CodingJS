function copyEndy(nums, count){
  let result = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (result.length === count) {
      return result;
    }
    
    if (isEndy(nums[i]) {
      result.push(nums[i]);
    }
  }
  return result;
}

function isEndy(n) {
  return (n >= 0 && n <= 10) || (n >= 90 && n <= 100);
}