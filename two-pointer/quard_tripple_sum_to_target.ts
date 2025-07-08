class QuardTrippleSumToTarget {
  twoPointer(arr: number[], target: number) {
    arr.sort((a, b) => a - b);
    const results: [][] = [];
    for (let i = 0; i < arr.length - 3; i++) {
      if (i > 0 && arr[i] == arr[i - 1]) continue;
      for (let j = i + 1; j < arr.length - 2; j++) {
        if (j > i + 1 && arr[j] == arr[j - 1]) continue;
        this.searchNumber(arr, target, i, j, results);
      }
    }
    return results;
  }

  searchNumber(
    arr: number[],
    targetSum: number,
    first: number,
    second: number,
    results: number[][]
  ) {
    let left = second + 1;
    let right = arr.length - 1;
    while (left < right) {
      const currSum = arr[first] + arr[second] + arr[left] + arr[right];
      if (currSum == targetSum) {
        results.push([arr[first], arr[second], arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (currSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
}

const quardTrippleSum = new QuardTrippleSumToTarget();
console.log(quardTrippleSum.twoPointer([-2, -2, -1, -1, 0, 0, 1, 2], -5));
