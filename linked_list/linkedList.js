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

  // This "append" method takes a value that allows us to add on to current list
  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5); 
// myLinkedList.append(16); 
// console.log(myLinkedList);