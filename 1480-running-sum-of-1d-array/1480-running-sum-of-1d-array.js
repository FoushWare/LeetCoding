// running sum of a list of numbers
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		nums[i] = sum;
	}
	return nums;
}

console.log(runningSum([1, 2, 3, 4]));