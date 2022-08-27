/*

In this queue implementation, I will build a Queue data structure using ONLY LINKED LISTS
Remeber, Stacks abide by the FIFO (first in, first out) rule

*/

class Node {
  constructor() {
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

  // This method "peek" allows us to look at the first item in our queue
  peek() {
    return this.first;
  }

  // This method "enqueue" allows us to add to the end of our queue
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // This method "dequeue" allows us to remove an item at the beginning of our queue
  dequeue(value) {
    if(!this.first) return null;

    if(this.first === this.last) {
      this.last = null;
    }
  }
}

const myQueue = new Queue();