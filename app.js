// Data Types
let number = 10;
let text = "Hello";
let isActive = true;
let array = [1, 2, 3, 4, 5];
let person = { name: 'Rynier', age: 19 };

// Arithmetic Operators
let sum = number + 5;
let difference = number - 3;
let product = number * 2;
let quotient = number / 2;
let remainder = number % 3;

// Logical Operators
let isPositive = number > 0;
let isEven = number % 2 === 0;

// Prime number check function
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Palindrome check function
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Output data types, arithmetic results, and logical checks
console.log('Data Types:');
console.log('Number:', number);
console.log('Text:', text);
console.log('Is Active:', isActive);
console.log('Array:', array);
console.log('Person Object:', person);

console.log('\nArithmetic Operations:');
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
console.log('Remainder:', remainder);

console.log('\nLogical Operations:');
console.log('Is Positive:', isPositive);
console.log('Is Even:', isEven);

// Conditional Statements

// if...else
console.log('\nConditional Statements (if...else):');
if (number > 0) {
    console.log('The number is positive.');
} else if (number < 0) {
    console.log('The number is negative.');
} else {
    console.log('The number is zero.');
}

// switch
console.log('\nConditional Statements (switch):');
switch (number) {
    case 10:
        console.log('The number is 10.');
        break;
    case 20:
        console.log('The number is 20.');
        break;
    default:
        console.log('The number is neither 10 nor 20.');
}

// Loops

// for loop
console.log('\nFor Loop:');
for (let i = 0; i < array.length; i++) {
    console.log('Array element at index', i, ':', array[i]);
}

// while loop
console.log('\nWhile Loop:');
let index = 0;
while (index < array.length) {
    console.log('Array element at index', index, ':', array[index]);
    index++;
}

// Check if the number is even or odd
console.log('\nOdd or Even Check:');
if (number % 2 === 0) {
    console.log(number, 'is an even number.');
} else {
    console.log(number, 'is an odd number.');
}

// Check if the number is a prime number
console.log('\nPrime Number Check:');
if (isPrime(number)) {
    console.log(number, 'is a prime number.');
} else {
    console.log(number, 'is not a prime number.');
}

// Check if the text is a palindrome
console.log('\nPalindrome Check:');
if (isPalindrome(text.toLowerCase())) {
    console.log('The text "' + text + '" is a palindrome.');
} else {
    console.log('The text "' + text + '" is not a palindrome.');
}