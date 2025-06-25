class PairWithTargetSum {
  // O(n^2)
  bruteForce(arr: number[], target: number): number[] {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) return [i, j];
      }
    }
    return [-1, -1];
  }

  twoPointer(arr: number[], target: number): number[] {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
      const sum = arr[i] + arr[j];
      if (sum === target) return [i, j];
      else if (sum > target) j--;
      else i++;
    }
    return [-1, -1];
  }

  hashMap(arr: number[], target: number): number[] {
    const map: { [key in number]: number } = {};
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      if (map[complement]) return [map[complement], i];
      else map[arr[i]] = i;
    }
    return [-1, -1];
  }
}

const pairWithTargetSum = new PairWithTargetSum();
console.log(pairWithTargetSum.hashMap([1, 2, 3, 4, 6], 2));
