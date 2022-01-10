class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return console.log("The stack is empty!");
    }
    return console.log(this.top.value);
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return console.log(this);
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return console.log(this);
  }

  pop() {
    let poppedNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
    }
    this.top = poppedNode.next;
    this.length--;
    return console.log(poppedNode);
  }

  isEmpty() {
    if (this.length === 0) {
      return console.log(true);
    }
  }
}

class ArrayStack {
  constructor() {
    this.stack = [];
  }

  peek() {
    console.log(this.stack[this.stack.length - 1]);
  }

  push(value) {
    this.stack.push(value);
    console.log(this.stack);
  }

  pop() {
    this.stack.pop();
    console.log(this.stack);
  }

  isEmpty() {
    this.stack.length === 0 ? console.log(true) : console.log(false);
  }
}

const myStack = new ArrayStack();

myStack.isEmpty();
myStack.peek();
myStack.push(1);
myStack.push(4);
myStack.push(9);
myStack.peek();
myStack.pop();
myStack.peek();

//----------------------------------------------------------------

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return console.log("The stack is empty!");
    }
    return console.log(this.first.value);
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return console.log(this);
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    console.log(this);
  }

  dequeue() {
    if (!this.first) {
      return console.log(null);
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return console.log(this);
    }
    this.first = this.first.next;
    this.length--;
    console.log(this);
  }

  isEmpty() {
    if (this.length === 0) {
      return console.log(true);
    }
  }
}

const myQueue = new Queue();

myQueue.isEmpty();
myQueue.peek();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.isEmpty();

class MyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return console.log(this);
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return console.log(this);
  }

  peek() {
    if (this.last.length > 0) {
      return console.log(this.last[0]);
    }
    return console.log(this.first[this.first.length - 1]);
  }
}

const queue = new MyQueue();
queue.peek();
queue.enqueue("Joy");
queue.enqueue("Matt");
queue.enqueue("Pavel");
queue.peek();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.peek();
