// Given a sorted array, implement a binary search

const input = [1, 2, 3, 4, 6, 7, 8, 9, 12, 13, 23, 55, 94, 113, 190, 1112]

const target = 113

function search(arr, target)  {
  let start = 0
  let end = arr.length - 1
  
  while (start <= end) {
    let middle = Math.floor((end + start) / 2)

    if (arr[middle] === target) {
      return middle
    } else if (arr[middle] > target) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  return -1
}

let result = search(input, target)

console.log(result)
