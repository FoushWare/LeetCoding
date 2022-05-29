/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // loop through the nums array [1,2,3,1]
  for (let i = 0; i < nums.length-1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
			//     for each element compare with the next ones
      if (nums[i] === nums[j]) return true;
    }
  }
  //     if equal return true if not return false
  return false;
};

// Time Complexity o(n^2)
// space Complexity o(1)
