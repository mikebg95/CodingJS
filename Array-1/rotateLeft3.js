function rotateLeft3(nums){
  let result = [];
  for (let i = 1; i < nums.length; i++) {
      result[i-1] = nums[i];
  }
  result[result.length] = nums[0];
  return result;
}