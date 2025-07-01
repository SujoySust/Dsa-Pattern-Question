class TripletSumCloseToTarget {
  bruteForce(arr: number[], target: number) {
    let targetDiff = Infinity;
    let pairSum: number = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          const currSum = arr[i] + arr[j] + arr[k];
          const currDiff = Math.abs(target - currSum);
          if (currDiff < targetDiff) {
            targetDiff = currDiff;
            pairSum = currSum;
          }
        }
      }
    }
    return pairSum;
  }

  twoPointer(arr: number[], targetSum: number) {
    if (!arr || arr.length < 3) return arr;
    arr.sort((a, b) => a - b);
    let smallestDiff = Infinity;
    for (let i = 0; i < arr.length; i++) {
      let left = i + 1;
      let right = arr.length - 1;
      while (left < right) {
        const targetDiff = targetSum - arr[i] - arr[left] - arr[right];
        if (targetDiff == 0) return targetSum;
        if (
          Math.abs(targetDiff) < Math.abs(smallestDiff) ||
          (Math.abs(targetDiff) == Math.abs(smallestDiff) &&
            targetDiff > smallestDiff)
        ) {
          smallestDiff = targetDiff;
        }
        if (targetDiff > 0) left++;
        else right--;
      }
    }
    return targetSum - smallestDiff;
  }
}

const tripletSumCloseToTarget = new TripletSumCloseToTarget();
console.log(tripletSumCloseToTarget.twoPointer([0, 0, 1, 1, 2, 6], 5));
