/*
Linked Lists in JavaScript, like most data structure, can be represented as an object where the nodes and their respective pointers inside are also represented using objects
*/

class LinkedList {
  // This is the function that runs at the start to initialize a Linked List and its properties
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;   
  }
}

// const myLinkedList = new LinkedList();
// console.log(myLinkedList);