// BFS for a binary search tree

function breadthFirstSearch(root) {
  let queue = [root]
  let result = []

  while (queue.length) {
    const current = queue.shift()

    result.push(current)

    if (current.right) queue.push(result.right)
    if (current.left) queue.push(result.left)
  }

  return result
}
