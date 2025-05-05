// Depth first search

function dfs(root) {
  let stack = [root]
  let result = []

  while (stack.length) {
    const current = stack.pop()

    result.push(current)

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }

  return result
}
