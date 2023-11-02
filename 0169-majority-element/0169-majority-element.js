/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
const numCounter = {};
 
nums.forEach(ele => {
    if (numCounter[ele]) {
        numCounter[ele] += 1;
    } else {
        numCounter[ele] = 1;
    }
});
console.log(numCounter);
const findKeys = (obj, val) =>
  Object.keys(obj).filter(key => obj[key] > val);
return findKeys(numCounter, (nums.length)/2);
};