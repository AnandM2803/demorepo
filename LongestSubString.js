function lengthOfLongestSubstring(str) {
    const map = new Map();
    let start = 0;
    let maxLength = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (map.has(char)) {
        start = Math.max(start, map.get(char) + 1);
      }
      map.set(char, i);
      maxLength = Math.max(maxLength, i - start + 1);
    }
  
    return maxLength;
  }
  const str = "ababcbb";
console.log(lengthOfLongestSubstring(str)); 