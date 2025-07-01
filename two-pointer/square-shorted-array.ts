class SquareShortedArray {
  bruteForce(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.pow(arr[i], 2);
    }
    arr.sort((a, b) => a - b);
    return arr;
  }

  twoPointer(arr: number[]): number[] {
    let n = arr.length;
    let squares = Array(n).fill(0);
    let left = 0;
    let right = n - 1;
    while (n--) {
      const leftValue = Math.pow(arr[left], 2);
      const rightValue = Math.pow(arr[right], 2);
      if (leftValue > rightValue) {
        squares[n] = leftValue;
        left++;
      } else {
        squares[n] = rightValue;
        right--;
      }
    }
    return squares;
  }
}

const squareShortedArray = new SquareShortedArray();
console.log(squareShortedArray.twoPointer([-3, -1, 0, 1, 2]));
