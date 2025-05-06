// Reverse a linked list

/**
  * Reverse
  * @param {ListNode} head
  * @returns {ListNode}
*/
function reverse(head) {
  let node = null

  while (head) {
    const temp = head.next
    head.next = node
    node = head
    head = temp
  }

  return node
}
