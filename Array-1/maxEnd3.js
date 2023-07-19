function maxEnd3(nums){
  let larger = Math.max(nums[0], nums[nums.length-1];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = larger;
  }
  return nums;
}