/*
Linked Lists in JavaScript, like most data structure, can be represented as an object where the nodes and their respective pointers inside are also represented using objects
*/

// class Node {
//   // This class/function runs within some linked list methods in order to better maintain readability and functionalitly
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

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
    const newNode = {
      value: value,
      next: null
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // This "prepend" methos take a value that allows us to add on the to the beginning of the current list
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }

    newNode.next = this.head;
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
      next: null
    }

    const leader = this.traverseToIndex(index - 1);
    const temp = leader.next;
    leader.next = newNode;
    newNode.next = temp;
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
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
// console.log(myLinkedList);