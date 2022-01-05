// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH"

function reverse(str) {
  // checking inputs
  if (!str || str.length < 2 || typeof str !== "string") {
    return console.log("hmm, that's not good");
  }

  let stringArray = str.split("");
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    newArray[i] = stringArray[str.length - 1 - i];
  }
  return newArray.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

let string = "Hi My name is Andrei";
let test = "I";
console.log(reverse(string));
console.log(reverse2(string));
console.log(reverse3(string));
