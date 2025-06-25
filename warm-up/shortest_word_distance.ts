class ShortestWordDistance {
  // Time Complexity: O(n^2)
  // Space Complexity: O(1)
  bruteForce(words: string[], word1: string, word2: string): number {
    let minDistance = Infinity;
    for (let i = 0, j = words.length; i < words.length; i++, j--) {
      if (words[i] === word1) {
        for (let k = i + 1; k < words.length; k++) {
          if (words[k] === word2) {
            minDistance = Math.min(minDistance, k - i);
            break;
          }
        }
      }
      if (words[j] === word1) {
        for (let k = j - 1; k >= 0; k--) {
          if (words[k] === word2) {
            minDistance = Math.min(minDistance, j - k);
            break;
          }
        }
      }
    }
    return minDistance;
  }

  // Time Complexity: O(n)
  // Space Complexity: O(1)
  optimalSolution(words: string[], word1: string, word2: string): number {
    let shortestDistance = words.length;

    let position1 = -1;
    let position2 = -1;

    for (let i = 0; i < words.length; i++) {
      if (words[i] === word1) position1 = i;
      else if (words[i] === word2) position2 = i;
    }

    shortestDistance = Math.min(
      shortestDistance,
      Math.abs(position1 - position2)
    );

    return shortestDistance;
  }
}

const shortestWordDistance = new ShortestWordDistance();
// console.log(
//   shortestWordDistance.bruteForce(
//     ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
//     "fox",
//     "dog"
//   )
// );

console.log(
  shortestWordDistance.optimalSolution(["a", "c", "d", "b", "a"], "a", "b")
);

// console.log(
//   shortestWordDistance.bruteForce(["a", "b", "c", "d", "e"], "a", "e")
// );
