//O(N) FIRST SOLUTION
var arrayStringsAreEqual = function (word1, word2) {
  const firstWord = word1.join("");
  const secondWord = word2.join("");
  if (firstWord.length !== secondWord.length) return false;
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== secondWord[i]) return false;
  }
  return true;
};
