/*

In this queue implementation, I will build a Queue data structure using ONLY ARRAYS
Remeber, Stacks abide by the FIFO (first in, first out) rule

*/

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
}

const myQueue = new Queue();