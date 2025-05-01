// Breadth first search to check the closest neighbors name that ends in m

function bfs(graph, node) {
  let queue = graph[node]

  while (queue.length) {
    let current = queue.shift()

    if (current[current.length - 1] === "m") {
      return current
    }

    queue = [...queue, ...graph[current]]
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
