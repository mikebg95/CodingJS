function double23(nums){
  if (nums.length <= 1) {
    return false;  
  }
  return nums[0] === nums[1] && (nums[0] === 2 || nums[1] === 3);
}