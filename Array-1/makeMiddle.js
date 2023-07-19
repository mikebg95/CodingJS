function makeMiddle(nums){
  let result = [];
  let firstIndex = (nums.length-2) / 2;
  result.push(nums[firstIndex], nums[firstIndex+1]);
  return result;
}