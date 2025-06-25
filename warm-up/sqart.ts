class Sqart {
  binarySearch(num: number): number {
    if (num < 2) return num;
    let left = 2;
    let right = num / 2;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      const square = mid * mid;
      if (square === num) return mid;
      if (square > num) right = mid - 1;
      else left = mid + 1;
    }
    return right;
  }
}

const sqart = new Sqart();
console.log(sqart.binarySearch(2));
