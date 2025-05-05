// Breadth first search to check the closest neighbors name that ends in m
function bfs(graph, node) {
  let queue = graph[node]
  let seen = new Set()

  while (queue.length) {
    let current = queue.shift()

    if (!seen.has(current)) {
      if (current[current.length - 1] === "m") {
        return current
      }
    }

    queue = [...queue, ...graph[current]]

    seen.add(current)
  }

  return "None"
}

const GRAPH = {
  me: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: []
}

console.log(bfs(GRAPH, "me"))


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
