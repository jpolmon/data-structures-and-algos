const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let sort = true;
  let count = 0;
  while (sort) {
    let num1 = array[count];
    let num2 = array[count + 1];
    num1 > num2
      ? ((array[count] = num2), (array[count + 1] = num1), (count = 0))
      : count++;
    if (count === array.length) {
      sort = false;
    }
  }
}

// bubbleSort(numbers);

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let selection = array[i];
    for (let j = i; j < array.length; j++) {
      array[j] < selection ? (selection = array[j]) : (selection = selection);
    }
    array.splice(array.indexOf(selection), 1);
    array.push(array[i]);
    array[i] = selection;
  }
}

// selectionSort(numbers);

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let check = true;
    let index = i - 1;
    while (check) {
      temp < array[index] ? index-- : (check = false);
      if (index === -1) {
        check = false;
      }
    }
    array.splice(array.indexOf(temp), 1);
    array.splice(index + 1, 0, temp);
  }
}

// insertionSort(numbers);

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split array into right and left
  let left = array.slice(0, array.length / 2);
  let right = array.slice(array.length / 2);
  console.log(left);
  console.log(right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  for (let num1 of left) {
    for (let num2 of right) {
    }
  }
}

let answer = mergeSort(numbers);

console.log(answer);
