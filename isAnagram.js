var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let letterS = {};
  let letterT = {};

  s.split("").forEach((item) => {
    if (!letterS[item]) {
      letterS[item] = 1;
    } else {
      letterS[item]++;
    }
  });

  t.split("").forEach((item) => {
    if (!letterT[item]) {
      letterT[item] = 1;
    } else {
      letterT[item]++;
    }
  });

  for (let key in letterS) {
    if (letterS[key] !== letterT[key]) return false;
  }

  return true;
};
