// ~ JAVASCRIPT FUNCTIONS ~ //

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

// ~ JAVASCRIPT ARRAYS ~ //

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log(fruits);

console.log((firstFruit = fruits[0]));

console.log((secondFruit = fruits[1]));

// + add a new fruit to the array at the end using push method
fruits.push("Fig");

console.log(fruits);

// - remove the last fruit from the array using pop method
fruits.pop();

console.log(fruits);

// + add a new fruit to the array at the beginning using unshift method
fruits.unshift("Grapes");

console.log(fruits);

// - remove the first fruit from the array using shift method
fruits.shift();

console.log(fruits);

// + find the index of a specific fruit using indexOf method
const indexOfCherry = fruits.indexOf("Cherry");

console.log(indexOfCherry);

// - check if a specific fruit exists in the array using includes method
const hasBanana = fruits.includes("Banana");
console.log(hasBanana);

// * seperate the array elements using slice method
const favoriteFruits = fruits.slice(1, 3);
console.log(favoriteFruits);

// @ ARRAY ITERATION METHODS

const allFruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log(allFruits);

// ITERATION WITH FOR

console.log("ITERATION WITH FOR LOOP");
for (let i = 0; i < allFruits.length; i++) {
  const fruit = allFruits[i];
  console.log(fruit);
}

// ITERATION WITH FOREACH

console.log("ITERATION WITH FOREACH LOOP");

allFruits.forEach((fruit) => {
  console.log(fruit);
});

// CREATE ARRAY OF NUMBER O TO 20 USING LOOP

console.log("CREATE ARRAY OF NUMBER O TO 20 USING LOOP");
const numbers = [];
for (let i = 0; i <= 20; i++) {
  numbers.push(i);
}
console.log(numbers);

console.log("GET NUMBERS FROM numbers DIVISIBLE BY 5 USING FOREACH");

// GET NUMBERS FROM numbers DIVISIBLE BY 5 USING FOREACH
const divisibleByFive = [];
numbers.forEach((number) => {
  if (number % 5 === 0) {
    divisibleByFive.push(number);
  }
});
console.log(divisibleByFive);
