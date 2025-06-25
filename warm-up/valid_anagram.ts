class ValidAnagram {
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  mapSolution(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
      if (!map.has(t[i])) return false;
      map.set(t[i], map.get(t[i])! - 1);
    }

    for (const value of map.values()) {
      if (value !== 0) return false;
    }

    return true;
  }

  // Time Complexity: O(n log n)
  // Space Complexity: O(1)
  sortSolution(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("");
  }
}

const validAnagram = new ValidAnagram();
console.log(validAnagram.mapSolution("anagram", "nagaram"));
console.log(validAnagram.sortSolution("anagram", "nagaram"));
