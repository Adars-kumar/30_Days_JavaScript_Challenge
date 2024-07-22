// -----  Activity-1 [  Function Declaration  ] ------
// Task-1 Check if a number is even or odd
function checkEvenOdd(num){
    if (num % 2 == 0) {
        console.log("Even");
        
    } else {
        console.log("Odd");
        
    }
}
checkEvenOdd(6);

// Task-2 Calculate the square of the number and return the result
function CalculateSquare(number){
    return number * number;
}
let number= 8;
valueOfSquare = CalculateSquare(number);
console.log("Square of " + number + " = " + valueOfSquare);


// -----  Activity-2 [  Function Expression = Function expressions can be either named or anonymous and are often used to create functions dynamically or pass them as arguments to other functions. ] ------
// Task-3 Find the maximum of two numbers
let findMax = (a, b) => a > b ? a : b;
const maxNumber = findMax(5, 10);
console.log(maxNumber); 

// Task-3 To concatenate two strings and return the result.
let concatenateStrings = (str1, str2) => str1 + str2;
let result = concatenateStrings("I am learning " , "JavaScript.");
console.log(result);

// -----  Activity-3 [  Arrow Function  ] ------
// Task - 5   Function to calculate the sum of two number and return the result.
let calculateSum = (a,b)=>{
    return a + b;
}
let sumResult = calculateSum(45,45);
console.log("Sum of two number " + sumResult);

// Task - 6  Function to check if string contain specific character and return boolean.
const containsCharacter = (str, char) => str.includes(char);

const result1 = containsCharacter('Hello, World!', 'W');
console.log(result1); 

const result2 = containsCharacter('Hello, World!', 'z');
console.log(result2); 


// -----  Activity-4 [ Function Parameters and Default Values ] ------
// Task - 7  function that takes two parameters and return their products. provide a default value for the second parameter
const multiply = (a, b = 1) => a * b;

const res1 = multiply(5, 3);
console.log(res1); 

const res2 = multiply(5);
console.log(res2); 
// Explanation : In this function, b has a default value of 1. If the second parameter is not provided when the function is called, b will default to 1, effectively returning the value of a

// Task - 8  Function that takes a person's age and returns a greeting message. provide a defualt value for the age.
function greeting(name, age){
    return `Hello, my name is ${name} and I'm ${age} years old.`
}
const stringResult = greeting("Mark Twian", 36);
console.log(stringResult);


// -----  Activity-5 [ High Order Functions ] ------
// Task - 7  a HOF that takes two function and a number, and calls the funciton that many times.
const HighOrderFunction = (fun1, fun2, times) =>{
    for (let index = 0; index < times; index++) {
        fun1();
        fun2();
    }
}

const sayHello = () => console.log("Hello");
const sayWorld = () => console.log("World");

HighOrderFunction(sayHello,sayWorld,3);

//  Task - 10 A HOF that takes two funcitons and a value, applies the first function to the value and then applies the second function to the result.
const compose = (func1, func2, value) => func2(func1(value));
const double = x => x * 2;
const square = x => x * x;

const results = compose(double, square, 3);
console.log(results); 



