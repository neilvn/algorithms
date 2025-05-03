// Stack algorithms

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}


/**
  * Checks if a string of parentheses are matching
  * @param {string} str - Input string
  * @returns {boolean} Is string valid
*/
function checkParens(str) {
  let stack = new Stack()

  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];

    if (symbol === '(') {
      stack.push(symbol)
    } else {
      if (stack.isEmpty()) {
        return false
      } else {
        stack.pop()
      }
    }
  }

  if (stack.isEmpty()) return true

  return false
}


/**
  * Converts decimal number to binary
  * @param {number} num - Input number
  * @returns {string} Binary output
*/
function decToBinary(num) {
  let stack = new Stack()

  while (num > 0) {
    let remainder = num % 2
    stack.push(remainder)
    num = Math.floor(num / 2)
  }

  let output = ''
  while (!stack.isEmpty()) {
    output += stack.pop().toString()
  }
  
  return output
}


/**
  * Evaluate postfix expression
  * @param {string} exp - Postfix expression
  * @returns {number} Output
*/
function evaluatePostfix(exp) {
  let stack = new Stack()

  let tokenList = exp.split(' ')

  for (const token of tokenList) {
    if ('0123456789'.includes(token)) {
      stack.push(parseInt(token))
    } else {
      let operand2 = stack.pop()
      let operand1 = stack.pop()
      let result = doMath(operand1, operand2, token)
      stack.push(result)
    }
  }

  return stack.pop()
}

function doMath(op1, op2, symbol) {
  switch (symbol) {
    case '+':
      return op1 + op2
    case '-':
      return op1 - op2
    case '*':
      return op1 * op2
    default:
      return op1 / op2
  }
}
