class TripletSumToZero {
  bruteForce(arr: number[]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            result.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
    return result;
  }

  twoPointer(arr: number[]): number[][] {
    const result: number[][] = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1;
      let right = arr.length - 1;
      if (arr[i] > 0) return result;
      if (i > 0 && arr[i] == arr[i - 1]) continue;
      while (left < right) {
        const currSum = arr[left] + arr[right];
        if (arr[i] + currSum == 0) {
          result.push([arr[i], arr[left], arr[right]]);
          left++;
          right--;
          while (arr[left - 1] == arr[left]) left++;
          while (arr[right] == arr[right + 1]) right--;
        } else if (-arr[i] > currSum) {
          left++;
        } else {
          right--;
        }
      }
    }

    return result;
  }
}

const tripletSumToZero = new TripletSumToZero();
console.log(tripletSumToZero.twoPointer([-1, 0, 1, 2, -1, -4]));
