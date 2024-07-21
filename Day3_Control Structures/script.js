// -----  Activity-1 [ If-else Statements ] ------
// Task-1 Check if a number is positive, negative and zero
let num1 = 12;
if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
// Task-2 Check a person is eligible to vote (age>=18)
let age = 23;
if (age > 18) {
    console.log("Eligible to vote");

} else {
    console.log("Not Eligible to vote");
}

// -----  Activity-2 [ Nested If-else Statements ] ------
// Task-3 Program to find largest of three number using if-else statement.
let num2 = 5, num3 = 6;
if (num1 > num2 && num1 > num3) {
    console.log("Value of num1 is greater");
} else if (num2 > num3 && num2 > num1) {
    console.log("Value of num2 is greater");
} else {
    console.log("Value of num3 is greater");
}

// -----  Activity-3 [ Switch Case ] ------
// Task-4 determine the day of the week based on number(1-7)
let key = 4
switch (key) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid key!");

        break;
}
// Task-5 Program to assign grade('A', 'B', 'C', 'D', 'E') based on score 
function assignGrade(score) {
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    return grade;
}

// Example usage:
let score = 85;
let grade = assignGrade(score);
console.log(`The grade for a score of ${score} is ${grade}`);

// -----  Activity-4 [ Conditional(Ternary) Operator ] ------
// Task-6 Porgram to check if a number is even or odd
let result = num1 % 2 == 0? "Even" :"Odd";
console.log(result);

// -----  Activity-5 [ Combining Condition ] ------
// Task-6 Porgram to check If a year is a leap year[div by 4 but not 199 unless also div by 400]
let year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}