function sleepSort(arr: number[]) {
  for (const item of arr) {
    setTimeout(() => console.log(item), item);
  }
}

const arr = [10, 1, 40, 15, 20, 5, 25, 30, 35, 2, 3, 4];

sleepSort(arr);
