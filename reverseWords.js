var reverseWords = function (s) {
  let arr = s.split(" ");
  let newValue = arr.map((item) => {
    return item.split("").reverse().join("");
  });
  return newValue.join(" ");
};

var reverseWords = function (s) {
  let arr = s.split(" ");
  let reverseValue = "";
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    reverseValue += value.split("").reverse().join("");
    if (i < arr.length - 1) reverseValue += " ";
  }
  return reverseValue;
};

var reverseWords = function (s) {
  let arr = s.split(" ");
  function reverse(arr) {
    if (arr.length <= 1)
      return arr[arr.length - 1].split("").reverse().join("");
    return (
      reverse(arr.slice(0, -1)) +
      " " +
      arr[arr.length - 1].split("").reverse().join("")
    );
  }
  return reverse(arr);
};
