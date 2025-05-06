// Calculate the maximum amount of volume a container can store

/**
  * maxVolume
  * @param {number[]} heights
  * @return {number}
*/
function maxVolume(heights) {
  let left = 0
  let right = heights.length - 1
  let volume = 0

  while (left < right) {
    const width = right - left
    const currentVolume = Math.min(heights[left], heights[right]) * width
    volume = Math.max(volume, currentVolume)

    if (heights[left] < heights[right]) {
      left++
    } else {
      right--
    }
  }
  return volume
}

console.log(maxVolume([1,8,6,2,5,4,8,3,7]))
