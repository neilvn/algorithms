
function bSearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (target === arr[middle]) {
      return middle
    } else if (target > arr[middle]) {
      left = middle + 1
    } else if (target < arr[middle]) {
      right = middle - 1
    }
  }

  // returns the position where this target should be
  return Math.ceil((left + right) / 2)
}

const arr = [1, 2, 13, 14, 33, 45, 56, 100, 1234]

console.log(bSearch(arr, 28))
