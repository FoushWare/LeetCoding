// Problem URL: https://leetcode.com/problems/build-array-from-permutation/submissions/1090838009/

// low space but hight time 
// This solution utilizes the concept of encoding two values in a single element of the array, 
// then decoding them to obtain the final result. 
// It reduces the space complexity from O(n) to O(1) by modifying the input array in place.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    nums[i] = nums[i] + n * (nums[nums[i] % n] % n);
  }

  for (let i = 0; i < n; i++) {
    nums[i] = Math.floor(nums[i] / n);
  }

  return nums;
    
};
