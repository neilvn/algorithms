// Simple recursive functions 

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4, 5]));

function countX(string) {
  if (string.length === 0) return 0;

  if (string[0] === 'x') {
    return 1 + countX(string.slice(1));
  }

  return countX(string.slice(1));
}

  console.log(countX('xx4xx8xx67xx'))
