class DutchNationalFlag {
  bruteForce(arr: number[]) {
    return arr.sort((a, b) => a - b);
  }

  twoPointer(arr: number[]) {
    let i = 0;
    let left = 0;
    let right = arr.length - 1;
    while (i <= right) {
      if (arr[i] == 0) {
        [arr[i], arr[left]] = [arr[left], arr[i]];
        left++;
        i++;
      } else if (arr[i] == 2) {
        [arr[i], arr[right]] = [arr[right], arr[i]];
        right--;
      } else {
        i++;
      }
    }
    return arr;
  }

  swap(arr: number[], index_1: number, index_2: number) {
    let temp = arr[index_1];
    arr[index_1] = arr[index_2];
    arr[index_2] = temp;
  }
}

const dutchNationalFlag = new DutchNationalFlag();
console.log(dutchNationalFlag.twoPointer([1, 0, 2, 1, 0]));
