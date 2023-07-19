function arrayCount9(nums){
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 9) {
      result++;
    }
  }
  return result;
}