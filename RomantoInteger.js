//O(N) FIRST SOLUTION
var romanToInt = function (s) {
  if (!s.length) return 0;
  let count = 0;
  let actual = 0;
  while (actual < s.length) {
    const value = s[actual];
    const next = s[actual + 1];
    switch (value) {
      case "I":
        if (next === "V") {
          count += 4;
          actual++;
          break;
        }
        if (next === "X") {
          count += 9;
          actual++;
          break;
        }
        count++;
        break;
      case "V":
        count += 5;
        break;
      case "X":
        if (next === "L") {
          count += 40;
          actual++;
          break;
        }
        if (next === "C") {
          count += 90;
          actual++;
          break;
        }
        count += 10;
        break;
      case "L":
        count += 50;
        break;
      case "C":
        if (next === "D") {
          count += 400;
          actual++;
          break;
        }
        if (next === "M") {
          count += 900;
          actual++;
          break;
        }
        count += 100;
        break;
      case "D":
        count += 500;
        break;
      case "M":
        count += 1000;
        break;
    }
    actual++;
  }
  return count;
};

//O(N) SECOND SOLUTION
var romanToInt = function (s) {
  if (!s.length) return 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    const next = s[i + 1];
    switch (value) {
      case "I":
        if (next === "V") {
          count += 4;
          i++;
          break;
        }
        if (next === "X") {
          count += 9;
          i++;
          break;
        }
        count++;
        break;
      case "V":
        count += 5;
        break;
      case "X":
        if (next === "L") {
          count += 40;
          i++;
          break;
        }
        if (next === "C") {
          count += 90;
          i++;
          break;
        }
        count += 10;
        break;
      case "L":
        count += 50;
        break;
      case "C":
        if (next === "D") {
          count += 400;
          i++;
          break;
        }
        if (next === "M") {
          count += 900;
          i++;
          break;
        }
        count += 100;
        break;
      case "D":
        count += 500;
        break;
      case "M":
        count += 1000;
        break;
    }
  }
  return count;
};

//O(N) THRID SOLUTION
var romanToInt = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        result += 4;
        i++;
      } else if (s[i + 1] === "X") {
        result += 9;
        i++;
      } else {
        result += 1;
      }
    } else if (s[i] === "V") {
      result += 5;
    } else if (s[i] === "X") {
      if (s[i + 1] === "L") {
        result += 40;
        i++;
      } else if (s[i + 1] === "C") {
        result += 90;
        i++;
      } else {
        result += 10;
      }
    } else if (s[i] === "L") {
      result += 50;
    } else if (s[i] === "C") {
      if (s[i + 1] === "D") {
        result += 400;
        i++;
      } else if (s[i + 1] === "M") {
        result += 900;
        i++;
      } else {
        result += 100;
      }
    } else if (s[i] === "D") {
      result += 500;
    } else if (s[i] === "M") {
      result += 1000;
    }
  }
  return result;
};
