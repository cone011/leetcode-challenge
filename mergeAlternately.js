var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  let returnWord = "";
  while (i < word1.length && j < word2.length) {
    returnWord += word1[i];
    returnWord += word2[j];
    i++;
    j++;
  }
  while (i < word1.length) {
    returnWord += word1[i];
    i++;
  }
  while (j < word2.length) {
    returnWord += word2[j];
    j++;
  }
  return returnWord;
};
