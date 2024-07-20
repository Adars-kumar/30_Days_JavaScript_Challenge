// -----  Activity-1 [ Arithmetic Operators ] ------
let a = 5;
let b = 6;
// Task-1 pogram to add two numbers.
let sum = a + b;
// Task-2 pogram to subtract two numbers.
let sub = a - b;
// Task-3 pogram to Multiply two numbers.
let mul = a * b;
// Task-4 pogram to divide two numbers.
let div = a / b;
// Task-5 pogram to find remainder.
let rem = a % b;

console.log("Addition of a + b = " + sum);
console.log("Subtraction of a - b = " + sub);
console.log("Multiplication of a * b = " + mul);
console.log("Division of a / b = " + div);
console.log("Remainder of a % b = " + rem);

// -----  Activity-2 [ Assignment Operators ] ------
// Task-6 Use += operator to add anumber from a variable
let num = 6;
num += 2;
console.log("Sum = " + num);

// Task-7 Use -= operator to add anumber from a variable
let num1 = 6;
num1 -= 2;
console.log("Sum = " + num1);

// -----  Activity-3 [ Comparison Operators ] ------
// Task-8 Program to compare two nmber using > and <
let age = 30;
if (age > 25) {
  console.log("Age is greater than 25");
} else if (age < 30) {
  console.log("Age is less than 25");
} else {
  console.log("Age is equal to 25");
}

// Task-9 Program to compare two nmber using >= and <=
if (age >= 25) {
    console.log("Age is greater than 25");
  } else if (age <= 30) {
    console.log("Age is less than 25");
  } else {
    console.log("Age is equal to 25");
  }
// Task-10 Program to compare two nmber using == and ===
let number1 = 30;
let number2 = "30";
if (number1 == number2) {
    console.log("Both number are equal");  
}else{
    console.log("Both number aren't equal");  

}
if (number1 === number2) {  
    console.log("Both number are equal");  
}else{
    console.log("Both number aren't equal");  

}

// -----  Activity-4 [ Logical Operators ] ------
// Task-11 Program to uses the &&
let a1 = true;
let b1 = false;

console.log(a1 && b1); // false
console.log(a1 && true); // true
console.log(b1 && false); // false
console.log(true && true); // true

// Task-12 Program to uses the ||
let a2 = true;
let b2 = false;

console.log(a2 || b2); // true
console.log(a2 || false); // true
console.log(b2 || false); // false
console.log(false || false); // false

// Task-13 Program to uses the ||
let a3 = true;
let b3 = false;

console.log(!a3); // false
console.log(!b3); // true
console.log(!true); // false
console.log(!false); // true

// -----  Activity-4 [ Ternary Operators ] ------
// Task-14 Program to uses the ternatry operator
let number = 5;
let result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log(result); 
