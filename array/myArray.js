/*
Arrays in JavaScript are just objects with integer-based keys that act like indexes
Regardless, this implementation is still applicable to how arrays work in other languages
*/

class MyArray {
  // This is the inital function that will be run to create the "array" and its two properties
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // This is the "access" method that takes an index to grab the data from memory
  get(index) {
    return this.data[index];
  }

  // This is the "push" method that adds an item to the end of the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // This is the "pop" methods that removes an item from the end of the array
  pop() {
    const lastItem = this.data[this.length -1 ];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}


const newArray = new MyArray();
newArray.push('hello');
newArray.push('world');
newArray.push('!');
newArray.pop();
newArray.pop();
console.log(newArray);