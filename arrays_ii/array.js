function balancePoint(arr) {
  var rightSum = 0
  for (let i = 0; i < arr.length; i++) {
    rightSum += arr[i]
  }

  var leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i]
    rightSum -= arr[i]
    // console.log('Left sum is', leftSum, 'Right sum is ', rightSum)
    if (leftSum == rightSum) {
      return true
    }

  }
  return false
}


console.log(balancePoint([1, 2, 3, 4, 10]))
console.log(balancePoint([1, 2, 4, 2, 1]))