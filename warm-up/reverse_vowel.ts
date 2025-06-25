class ReverseVowel {
  bruteForce(str: string): string {
    const char = str.split("");
    let j = str.length - 1;
    for (let i = 0; i < char.length; i++) {
      if (this.isVowel(char[i])) {
        while (j > i) {
          if (this.isVowel(char[j])) {
            let temp = char[i];
            char[i] = char[j];
            char[j] = temp;
            j--;
            break;
          }
          j--;
        }
      }
    }
    return char.join("");
  }

  private isVowel(char: string) {
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
  }
}

const reverseVowel = new ReverseVowel();
console.log(reverseVowel.bruteForce("DesignGUrus"));
