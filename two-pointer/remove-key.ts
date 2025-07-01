class RemoveKey {
  twoPointer(arr: number[], key: number): number {
    let next = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== key) {
        arr[next] = arr[i];
        next++;
      }
    }
    return next;
  }
}

const removeKey = new RemoveKey();
console.log(removeKey.twoPointer([3, 2, 3, 6, 3, 10, 9, 3], 3));
