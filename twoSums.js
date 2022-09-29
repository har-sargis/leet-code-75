/**
 *
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

function twoSums(arr, target) {
  const indexes = {};
  const answer = [];
  arr.forEach((item, index) => {
    if (target - item in indexes) {
      answer.push(index, indexes[target - item]);
    } else {
      indexes[item] = index;
    }
  });
  console.log(answer)
  return answer;
}

twoSums([3,3], 6);
