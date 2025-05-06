// Quicksort

function quicksort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];

  let lower = arr.filter(val => val < pivot);
  let greater = arr.filter(val => val > pivot);

  return [...quicksort(lower), pivot, ...quicksort(greater)];
}

let array = [9, 4, 5, 7, 2, 3, 11, 1, 20];

console.log(quicksort(array));
