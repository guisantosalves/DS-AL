/*
The main operations LIKED LIST
- Traversal
- Insertion
- Deletion
- Search
- Sort
*/

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class LNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    // in the beggining it will point to null
    // the tail in the begginig will point to the head too
    this.head = new LNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  //   append(value) {
  //     const newNode = {
  //       value: value,
  //       next: null,
  //     };

  //     if (!this.head.next || this.head.next == null) {
  //       this.head.next = newNode;
  //       this.tail = newNode;
  //       this.length = 2;
  //       return;
  //     }

  //     let nextNode = this.head.next;
  //     let i = 1;
  //     while (nextNode != null) {
  //       i++;
  //       if (nextNode.next == null) {
  //         // here I found the last node and appended the value
  //         nextNode.next = newNode;
  //         this.tail = nextNode.next;
  //         this.length = i;
  //         break;
  //       }
  //       nextNode = nextNode.next;
  //     }
  //   }

  append(value) {
    const newNode = new LNode(value);

    // in that time, tail is the prev one
    newNode.prev = this.tail;
    // nesse ponto ele já entra na cadeia
    this.tail.next = newNode;
    // tail se torna ele na cadeia
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new LNode(value);

    newNode.next = this.head; // aponta para o current in that time
    this.head.prev = newNode;
    this.head = newNode; // head become the newNode
    this.length++;
  }

  insert(index, value) {
    if (index == 0) {
      this.prepend(value);
      return;
    }
    if (index == this.length) {
      this.append(value);
      return;
    }
    let auxIndex = 0;
    let auxNode = this.head;
    let prevNode;
    while (auxNode != null) {
      if (auxIndex == index) {
        const newNode = new LNode(value);
        // auxnode -> current
        newNode.next = auxNode;
        // pointing to the prev
        newNode.prev = prevNode;

        // prev point for the new one inserted
        prevNode.next = newNode;

        // the old (current) one .prev will point to the new inserted
        auxNode.prev = newNode;
        return;
      }
      prevNode = auxNode;
      auxNode = auxNode.next;
      auxIndex++;
    }
    console.log("index out of range");
  }

  remove(index) {
    if (index == 0) {
      // head become the next one
      let nextOne = this.head.next;
      nextOne.prev = null; // the head will point null to prev

      this.head = this.head.next;
      return;
    }

    let auxIndex = 0;
    let auxNode = this.head;
    let prevNode;
    while (auxNode != null) {
      if (auxIndex == index) {
        // auxnode -> current
        // prevnode jump into the (from the current)next
        prevNode.next = auxNode.next;
        // avoid the one removed
        auxNode.prev = prevNode; // it will point to the prev correctly
        return;
      }
      prevNode = auxNode;
      auxNode = auxNode.next;
      auxIndex++;
    }
    console.log("index out of range");
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  tranverseToIndex(index) {
    let currNode = this.head;
    let id = 0;
    while (currNode != null) {
      if (id == index) {
        return currNode;
      }

      currNode = currNode.next;
      id++;
    }
    console.log("index out of range");
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      second.prev = temp;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(65);
myLinkedList.prepend(1);
// myLinkedList.append(80);
// myLinkedList.prepend(33);

myLinkedList.insert(3, 666);

console.log(myLinkedList.printList());
// myLinkedList.remove(0);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.tranverseToIndex(0));

console.log(myLinkedList.reverse());

console.log(myLinkedList.tranverseToIndex(1));
// console.log(myLinkedList.tranverseToIndex(3));
