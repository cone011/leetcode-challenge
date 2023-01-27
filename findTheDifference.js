var findTheDifference = function (s, t) {
  let sumLetter1 = 0;
  let sumLetter2 = 0;
  for (let i = 0; i < s.length; i++) {
    sumLetter1 += s[i].charCodeAt();
  }
  for (let j = 0; j < t.length; j++) {
    sumLetter2 += t[j].charCodeAt();
  }
  return String.fromCharCode(sumLetter2 - sumLetter1);
};
