function frontPiece(nums){
  if (nums.length <= 2) {
    return nums;  
  }
  return nums.splice(0, 2);
}