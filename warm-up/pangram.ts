class Pangram {
  bruteForceSolution(sentence: string): boolean {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let char of alphabet) {
      let found = false;
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() === char) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }

    return true;
  }

  setSolution(sentence: string): boolean {
    const set = new Set();
    for (let i = 0; i < sentence.length; i++) {
      const currChar = sentence[i].toLocaleLowerCase();
      if (/[a-z]/.test(currChar)) {
        set.add(currChar);
      }
    }
    return set.size == 26;
  }
}

const pangram = new Pangram();
console.log(pangram.setSolution("TheQuickBrownFoxJumpsOverTheLazyDog"));
console.log(pangram.setSolution("This is not a pangram"));
