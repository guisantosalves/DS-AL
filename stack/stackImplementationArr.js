class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    // the last position
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const mystack = new Stack();
mystack.push("google");
mystack.push("udemy");
console.log(mystack.push("discord"));

mystack.pop();
mystack.pop();
console.log(mystack.pop());
