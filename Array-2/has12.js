function has12(nums){
  let reached = false;
  
  for (let i = 0; i < nums.length; i++) {
    if reached && nums[i] === 2 {  
      return true;
    }
    if nums[i] === 1 {
      reached = true;
    }
  }
  
  return false;
}