function makeLast(nums){
  let result = [];
  
  for (let i = 0; i < nums.length*2-1; i++) {
    result.push(0);
  }
  
  result.push(nums[nums.length-1]);
  return result;
}