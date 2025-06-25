class ContainsDuplicate {
  bruteForce(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  }

  hashMap(nums: number[]): boolean {
    const duplicate: { [key in number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
      if (duplicate[nums[i]]) return true;
      duplicate[nums[i]] = 1;
    }
    return false;
  }

  usingSet(nums: number[]): boolean {
    const set = new Set(nums);
    return set.size !== nums.length;
  }
}

const containsDuplicate = new ContainsDuplicate();

console.log("bruteforce", containsDuplicate.bruteForce([3, 2, 6, -1, 2, 1]));
console.log("hashmap", containsDuplicate.hashMap([3, 2, 6, -1, 2, 1]));
console.log("set", containsDuplicate.usingSet([3, 2, 6, -1, 2, 1]));
