// Remove the kth last node

type ListNode = {
  value?: number,
  next: ListNode,
}

function removeKthLast(root: ListNode, k: number): ListNode {
  let start: ListNode = { next: root }
  let trailer: ListNode = { next: root }
  
  for (let i = 0; i < k; i++) {
    start = start.next

    if (!start) return root
  }

  while (start.next) {
    start = start.next
    trailer = trailer.next
  }

  trailer.next = trailer.next.next

  return start.next
}
