class TripletWithSmallerSum {
  bruteForce(arr: number[], target: number) {
    const result: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] < target) {
            result.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
    return result.length;
  }

  twoPointer(arr: number[], target: number) {
    let result: number[][] = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] >= target) break;
      const targetSum = target - arr[i];
      this.searchTriplet(arr, targetSum, i, result);
    }
    return result.length;
  }

  private searchTriplet(
    arr: number[],
    targetSum: number,
    first: number,
    result: number[][]
  ) {
    let left = first + 1;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] + arr[right] < targetSum) {
        for (let i = right; i > left; i--) {
          result.push([arr[first], arr[left], arr[i]]);
        }
        left++;
      } else {
        right--;
      }
    }
    return result;
  }
}

const tripletWithSmallerSum = new TripletWithSmallerSum();
console.log(tripletWithSmallerSum.twoPointer([-1, 4, 2, 1, 3], 5));
