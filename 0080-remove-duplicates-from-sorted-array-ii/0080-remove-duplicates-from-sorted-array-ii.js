/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
let currentPosition = 1;
if (nums.length === 1) {
    k=1;
}
else
{
for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[currentPosition-1]) {
        currentPosition++;
        nums[currentPosition] = nums[i];
    }      
}
k=currentPosition+1;
nums.length = currentPosition+1;
}
};