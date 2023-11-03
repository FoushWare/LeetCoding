// Problem URL: https://leetcode.com/problems/build-array-from-permutation/submissions/1090838009/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let newNum=[]
    for(let i=0;i<nums.length;i++){
       newNum[i]=nums[nums[i]];
    }
    return newNum;
    
};
