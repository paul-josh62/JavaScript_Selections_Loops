console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++){
  if (i % 3 == 0) {
    console.log(i, 'FIZZ');
  } if (i % 5 == 0) {
    console.log(i, 'BUZZ');
  } if (i % 3 == 0 && i % 5 == 0){ 
    console.log(i, 'FIZZBUZZ');
  } else {
    console.log(i, '--------');
  } 
}
//console.log(15)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//Part 1

let i = 1;

/*do{
    console.log(i);
    i+=2
} while (i <= 100);*/

//Part 2

while (i <= 100) {
  if (i % 3 == 0) {
    console.log(i, 'FIZZ');
  } if (i % 5 == 0) {
    console.log(i, 'BUZZ');
  } if (i % 3 == 0 && i % 5 == 0){ 
    console.log(i, 'FIZZBUZZ');
  } else {
    console.log(i, '--------');
  }
  i++; 
}

console.log(i);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

function loopin(value, n) {
for (let i = 0; i <= n; i++){
    if (i == value){
      return console.log("Found Value! Which was " + value);
    }
}
  return console.log("Did not find value" + value);
}

loopin(value, n);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start; i <= end; i++){
  if (i % fizzDivisor == 0) {
    console.log(i, 'FIZZ');
  } if (i % buzzDivisor == 0) {
    console.log(i, 'BUZZ');
  } if (i % fizzDivisor == 0 && i % buzzDivisor == 0){ 
    console.log(i, 'FIZZBUZZ');
  } else {
    console.log(i, '--------');
  } 
}
