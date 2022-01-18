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
    for (let j = i + 1; j < array.length; j++) {
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
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  let array = [...left, ...right];
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
  return array;
}

// let answer = mergeSort(numbers);

// console.log(answer);

function quickSort(array) {
  if (array.length <= 2) {
    return array;
  }

  let pivot = array[Math.floor(Math.random() * (array.length - 1))];
  console.log(pivot);
  let left = [];
  let right = [];
  right.push(pivot);
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    if (temp < pivot) {
      left.push(temp);
    } else if (temp > pivot) {
      right.push(temp);
    }
  }
  return join(quickSort(left), quickSort(right));
}

function join(left, right) {
  return [...left, ...right];
}

console.log(quickSort(numbers));

// _______ INTERVIEW QUESTIONS _________

//#1 - Sort 10 schools around your house by distance: insertion sort since there are only a few schools.

//#2 - eBay sorts listings by the current Bid amount: radix or counting since they are all numbers of fixed length.

//#3 - Sport scores on ESPN: quick sort since it's lighter on space complexity.

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data: Merge sort since you are already using external memory, can't afford worst case of quick sort.

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews: insertion since you have an already sorted list that you are only adding 2 reviews to.

//#6 - Temperature Records for the past 50 years in Canada: radix/counting if you know that the temperatures will not have decimal points. otherwise quick sort.

//#7 - Large user name database needs to be sorted. Data is very random: merge sort if memory isn't too expensive or quick if you are not worried about the worst case.

//#8 - You want to teach sorting for the first time: bubble and selection because they are the most simple of the algorithms.
