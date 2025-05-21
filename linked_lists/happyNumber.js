// A happy number is a number where if you repeatedly square the digits and
// add those squares, the sum eventually becomes 1

function getNextNumber(num) {
  let nextNum = 0

  while (num > 0) {
    let digit = num % 10

    num = Math.floow(num / 10)
    nextNum += digit * digit
  }

  return nextNum
}

function happyNumber(n) {
  let slow = n
  let fast = n

  while (true) {
    slow = getNextNumber(slow)
    fast = getNextNumber(getNextNumber(fast))

    if (fast === 1) return true

    if (fast === slow) return false
  }
}
