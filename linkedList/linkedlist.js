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

class LinkedList {
  constructor(value) {
    // in the beggining it will point to null
    // the tail in the begginig will point to the head too
    this.head = {
      value: value,
      next: null,
    };
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
    const newNode = {
      value: value,
      next: null,
    };

    // nesse ponto ele já entra na cadeia
    this.tail.next = newNode;
    // tail se torna ele na cadeia
    this.tail = newNode;
    this.length++;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(65);
myLinkedList.append(80);

console.log(myLinkedList);
