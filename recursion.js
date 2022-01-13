// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually have a return for both the base case and the recursive case.

// Write two functions that find the factorial of any number. One should use recursive, the other should just use a for loop.

function findFactorialRecursive(number) {
  let answer = number;
  if (number === 2) {
    return answer;
  }
  return answer * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = number;
  while (number > 2) {
    answer = answer * (number - 1);
    number--;
  }
  return answer;
}

// console.log(findFactorialRecursive(5));
// console.log(findFactorialIterative(5));

// Given a number N, return the index value of the FIbonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// The pattern of the sequence is that each value is the sum of the 2 previous, that means that for N = 5 -> 2 + 3.

function fibonacciIterative(n) {
  // O(n)
  if (n < 2) {
    return n;
  }
  let arr = [0, 1];
  let i = 2;
  while (i <= n) {
    arr.push(arr[i - 1] + arr[i - 2]);
    i++;
  }
  return arr[n];
}

function fibonacciIterativeRecursive(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }
  return (
    fibonacciIterativeRecursive(n - 1) + fibonacciIterativeRecursive(n - 2)
  );
}

// console.log(fibonacciIterative(7));
// console.log(fibonacciIterativeRecursive(7));

function reverseStr(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStr(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStr("yoyo master"));
