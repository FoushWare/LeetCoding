// Problem URL: https://leetcode.com/problems/build-array-from-permutation/submissions/1090838009/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let indeces={};
    for(let i=0;i<nums.length;i++){
       indeces[i]=nums[i]
    }
    for(let i=0;i<nums.length;i++){
        nums[i]=indeces[nums[i]]
    }
return nums;
    
};
