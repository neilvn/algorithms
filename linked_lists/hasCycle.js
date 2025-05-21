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


// Using constant space
/**
  * Constant space cycle detection
  * @param {ListNode} head
  * @returns {boolean}
*/
function hasCycleTwo(head) {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }

  return false
}

