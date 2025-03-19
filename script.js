// Code Challenge: If/Else Statement

// Challenge:
// Create a function called `checkNumber` that takes a number as a parameter and returns a message based on the number's value.
// - If the number is greater than 0, return "Positive number".
// - If the number is less than 0, return "Negative number".
// - If the number is 0, return "Zero".

// Example:
// checkNumber(5) should return "Positive number".
// checkNumber(-3) should return "Negative number".
// checkNumber(0) should return "Zero".

function checkNumber(number) {
  // Write your code here
}

// Code Challenge: If/Else Statement

// Challenge:
// Create a function called `gradeStudent` that takes a number grade as a parameter and returns the corresponding letter grade.
// - If the grade is greater than or equal to 90, return "A".
// - If the grade is between 80 and 89, return "B".
// - If the grade is between 70 and 79, return "C".
// - If the grade is between 60 and 69, return "D".
// - If the grade is less than 60, return "F".

// Example:
// gradeStudent(95) should return "A".
// gradeStudent(82) should return "B".
// gradeStudent(75) should return "C".
// gradeStudent(68) should return "D".
// gradeStudent(42) should return "F".

function gradeStudent(grade) {
  // Write your code here
}

// Code Challenge: If/Else Statement

// Challenge:
// Create a function called `isLeapYear` that takes a year as a parameter and returns true if it is a leap year, and false otherwise.
// - A leap year is divisible by 4, except for years that are divisible by 100 but not divisible by 400.

// Example:
// isLeapYear(2020) should return true.
// isLeapYear(1900) should return false.
// isLeapYear(2000) should return true.

function isLeapYear(year) {
  // Write your code here
}

// Code Challenge: If/Else Statement

// Challenge:
// Create a function called `isPalindrome` that takes a string as a parameter and returns true if it is a palindrome, and false otherwise.
// - A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces and punctuation.

// Example:
// isPalindrome("racecar") should return true.
// isPalindrome("hello") should return false.
// isPalindrome("A man, a plan, a canal: Panama") should return true.

function isPalindrome(str) {
  // Write your code here
}

// *************************************************** //
// *************************************************** //
// ****** DO NOT CHANGE CODE BELOW THIS LINE ********* //
// *************************************************** //
// *************************************************** //

// Tests:
function testIsPalindrome() {
  const result1 = isPalindrome("racecar");
  console.log(result1 === true ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = isPalindrome("hello");
  console.log(result2 === false ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = isPalindrome("A man, a plan, a canal: Panama");
  console.log(result3 === true ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testIsPalindrome();

// Tests:
function testIsLeapYear() {
  const result1 = isLeapYear(2020);
  console.log(result1 === true ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = isLeapYear(1900);
  console.log(result2 === false ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = isLeapYear(2000);
  console.log(result3 === true ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testIsLeapYear();

// Tests:
function testGradeStudent() {
  const result1 = gradeStudent(95);
  console.log(result1 === "A" ? "Test 1 Passed" : "Test 1 Failed");

  const result2 = gradeStudent(82);
  console.log(result2 === "B" ? "Test 2 Passed" : "Test 2 Failed");

  const result3 = gradeStudent(75);
  console.log(result3 === "C" ? "Test 3 Passed" : "Test 3 Failed");

  const result4 = gradeStudent(68);
  console.log(result4 === "D" ? "Test 4 Passed" : "Test 4 Failed");

  const result5 = gradeStudent(42);
  console.log(result5 === "F" ? "Test 5 Passed" : "Test 5 Failed");
}

// Run the tests
testGradeStudent();

// Tests:
function testCheckNumber() {
  const result1 = checkNumber(5);
  console.log(
    result1 === "Positive number" ? "Test 1 Passed" : "Test 1 Failed"
  );

  const result2 = checkNumber(-3);
  console.log(
    result2 === "Negative number" ? "Test 2 Passed" : "Test 2 Failed"
  );

  const result3 = checkNumber(0);
  console.log(result3 === "Zero" ? "Test 3 Passed" : "Test 3 Failed");
}

// Run the tests
testCheckNumber();
