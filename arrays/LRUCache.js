// LRU Cache using array
// * a doubly linked list would have constant time complexity, this is O(n)

class LRUCache {
  constructor(capacity) {
    this.arr = []
    this.map = {}
    this.capacity = capacity
  }

  get(key) {
    this.array = this.array.filter(item => item !== key)
    this.array.push(key)
    return map[key]
  }

  put(key, value) {
    if (!key in map) {
      if (this.capacity === this.array.length) {
        let removeKey = this.array.pop()
        delete map[removeKey]
      }
    } else {
      this.array = this.array.filter(item => item !== key)
    }

    map[key] = value
    this.array.push(key)
  }
}
