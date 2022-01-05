// Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//---------------
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
// should return true.

// 2 parameters - arrays - no size limit
// function will return true or false

//---------------

// O(a * b) brute force solution is an option, but is not the best option because it is inefficient.

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         console.log("true");
//         return;
//       }
//     }
//   }
//   console.log("false");
// }

// containsCommonItem(array1, array2);

// array1 ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true,
// }
// array2[index] === obj.properties

//---------------

// O(a + B) more elegant solution that takes advantage of hash tables.

function containsCommonItem2(arr1, arr2) {
  // loop through the first array and create object where properties === items in the array.
  let map = {};
  arr1.forEach((letter) => {
    if (!map[letter]) {
      const item = letter;
      map[item] = true;
    }
  });
  // loop through the second array and check if item in second array exists on created object.
  for (const letter of arr2) {
    if (map[letter]) {
      return console.log("true");
    }
  }
  return console.log("false");
}

containsCommonItem2(array1, array2);

//---------------

// more readable ES6 solution

function containsCommonItem3(arr1, arr2) {
  return console.log(arr1.some((letter) => arr2.includes(letter)));
}

containsCommonItem3(array1, array2);
