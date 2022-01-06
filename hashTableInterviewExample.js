// Google Question: First recurring number.
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

let array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
let array3 = [2, 3, 4, 5];

function findFirstRecurringCharacter(arr) {
  let i = 0;
  let map = {};
  for (const number of arr) {
    if (map[number] !== undefined) {
      return number;
    }
    map[number] = i;
    i++;
  }
  return undefined;
} // O(n)

console.log(findFirstRecurringCharacter(array1));
console.log(findFirstRecurringCharacter(array2));
console.log(findFirstRecurringCharacter(array3));
