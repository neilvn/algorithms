// Function that detects if there is a cycle in a linked list

/**
  * Cycle
  * @param {ListNode} head
  * @returns {boolean}
*/
function hasCycle(head) {
  let current = head
  let seen = new Set()

  while (current) {
    if (seen.has(current)) {
      return true
    }

    seen.add(current)
    current = current.next
  }

  return false
}
