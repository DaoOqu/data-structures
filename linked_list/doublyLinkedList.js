/*
This is the same as our Linked List program, except it represents a doubly linked list instead
of a singly linked list
*/


// class Node {
//   // This class/function runs within some linked list methods in order to better maintain readability and functionalitly
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

class DoublyLinkedList {
  // This is the function that runs at the start to initialize a Linked List and its properties
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;   
  }

  // This "append" method takes a value that allows us to add on to the end of the current list
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // This "prepend" methos take a value that allows us to add on the to the beginning of the current list
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  // this method was used for debugging purposes -> prints the list in an array format
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return array;
  }

  // This "insert" method takes an index and value and allows us to add a node in a specific place anywhere in the current list
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null
    };

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  // This method handles the traversal to the index specified within some methods
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // This "remove" method takes an index and allows us to remove a node from a specific index
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}