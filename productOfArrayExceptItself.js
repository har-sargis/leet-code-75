/**
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
 */


var productExceptSelf = function(nums) {
  const res = Array(nums.length).fill(1);;

  let preFix = 1;
  for (let i = 1; i < nums.length; ++i) {
    res[i] = res[i - 1] * preFix;
    preFix = nums[i];
  }

  let postFix = 1;
  for (let i = res.length - 1 ; i >= 0; --i) {
    res[i] = res[i] * postFix;
    postFix = nums[i] * postFix
  }

  console.log(res);
  return res;
};

productExceptSelf([1,2,3,4]);
