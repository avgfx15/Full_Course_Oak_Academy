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

// $ JAVASCRIPT OBJECT

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

console.log(person);
console.log("Name: ", person.name);
console.log("Age: ", person.age);

const blogPost = {
  title: "Understanding JavaScript Objects",
  author: "John Doe",
  date: "2020-01-01",
  content: "This is a blog post about JavaScript objects.",
  tags: ["JavaScript", "Programming", "Web Development"],
  comments: [
    {
      author: "Jane Smith",
    },
    {
      author: "Bob Johnson",
    },
  ],
  getSummary: function () {
    return `${this.title} by ${this.author}`;
  },
  likes: [
    {
      user: "Alice",
      date: "2020-01-02",
    },
    {
      user: "Bob",
      date: "2020-01-03",
    },
  ],
};

console.log(blogPost);
console.log("Blog Post Title: ", blogPost.title);
console.log("Author: ", blogPost.author);
console.log("Date: ", blogPost.date);
console.log("Content: ", blogPost.content);
console.log("Tags: ", blogPost.tags);
console.log("Comments: ", blogPost.comments);
console.log("First Comment Author: ", blogPost.comments[0].author);
console.log("Second Comment Author: ", blogPost.comments[1].author);
console.log("Blog Post Summary: ", blogPost.getSummary());

blogPost.tags.forEach((tag) => {
  console.log("Tag: ", tag);
});

blogPost.likes.forEach((like) => {
  console.log("Liked by: ", like.user, " on ", like.date);
});

// @ JAVASCRIPT FUNCTIONS WITH OBJECTS
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    console.log(`${this.make} ${this.model} is starting.`);
  },
  stop: function () {
    console.log(`${this.make} ${this.model} is stopping.`);
  },
};

console.log("Car Make: ", car.make);
console.log("Car Model: ", car.model);
console.log("Car Year: ", car.year);
car.start();
car.stop();

// - ADDING A NEW METHOD TO THE OBJECT
car.honk = function () {
  console.log(`${this.make} ${this.model} is honking.`);
};

car.honk();
