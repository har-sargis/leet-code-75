/**
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.
 */

function maxSubArray(nums) {
  let curr = 0;
  let max = -Infinity;
  for(let i = 0; i < nums.length; ++i) {
    curr = Math.max(curr + nums[i], nums[i]);
    max = Math.max(max, curr)
  }

  console.log(max);
  return max;
}

maxSubArray([5,4,-1,7,8]);
