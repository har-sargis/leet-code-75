/**

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
 */

function maxProduct(nums) {
  let maxProduct = 1,
    minProduct = 1,
    res = Math.max(...nums);
  for (let i = 0; i < nums.length; ++i) {
    temp = maxProduct * nums[i];
    maxProduct = Math.max(temp, minProduct * nums[i], nums[i]);
    minProduct = Math.min(temp, minProduct * nums[i], nums[i]);
    res = Math.max(res, maxProduct, minProduct)
  }

  console.log(res);
  return res;
}

// maxProduct([-2,0,-1])
// maxProduct([2, 1, -2, -4])
maxProduct([2,3,-2,4])
