// Flatten all the values in arrays

function flatten(arr) {
  let result = []
  
  for (const item of arr) {
    if (typeof item === 'number') {
      result = [...result, item]    
    } else {
      result = [...result, ...flatten(item)]
    }
  }

  return result
}

let test = [1, 2, [1, [1, 2], 3], 9]

console.log(flatten(test))
