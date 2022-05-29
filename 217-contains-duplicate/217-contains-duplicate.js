/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // get meta data from the input array by sorting it
  const sortedArray = nums.sort((a, b) => b - a);
  // loop through the sortedArray
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) return true;
  }
  return false;
};

// Time Complexity O(N)
// space Complexity O(N)
