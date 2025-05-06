// Best time to buy and sell stock

function buySellStock(prices) {
  let start = 0
  let end = 1
  let profit = 0

  while (end < prices.length) {
    if (prices[end] > prices[start]) {
      profit = Math.max(
        prices[end] - prices[start],
        profit
      )
    } else {
      start = end
    }

    end += 1
  }

  return profit
}

console.log(buySellStock([7,1,5,3,6,4]))
