// Given strings s and t, return how many instances theres exists an anagram of t in s

function addToFreqMap(map, value, operation) {
  if (value in map) {
    if (operation === '+') {
      map[value] += 1
    } else if (map[value] === 1) {
      delete map[value]
    } else {
      map[value] -= 1
    }
  } else {
    map[value] = 1
  }
}

function areMapsEqual(map1, map2) {
  if (Object.keys(map1).length !== Object.keys(map2).length) return false

  for (const key of Object.keys(map1)) {
    if (map1[key] !== map2[key]) {
      return false
    }
  }

  return true
}

function substringAnagrams(s, t) {
  let count = 0

  let tFreq = {}
  let sFreq = {}

  for (const letter of t) {
    addToFreqMap(tFreq, letter, '+')
  }
  
  let left = 0
  let right = 0

  while (right < s.length) {
    addToFreqMap(sFreq, s[right], '+')

    if (right - left + 1 === t.length) {
      if (areMapsEqual(sFreq, tFreq)) {
        count += 1
      }

      addToFreqMap(sFreq, s[left], '-')
      left += 1
    }
    right += 1
  }
  return count
}

let s = 'caabababa'
let t = 'aba'

console.log(substringAnagrams(s, t))
