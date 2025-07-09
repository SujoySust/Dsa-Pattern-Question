class ComparingStringContainingBackspace {
  static bruteForce(str1: string, str2: string): boolean {
    // Convert strings to arrays for easier manipulation
    const arr1 = str1.split("");
    let arr2 = str2.split("");

    // Process backspaces in first string
    let validIndex1 = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== "#") {
        arr1[validIndex1] = arr1[i];
        validIndex1++;
      } else if (validIndex1 > 0) {
        validIndex1--; // Remove previous character
      }
    }

    // Process backspaces in second string
    let validIndex2 = 0;
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] !== "#") {
        arr2[validIndex2] = arr2[i];
        validIndex2++;
      } else if (validIndex2 > 0) {
        validIndex2--; // Remove previous character
      }
    }

    // Compare the processed strings
    if (validIndex1 !== validIndex2) return false;

    for (let i = 0; i < validIndex1; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  }
}

console.log(ComparingStringContainingBackspace.bruteForce("xp#", "xyz##"));
