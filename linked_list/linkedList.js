/*
Linked Lists in JavaScript, like most data structure, can be represented as an object where the nodes and their respective pointers inside are also represented using objects
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  // This "append" method takes a value that allows us to add on to the end of the current list
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // This "prepend" methos take a value that allows us to add on the to the beginning of the current list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5); 
// myLinkedList.append(16); 
// myLinkedList.prepend(1); 
// console.log(myLinkedList);