// + SUM OF TWO NUMBERS

const sumFunction = function (a, b) {
  return a + b;
};

const sum = sumFunction(5, 10);

console.log("Addition is: ", sum);

// - SUBSTRACTION OF TWO NUMBERS
const subFunction = function (a, b) {
  return a - b;
};

const sub = subFunction(10, 5);

console.log("Substraction is: ", sub);

// / FIND NUMBER IS ODD OR EVEN
const oddEvenFunction = function (num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

const oddEven = oddEvenFunction(11);

console.log("Number is: ", oddEven);
