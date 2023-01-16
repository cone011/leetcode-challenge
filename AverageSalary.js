var average = function (salary) {
  salary.sort((a, b) => {
    return a - b;
  });
  let total = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    total += salary[i];
  }
  return total / (salary.length - 2);
};
