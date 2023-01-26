var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  let count = 0;
  let letters1 = s1.split("").sort().join();

  let letters2 = s2.split("").sort().join();
  if (letters1 !== letters2) return false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) count++;
    if (count > 2) return false;
  }
  return true;
};
