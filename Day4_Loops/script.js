// -----  Activity-1 [For Loop ] ------
// Task-1 Print numbers from 1 to 10 
for (let index = 1; index < 11; index++) {
    console.log(index);
}
// Task-2 Print the multplication table of 5 
for (let index = 1; index <= 10; index++) {
    console.log("5 * "+ index + " = " + 5 * index);
}

// -----  Activity-2 [While Loop ] ------
// Task-3 Calculate the sum of numbers from 1 to 5
let sum = 0, i = 0;
while ( i <= 5) {
    sum += i;
    i++;
}
console.log('Sum = '+ sum);

// Task-4 Print numbers from 10 to 1 
i = 10
while ( i > 0) {
    console.log(i);
    i--;
}
// -----  Activity-3 [ Do... While Loop ] ------
// Task-5 Print numbers from 1 to 5
let k = 1;
do {
    console.log(i);
    k++;
} while (k <= 5);

// Task-6 Print factorial of a number .
let number = 5; 
let factorial = 1;
let j = 1;

do {
    factorial *= j;
    j++;
} while (j <= number);

console.log('Factorial of ' + number + ' is ' + factorial);

// -----  Activity-3 [ Do... While Loop ] ------
// Task-7 Program to print pattern
for (let a = 0; a <= 5; a++) {
    let row = "";
    for (let b = 0; b <= a; b++) {
        row += " * ";
    }
    console.log(row);
}
// -----  Activity-5 [ Loop Control Statments ] ------
// Task-8 Print numbers from 1 to 10 but skip number 5 using 'continue'
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Task-9 Print numbers from 1 to 10 but stop number at 7 using 'break'
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}