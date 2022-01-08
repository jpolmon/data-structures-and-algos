// let obj1 = { a: true };
// let obj2 = obj1;
// obj1.a = "booya";
// delete obj1;
// console.log("1", obj1);
// console.log("2", obj2);

// 10 ---> 5 ---> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    // Checking params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const currentNode = this.traverseToIndex(index - 1);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index >= this.length) {
      let currentNode = this.traverseToIndex(this.length - 2);
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let currentNode = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
    this.length--;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.remove(1);
myLinkedList.printList();

console.log(myLinkedList);
