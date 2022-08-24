/*

In this stack implementation, I will build a Stack data structure using both Arrays and Linked Lists
Remeber, Stacks abide by the LIFO (last in, first out) rule

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // This is the inital function that will be run to create the "array" and its two properties
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // This "peek" method allows us to see the very top item in our respective stack 
  peek() {
    return this.top;
  }
}

const myStack = new Stack();
