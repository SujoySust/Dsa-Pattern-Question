class NonDuplicateNumber {
  bruteForce(arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
      let j = i + 1;
      while (arr[i] == arr[j]) {
        arr.splice(j, 1);
      }
    }
    return arr.length;
  }

  twoPointer(arr: number[]): number {
    let nextNonduplicate = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        arr[nextNonduplicate] = arr[i];
        nextNonduplicate++;
      }
    }
    console.log(arr);
    return nextNonduplicate;
  }
}

const nonDuplicateNumber = new NonDuplicateNumber();
console.log(nonDuplicateNumber.twoPointer([2, 3, 3, 3, 6, 9, 9]));
