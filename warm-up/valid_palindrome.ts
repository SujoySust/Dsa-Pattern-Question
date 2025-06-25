class ValidPalindrom {
  bruteForce(str: string): boolean {
    str = this.removeAlphaNumericChar(str);
    const mid = Math.floor(str.length / 2);
    for (let i = 0, j = str.length - 1; i < mid; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  }

  removeAlphaNumericChar(str: string): string {
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }
}

const validPalindrome = new ValidPalindrom();
console.log(validPalindrome.bruteForce("Was it a car or a cat I saw?"));
