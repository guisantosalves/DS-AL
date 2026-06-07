class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // the last one will pont to the new NODE
      // making the newNode the last on the queue
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    // the second will become the first and on and on
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }

  isEmpty() {
    return this.length == 0;
  }
}

const queue = new Queue();

// console.log(queue.peek());
queue.enqueue("joy");
queue.enqueue("matt");
queue.enqueue("pavel");
queue.enqueue("samir");
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);