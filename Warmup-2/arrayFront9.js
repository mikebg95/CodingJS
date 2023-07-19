function arrayFront9(nums){
  if (nums.length < 4) {
    return nums.includes(9);
  }
  else {
    for (let i = 0; i < 4; i++) {
      if (nums[i] === 9) {
        return true;
      }
    }
    return false;
  }  
}