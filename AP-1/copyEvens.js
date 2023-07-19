function copyEvens(nums, count){
  let result = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (result.length === count) {
      return result;
    }
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
  
}