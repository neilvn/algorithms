// Quicksort

function quicksort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];

  let lower = [];
  let greater = [];

  for (const value of arr) {
    if (value < pivot) {
      lower.push(value);
    } else if (value > pivot) {
      greater.push(value);
    }
  }

  return [...quicksort(lower), pivot, ...quicksort(greater)];
}

let array = [9, 4, 5, 7, 2, 3, 11, 1, 20];

console.log(quicksort(array));
