/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // create memory
  const memory = {};
  // loop through array
  for (let i = 0; i < nums.length; i++) {
    // if the value is in the memory return true
    if (memory[nums[i]] === undefined) memory[nums[i]] = nums[i];
    else return true;
  }
  return false;
};

// Time Complexity O(N)
// space Complexity O(N)
