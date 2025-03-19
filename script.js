// Code Challenge: Simple Function

// Challenge:
// Create a function called `multiplyNumbers` that takes two numbers as parameters and returns their product.

// Explanation:
// The `multiplyNumbers` function is a simplistic function that takes two numbers as parameters and returns their product.

// Example:
// multiplyNumbers(4, 5) should return 20.

function multiplyNumbers(num1, num2) {
  // Write your code here
}

// Code Challenge: Simple Function

// Challenge:
// Create a function called `calculateAverage` that takes an array of numbers as a parameter and returns the average of those numbers.

// Explanation:
// The `calculateAverage` function is a simplistic function that takes an array of numbers as a parameter and returns the average value.
// It does so by summing up all the numbers in the array and dividing the sum by the total number of elements in the array.

// Example:
// calculateAverage([2, 4, 6, 8]) should return 5.

function calculateAverage(numbers) {
  // Write your code here
}

// Code Challenge: Simple Function

// Challenge:
// Create a function called `isPalindrome` that takes a string as a parameter and returns true if the string is a palindrome, and false otherwise.

// Explanation:
// The `isPalindrome` function is a simplistic function that takes a string as a parameter and checks whether it is a palindrome.
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

// Example:
// isPalindrome("racecar") should return true.
// isPalindrome("hello") should return false.

function isPalindrome(str) {
  // Write your code here
}

// Code Challenge: Simple Function

// Challenge:
// Create a function called `isEven` that takes a number as a parameter and returns true if the number is even, and false otherwise.

// Explanation:
// The `isEven` function is a simplistic function that takes a number as a parameter and checks whether it is even.
// An even number is divisible by 2 without a remainder.

// Example:
// isEven(4) should return true.
// isEven(7) should return false.

function isEven(number) {
  // Write your code here
}

// Code Challenge: Simple Function

// Challenge:
// Create a function called `reverseString` that takes a string as a parameter and returns the reversed version of that string.

// Explanation:
// The `reverseString` function is a simplistic function that takes a string as a parameter and returns the reversed version of that string.
// It reverses the order of characters in the string.

// Example:
// reverseString("hello") should return "olleh".
// reverseString("JavaScript") should return "tpircSavaJ".

function reverseString(str) {
  // Write your code here
}

// Code Challenge: Simple Function

// Challenge:
// Create a function called `findMaxNumber` that takes an array of numbers as a parameter and returns the largest number in the array.

// Explanation:
// The `findMaxNumber` function is a simplistic function that takes an array of numbers as a parameter and returns the largest number in the array.

// Example:
// findMaxNumber([10, 5, 7, 3, 9]) should return 10.

function findMaxNumber(numbers) {
  // Write your code here
}

// *************************************************** //
// *************************************************** //
// ****** DO NOT CHANGE CODE BELOW THIS LINE ********* //
// *************************************************** //
// *************************************************** //

// Tests:
function testFindMaxNumber() {
  const result1 = findMaxNumber([10, 5, 7, 3, 9]);
  console.log(result1 === 10 ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = findMaxNumber([2, 8, 6, 1, 9]);
  console.log(result2 === 9 ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = findMaxNumber([-5, -2, -9, -1]);
  console.log(result3 === -1 ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testFindMaxNumber();

// Tests:
function testReverseString() {
  const result1 = reverseString("hello");
  console.log(result1 === "olleh" ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = reverseString("JavaScript");
  console.log(result2 === "tpircSavaJ" ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = reverseString("racecar");
  console.log(result3 === "racecar" ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testReverseString();

// Tests:
function testIsEven() {
  const result1 = isEven(4);
  console.log(result1 === true ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = isEven(7);
  console.log(result2 === false ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = isEven(0);
  console.log(result3 === true ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testIsEven();

// Tests:
function testIsPalindrome() {
  const result1 = isPalindrome("racecar");
  console.log(result1 === true ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = isPalindrome("hello");
  console.log(result2 === false ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = isPalindrome("level");
  console.log(result3 === true ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testIsPalindrome();

// Tests:
function testCalculateAverage() {
  const result1 = calculateAverage([2, 4, 6, 8]);
  console.log(result1 === 5 ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = calculateAverage([10, 20, 30]);
  console.log(result2 === 20 ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = calculateAverage([5]);
  console.log(result3 === 5 ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testCalculateAverage();

// Tests:
function testMultiplyNumbers() {
  const result1 = multiplyNumbers(4, 5);
  console.log(result1 === 20 ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = multiplyNumbers(-2, 10);
  console.log(result2 === -20 ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = multiplyNumbers(0, 100);
  console.log(result3 === 0 ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testMultiplyNumbers();
