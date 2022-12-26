//O(N) FIRST SOLUTION
var mostWordsFound = function (sentences) {
  if (!sentences.length) return 0;
  const arrReturn = [];
  for (let i = 0; i < sentences.length; i++) {
    const value = sentences[i];
    arrReturn.push(value.split(" ").length);
  }
  return Math.max(...arrReturn);
};
