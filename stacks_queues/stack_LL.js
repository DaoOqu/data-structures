/*

In this stack implementation, I will build a Stack data structure using ONLY LINKED LISTS
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
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // This "peek" method allows us to see the very top item in our respective stack 
  peek() {
    return this.top;
  }

  // This "push" method allows us to add an item to the end of our respective stack
  // We can implement this using a linked list
  push(value) {
    const newNode = new Node(value);
    if(this.length = 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }

  // This "pop" method allows us to remove the item at the end of our respective stack
  pop() {
    if(!this.top) return null;
    if(this.top === this.bottom) this.bottom = null;

    // const temp = this.top; --> commented out in case we want to return the item that was removed
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');