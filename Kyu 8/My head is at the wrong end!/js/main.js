function fixTheMeerkat(arr) {
  let first = arr[2]
  let last = arr[0]
  arr.shift()
  arr.pop()
  arr.unshift(first)
  arr.push(last)
  return arr
  
}
