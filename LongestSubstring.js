var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let start = 0;
  let letters = {};
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let value = s[i];
    console.log(value);
    if (letters[value]) {
      console.log(value);
      start = Math.max(start, letters[value]);
    }
    longest = Math.max(longest, i - start + 1);
    letters[value] = i + 1;
  }
  return longest;
};
