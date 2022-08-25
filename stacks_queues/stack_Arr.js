/*

In this stack implementation, I will build a Stack data structure using ONLY ARRAYS
Remeber, Stacks abide by the LIFO (last in, first out) rule

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // This is the inital function that will be run to create the "stack" and its two properties
  constructor() {
    this.array = [];
  }

  // This "peek" method allows us to see the very top item in our respective stack 
  peek() {
    return this.array[this.array.length - 1];
  }

  // This "push" method allows us to add an item to the end of our respective stack
  push(value) {
    this.array.push(value);
    return this;
  }

  // This "pop" method allows us to remove the item at the end of our respective stack
  pop() {
  
  }
}

const myStack = new Stack();
