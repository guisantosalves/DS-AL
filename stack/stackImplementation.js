class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// last in first out
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    // it will compare the reference
    if (this.top == this.bottom) {
      this.bottom = null;
    }

    // I need just to hold the pointer here
    // if it wont be used in anywhere else it will be collected
    const holdingPointer = this.top;
    // top will be the next in the stack
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const mystack = new Stack();
mystack.push("google");
mystack.push("udemy");
mystack.push("discord");

mystack.pop();
mystack.pop();
console.log(mystack.pop());
