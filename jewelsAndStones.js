//O(N) First Solution
var numJewelsInStones = function (jewels, stones) {
  if (!jewels.length || !stones.length) return 0;
  let jewelsObject = {};
  let stonesObject = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    const value = jewels[i];
    if (!jewelsObject[value]) {
      jewelsObject[value] = 1;
    } else {
      jewelsObject[value]++;
    }
  }

  for (let i = 0; i < stones.length; i++) {
    const value = stones[i];
    if (!stonesObject[value]) {
      stonesObject[value] = 1;
    } else {
      stonesObject[value]++;
    }
  }

  for (let propety in stonesObject) {
    if (jewelsObject.hasOwnProperty(propety)) {
      count += stonesObject[propety];
    }
  }

  return count;
};

//O(N) Second Solution
var numJewelsInStones = function (jewels, stones) {
  if (!jewels.length || !stones.length) return 0;
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    count += jewels.indexOf(stones[i]) !== -1 ? 1 : 0;
  }
  return count;
};
