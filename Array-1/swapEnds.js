function swapEnds(nums){
  [nums[0], nums[nums.length-1]] = [nums[nums.length-1], nums[0]];
  return nums;
}