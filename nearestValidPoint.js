var nearestValidPoint = function (x, y, points) {
  let minValue = 0;
  function recursiveWay(arr) {
    if (arr.length === 0) return minValue;
    let x2 = arr[0][0];
    let y2 = arr[0][1];
    if (x !== x2 || y !== y2) return -1;
    minValue = Math.min(minValue, Math.abs(x2 - x) + Math.min(y2 - y));
    console.log(arr[0]);
    return recursiveWay(arr.slice(1));
  }
  return recursiveWay(points);
};

var nearestValidPoint = function (x, y, points) {
  if (points.length === 0) return -1;
  let minValue = Infinity;
  let position = -1;
  for (let i = 0; i < points.length; i++) {
    let x2 = points[i][0];
    let y2 = points[i][1];
    if (x === x2 || y === y2) {
      let absValue = Math.abs(x2 - x) + Math.abs(y2 - y);
      if (absValue < minValue) {
        position = i;
        minValue = absValue;
      }
    }
  }
  return position;
};
