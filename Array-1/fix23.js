function fix23(nums){
  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] === 2 && nums[i+1] === 3) {
      nums[i+1] = 0;  
    }
  }
  return nums;
}