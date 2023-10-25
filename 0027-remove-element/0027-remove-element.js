/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
let k = nums.length;
        
for (let i = k; i > -1; i--) {
  if (nums[i] === val) {
      nums.splice(i, 1)
      k--;
  }
}     
};