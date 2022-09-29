/**
Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.
 */

var containsDuplicate = function(nums) {
  const set = new Set();
  for(let i = 0; i < nums.length; ++i) {
    if(set.has(nums[i])) {
      console.log(true);
      return true
    }
    set.add(nums[i]);
  }
  console.log(false);
  return false;
};

containsDuplicate([1,2,3,4])