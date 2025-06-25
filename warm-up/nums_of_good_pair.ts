class NumsOfGoodPair {
  // Time Complexity: O(n^2)
  // Space Complexity: O(1)
  bruteForce(nums: number[]): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] == nums[j]) count++;
      }
    }
    return count;
  }

  // Time Complexity: O(n)
  // Space Complexity: O(n)
  optimalSolution(nums: number[]): number {
    const map = new Map<number, number>();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for (const value of map.values()) {
      count += (value * (value - 1)) / 2;
    }

    return count;
  }
}

const numsOfGoodPair = new NumsOfGoodPair();
console.log(numsOfGoodPair.optimalSolution([1, 2, 3, 1, 1, 3]));
