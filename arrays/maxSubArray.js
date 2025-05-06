// Find the subarray with the highest sum in arr

/**
  * @param {number[]} nums - An array of numbers
  * @returns {number} 
*/
function maxSubArray(nums) {
  let result = nums[0]
  let total = 0

  for (const num of nums) {
    if (total < 0) {
      total = 0
    }

    total += num
    result = Math.max(total, result)
  }

  return result
}
