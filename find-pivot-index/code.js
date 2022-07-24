/**
 * @param {number[]} nums
 * @return {number}
 */

var sumFromSpecificIndex = function (nums, index) {
	// using slice and reduce 
	return nums.slice(index).reduce((a, b) => a + b, 0);
}
var pivotIndex = function (nums) {
	//     loop through the array and for each element keep track the [previous,next] sum 
	//     make the prev=0 at the first time and keep adding when reach to the element in the loop
	//     make next=sum of all elements of the array and each iteration subtract the current element from next

	let prev = 0;
	let next = 0;
	for (let i = 0; i < nums.length; i++) {
		next = sumFromSpecificIndex(nums, i + 1);
		if (i > 0) prev += nums[i - 1];
		if (next === prev) return i;
	}
	return -1;
}




console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));

