function midThree(nums){
  if (nums.length === 3) {
    return nums; 
  }
  
  let firstIndex = (nums.length-3)/2;
  
  return nums.slice(firstIndex, firstIndex+3);  
}