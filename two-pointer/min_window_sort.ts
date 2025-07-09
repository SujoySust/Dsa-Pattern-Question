class MinimumWindowSort {
  static twoPointer(arr: number[]) {
    let left = 0;
    let right = arr.length - 1;

    while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
      left++;
    }

    if (left == arr.length - 1) return 0;

    while (right > 0 && arr[right] >= arr[right - 1]) {
      right--;
    }

    let min = Infinity;
    let max = -Infinity;

    for (let i = left; i <= right; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }

    while (left > 0 && arr[left - 1] > min) {
      left--;
    }
    while (right < arr.length - 1 && arr[right + 1] < max) {
      right++;
    }
    return right - left + 1;
  }
}

console.log(MinimumWindowSort.twoPointer([3, 3, 2, 2]));
