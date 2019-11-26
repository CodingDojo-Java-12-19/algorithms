function binarySearch(arr, value) {
  var midIndex = arr.length/2
  var count = 0

  var start = 0;
  var end = arr.length;

  while (start < end) {
    console.log('Start ', start)
    console.log('End ', end)
    if (value == arr[midIndex]) {
      return true
    }
    
    if (count++ > 20) {
      throw new Error('Count 100+')
    }
    if (value > arr[midIndex]) {
      start = midIndex +1
    } else {
      end = midIndex
    }

    midIndex = Math.floor((start+end) / 2)

  }

  return false


}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9))
console.log(binarySearch([0, 1, 2, 3, 7, 8, 9, 10], 7))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], -1))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1))